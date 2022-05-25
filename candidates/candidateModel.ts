import { Schema, model } from "mongoose";

const experienceSchema = new Schema({
  company_id: { type: String },
  company_name: { type: String },
  company_founded: { type: Number },
  company_industry: { type: String },
  company_size: { type: String },
  current_job: { type: Boolean },
  company_location_name: { type: String },
  company_location_country: { type: String },
  company_location_continent: { type: String },
  end_date: { type: String },
  start_date: { type: String },
  title_name: { type: String },
  title_role: { type: String },
  title_levels: { type: [String] },
});

const educationSchema = new Schema({
  school_name: { type: String },
  school_type: { type: String },
  degrees: { type: [String] },
  start_date: { type: String },
  end_date: { type: String },
  majors: { type: [String] },
  minors: { type: [String] },
  gpa: { type: Number },
});

const candidateSchema = new Schema(
  {
    googleID: { type: String, default: "" },
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
    personalInfo: { type: String, default: "" },
  },
  { collection: "candidates" }
);

const CandidateCollection = model("Candidate", candidateSchema);
export { CandidateCollection };
