import { GraphQLInt } from "graphql";
import { Schema, model } from "mongoose";

const experienceSchema = new Schema({
  company_id: { type: String },
  company_name: { type: String },
  company_founded: { type: String },
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
    full_name: { type: String },
    first_name: { type: String },
    last_name: { type: String },
    gender: { type: String },
    birth_year: { type: String },
    birth_date: { type: String },
    industry: { type: String },
    job_title: { type: String },
    job_title_role: { type: String },
    job_title_sub_role: { type: String },
    job_title_levels: { type: [String] },
    job_company_id: { type: String },
    job_company_name: { type: String },
    job_start_date: { type: String },
    interests: { type: [String] },
    skills: { type: [String] },
    experience: { type: [experienceSchema] },
    education: { type: [educationSchema] },
  },
  { collection: "candidates" }
);

const CandidateCollection = model("Candidate", candidateSchema);
export { CandidateCollection };
