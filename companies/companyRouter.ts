const { Router } = require("express");
import CompanyController from "./companyController";

const companyRouter = new Router();

companyRouter.get("/", CompanyController.getCompanies);
companyRouter.get("/:id", CompanyController.getCompany);
companyRouter.post("/", CompanyController.addCompany);
companyRouter.put("/:id", CompanyController.updateCompany);
companyRouter.delete("/:id", CompanyController.deleteCompany);

export default companyRouter;
