import UsersService from "../services/users.service.js";

class UsersController {
  profile = async (req, res, next) => {
    const { userId } = req.params;
    try {
      const user = await UsersService.profile(userId);
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  };
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
