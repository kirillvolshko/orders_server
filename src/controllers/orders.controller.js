export class OrdersController {
  get = async (res, req, next) => {
    try {
      const { userId } = req.params;
      res.status(200).json("orders");
    } catch (error) {
      next(error);
    }
  };
  create = async (res, req, next) => {
    try {
      res.status(200).json("creat");
    } catch (error) {
      next(error);
    }
  };
}
