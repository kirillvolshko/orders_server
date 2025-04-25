export class ProductsController {
  get = async (req, res, next) => {
    try {
      res.status(200).json("get");
    } catch (error) {
      next(error);
    }
  };
  create = async (req, res, next) => {
    try {
      res.status(200).json("create");
    } catch (error) {
      next(error);
    }
  };
}
