import { Schema, model } from "mongoose";

const experienceSchema = new Schema({
  company_name: { type: String, default: "" },
  company_size: { type: String, default: "" },
  company_id: { type: String, default: "" },
  company_founded: { type: Number, default: 0 },
  company_industry: { type: String, default: "" },
  end_date: { type: String, default: "" },
  start_date: { type: String, default: "" },
  current_job: { type: Boolean, default: false },
  company_location_name: { type: String, default: "" },
  company_location_country: { type: String, default: "" },
  company_location_continent: { type: String, default: "" },
  title_name: { type: String, default: "" },
  title_role: { type: String, default: "" },
  title_levels: { type: [String], default: [] },
});

const educationSchema = new Schema({
  school_name: { type: String },
  school_type: { type: String },
  end_date: { type: String },
  start_date: { type: String },
  gpa: { type: Number },
  degrees: { type: [String] },
  majors: { type: [String] },
  minors: { type: [String] },
});

const jobOfferSchema = new Schema(
  {
    full_name: { type: String, default: "" },
    first_name: { type: String, default: "" },
    last_name: { type: String, default: "" },
    gender: { type: String, default: "" },
    birth_year: { type: Number, default: 0 },
    birth_date: { type: String, default: "" },
    industry: { type: String, default: "" },
    job_title: { type: String, default: "" },
    job_title_role: { type: String, default: "" },
    job_title_sub_role: { type: String, default: "" },
    job_title_levels: { type: [String], default: [] },
    job_company_id: { type: String, default: "" },
    job_company_name: { type: String, default: "" },
    job_start_date: { type: String, default: "" },
    interests: { type: [String], default: [] },
    skills: { type: [String], default: [] },
    experience: { type: [experienceSchema], default: [] },
    education: { type: [educationSchema], default: [] },
    status: { type: String },
    candidates_id: { type: [String] },
    job_description: { type: String },
  },
  { collection: "jobOffers" }
);

const JobOfferCollection = model("jobOffers", jobOfferSchema);
export { JobOfferCollection };
