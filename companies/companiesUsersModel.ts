import { Schema, model } from "mongoose";

const companyUsersSchema = new Schema(
  {
    googleID: { type: String },
    name: { type: String },
    rule: { type: String },
    company_name: { type: String },
  },
  { collection: "companiesUsers" }
);

const CompanyUsersCollection = model("companiesUsers", companyUsersSchema);
export { CompanyUsersCollection };
