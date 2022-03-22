const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type JobOffer {
    job_offer_ID: String
    full_name: String
    first_name: String
    last_name: String
    gender: String
    birth_year: String
    birth_date: String
    industry: String
    job_title: String
    job_title_role: String
    job_title_sub_role: String
    job_title_levels: [String]
    job_company_id: String
    job_company_name: String
    job_start_date: String
    interests: [String]
    skills: [String]
    experience: [experience]
    education: [education]
    candidates_id: [String]
    status: String
  }

  type experience {
    company_name: String
    company_founded: String
    company_industry: String
    company_size: String
    current_job: Boolean
    company_location_name: String
    company_location_country: String
    company_location_continent: String
    end_date: String
    start_date: String
    title_name: String
    title_role: String
    title_levels: [String]
  }

  type education {
    school_name: String
    school_type: String
    degrees: [String]
    start_date: String
    end_date: String
    majors: [String]
    minors: [String]
    gpa: String
  }

  "Input object for getting job offer"
  input GetJobOfferInput {
    "ID of the company we wish to get"
    jobOfferID: String!
  }

  input GetJobOfferInputCandidate {
    CandidateJobOfferID: String!
  }
  "Add experience input"
  input AddExperienceInput {
    title_name: String
    title_role: String
    years_experience: String
    skills: [String]
  }

  "Add job offer input"
  input AddJobOfferInput {
    job_company_name: String
    industry: String
    job_title: String
    job_title_role: String
    job_title_sub_role: String
    role_description: String
    job_start_date: String
    years_of_experience: String
    skills: [String]
    status: String
    candidates_id: [String]
  }

  "Update job offer input"
  input UpdateJobOfferInput {
    job_offer_ID: String
    job_company_name: String
    industry: String
    job_title: String
    job_title_role: String
    job_title_sub_role: String
    role_description: String
    job_start_date: String
    experience: AddExperienceInput
    status: String
    candidates_id: String
  }

  "Delete job offer input"
  input DeleteJobOfferInput {
    jobOfferID: String
  }

  input UpdateJobOfferInput {
    jobOfferID: String
    jobOfferInfo: UpdateJobOfferInput
  }

  type Query {
    "Will return all companies"
    getJobsOffers: [JobOffer]
    "Will return specific company"
    getJobOffer(getJobOfferInput: GetJobOfferInput!): JobOffer

    getJobOfferByCandidate(
      GetJobOfferInputCandidate: GetJobOfferInputCandidate!
    ): [JobOffer]
  }
  type Mutation {
    "Will add company"
    addJobOffer(addJobOffer: AddJobOfferInput!): Boolean
    "Will update company"
    updateJobOffer(updatejobOfferInput: UpdateJobOfferInput!): Boolean
    "Will delete company"
    deleteJobOffer(deleteJobOfferInput: DeleteJobOfferInput!): Boolean
  }
`;

export default typeDefs;
