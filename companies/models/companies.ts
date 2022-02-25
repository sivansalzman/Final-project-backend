import { Company } from "../types";
import Companies from "./companys.json";

const companies: Company[] = [];

const separateCompanies = () => {
  Companies.forEach((companyObject) => {
    companies.push(companyObject as Company);
  });
};
const getCompanies = () => {
  separateCompanies();
  if (companies.length === 0) {
    return [];
  }
  return [...companies];
};
const getCompany = (name: string) => {
  const company = getCompanies().find((c) => c.name === name);
  return company;
};

export { getCompanies, getCompany };
