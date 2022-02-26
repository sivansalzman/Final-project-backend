import { Company } from "../types";
const Companies = require("./company");

const companies: Company[] = [];

const separateCompanies = () => {
  Companies.forEach((companyObject) => {
    console.log(companyObject);
    companies.push(companyObject as Company);
  });
};
const getCompanies = () => {
  try {
    const companies =  Companies.find();
    return companies;
  } catch (err) {
    throw err;
  }
};
const getCompany = (name: string) => {
  const company = getCompanies().find((c) => c.name === name);
  return company;
};
const addCompany = () => {
  //
};
const updateCompany = () => {
  //
};
const deleteCompany = () => {
  //
};

export { getCompanies, getCompany, addCompany, updateCompany, deleteCompany };
