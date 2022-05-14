const { Router } = require("express");
import googleAuthController from "./googleAuthController";

const googleAuthRouter = new Router();

googleAuthRouter.post("/login", googleAuthController.googleAuth);
googleAuthRouter.put("/:id", googleAuthController.editUser);
googleAuthRouter.get("/logout", googleAuthController.getLogout);

export default googleAuthRouter;
