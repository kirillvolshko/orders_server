export class UsersController {
  registration = async (req, res, next) => {
    try {
      req.body;
      res.status(200).json("register");
    } catch (error) {
      next(error);
    }
  };
  login = async (req, res, next) => {
    try {
      req.body;
      res.status(200).json("login");
    } catch (error) {
      next(error);
    }
  };
}
