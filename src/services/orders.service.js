import prisma from "../lib/prisma.js";
import ApiError from "../utils/api-error.js";
class OrdersService {
  get = async (userId) => {
    const orders = await prisma.order.findMany({
      where: { userId: userId },
      select: {
        id: true,
        user: {
          select: {
            name: true,
          },
        },
        product: {
          select: {
            name: true,
          },
        },
        quantity: true,
        totalPrice: true,
        createdAt: true,
      },
    });
    if (orders.length === 0) {
      throw ApiError.BadRequest("Orders not found", 404);
    }
    return orders;
  };
  create = async (body) => {
    const { userId, productId, quantity, totalPrice } = body;
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw ApiError.BadRequest("User not found", 404);
    }
    if (user.balance < totalPrice) {
      throw ApiError.BadRequest("Low balance", 404);
    }
    const product = await prisma.product.findUnique({
      where: { id: productId },
    });
    if (!product) {
      throw ApiError.BadRequest("Product not found", 404);
    }
    if (product.stock < quantity) {
      throw ApiError.BadRequest("There is no required quantity of goods", 404);
    }
    const [updatedUser, updatedProduct, order] = await prisma.$transaction([
      prisma.user.update({
        where: { id: userId },
        data: {
          balance: user.balance - totalPrice,
        },
      }),
      prisma.product.update({
        where: { id: productId },
        data: {
          stock: product.stock - quantity,
        },
      }),
      prisma.order.create({
        data: {
          userId,
          productId,
          quantity,
          totalPrice,
        },
      }),
    ]);
    return order;
  };
}
export default new OrdersService();
