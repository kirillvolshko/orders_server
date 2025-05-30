import { Router } from "express";
import UsersController from "../controllers/users.controller.js";

const usersRoutes = Router();

usersRoutes.get("/profile/:userId", UsersController.profile);
usersRoutes.post("/login", UsersController.login);
usersRoutes.post("/registration", UsersController.registration);

export default usersRoutes;
