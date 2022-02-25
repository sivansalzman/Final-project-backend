import getCompanies from "./getCompanies";
import getCompany from "./getCompany";
import addCompany from "./addCompany";
import updateCompany from "./updateCompany";
import deleteCompany from "./deleteCompany";

export default {
  getCompanies: getCompanies(),
  getCompany: getCompany(),
  addCompany: addCompany(),
  updateCompany: updateCompany(),
  deleteCompany: deleteCompany(),
};
