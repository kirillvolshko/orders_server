import UsersService from "../services/users.service.js";

class UsersController {
  registration = async (req, res, next) => {
    try {
      const user = await UsersService.registration(req.body);
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  };
  login = async (req, res, next) => {
    try {
      const user = await UsersService.login(req.body);
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  };
}
export default new UsersController();
