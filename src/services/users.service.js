import bcrypt from "bcrypt";
import ApiError from "../utils/api-error.js";
import prisma from "../lib/prisma.js";

class UsersService {
  profile = async (userId) => {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });
    return {
      id: user.id,
      email: user.email,
      name: user.name,
      balance: user.balance,
    };
  };
  registration = async (body) => {
    const { name, email, password } = body;
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });
    if (existingUser) {
      throw ApiError.BadRequest("User already exists", 400);
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
    return { user: { id: user.id, email: user.email, name: user.name } };
  };
  login = async (body) => {
    const { email, password } = body;
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      throw ApiError.BadRequest("User not found", 404);
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw ApiError.BadRequest("Wrong password", 400);
    }
    return { user: { id: user.id, email: user.email, name: user.name } };
  };
}
export default new UsersService();
