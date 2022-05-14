const { Router } = require("express");
import UserController from "./userController";

const userRouter = new Router();

userRouter.post("/login", UserController.userLogin);
userRouter.put("/:id", UserController.editUser);
// userRouter.post("/register", UserController.userRegister);
userRouter.get("/logout", UserController.userLogout);

export default userRouter;
