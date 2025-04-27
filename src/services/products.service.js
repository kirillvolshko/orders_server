import prisma from "../lib/prisma.js";

class ProductsService {
  get = async () => {
    const products = await prisma.product.findMany();
    return products;
  };
  create = async (body) => {
    const { name, price, stock } = body;
    const product = await prisma.product.create({
      data: {
        name,
        price,
        stock,
      },
    });
    return product;
  };
}
export default new ProductsService();
