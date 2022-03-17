import { Schema, model } from "mongoose";

const experienceSchema = new Schema({
  title_name: { type: String },
  title_role: { type: String },
  years_experience: { type: String },
  skills: { type: [String] },
});

const jobOfferSchema = new Schema(
  {
    _id: { type: String },
    job_company_name: { type: String },
    job_title: { type: String },
    job_title_role: { type: String },
    job_title_sub_role: { type: String },
    role_description: { type: String },
    job_start_date: { type: String },
    experience: { type: experienceSchema },
  },
  { collection: "jobOffers" }
);

const JobOfferCollection = model("jobOffers", jobOfferSchema);
export { JobOfferCollection };
