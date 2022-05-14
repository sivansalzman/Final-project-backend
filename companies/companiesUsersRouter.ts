const { Router } = require("express");
import companiesUsersController from "./companiesUsersController";

const companyUsersRouter = new Router();

companyUsersRouter.get("/", companiesUsersController.getCompaniesUsers);
companyUsersRouter.get("/:id", companiesUsersController.getCompanyUser);
companyUsersRouter.post("/", companiesUsersController.addCompanyUser);
companyUsersRouter.put("/:id", companiesUsersController.updateCompanyUser);

export default companyUsersRouter;
