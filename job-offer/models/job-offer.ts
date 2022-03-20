import { Schema, model } from "mongoose";

const jobOfferSchema = new Schema(
  {
    _id: { type: String },
    job_company_name: { type: String },
    job_title: { type: String },
    job_title_role: { type: String },
    job_title_sub_role: { type: String },
    role_description: { type: String },
    job_start_date: { type: String },
    years_experience: { type: String },
    skills: { type: [String] },
    status: { type: String },
    candidates_id: { type: [String] },
  },
  { collection: "jobOffers" }
);

const JobOfferCollection = model("jobOffers", jobOfferSchema);
export { JobOfferCollection };
