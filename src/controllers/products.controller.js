import productsService from "../services/products.service.js";

class ProductsController {
  get = async (req, res, next) => {
    try {
      const products = await productsService.get();
      res.status(200).json(products);
    } catch (error) {
      next(error);
    }
  };
  create = async (req, res, next) => {
    try {
      const product = await productsService.create(req.body);
      if (product) res.status(200).json("create success");
    } catch (error) {
      next(error);
    }
  };
}
export default new ProductsController();
