const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type JobOffer {
    _id: String
    job_company_name: String
    job_title: String
    job_title_role: String
    job_title_sub_role: String
    role_description: String
    job_start_date: String
    experience: experience
    status: String
  }

  type experience {
    title_name: String
    title_role: String
    years_experience: String
    skills: [String]
  }
  "Input object for getting job offer"
  input GetJobOfferInput {
    "ID of the company we wish to get"
    jobOfferID: String!
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
    job_title: String
    job_title_role: String
    job_title_sub_role: String
    role_description: String
    job_start_date: String
    experience: AddExperienceInput
    status: String
  }

  "Update job offer input"
  input UpdateJobOfferInput {
    job_company_name: String
    job_title: String
    job_title_role: String
    job_title_sub_role: String
    role_description: String
    job_start_date: String
    experience: AddExperienceInput
    status: String
  }

  "Delete job offer input"
  input DeleteJobOfferInput {
    jobOfferID: String
  }

  input UpdateJobOfferInput {
    jobOfferID: String
    jobOfferInput: UpdateJobOfferInput
  }

  type Query {
    "Will return all companies"
    getJobsOffers: [JobOffer]
    "Will return specific company"
    getJobOffer(GetJobOfferInput: GetJobOfferInput!): JobOffer
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
