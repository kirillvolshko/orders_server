import ordersService from "../services/orders.service.js";

class OrdersController {
  get = async (req, res, next) => {
    const { userId } = req.params;
    try {
      const orders = await ordersService.get(userId);
      res.status(200).json(orders);
    } catch (error) {
      next(error);
    }
  };
  create = async (req, res, next) => {
    try {
      const order = await ordersService.create(req.body);
      if (order) res.status(200).json("create sucess");
    } catch (error) {
      next(error);
    }
  };
}
export default new OrdersController();
