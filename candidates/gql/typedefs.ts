const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Candidate {
    _id: String
    full_name: String
    gender: String
    birth_year: String
    birth_date: String
    industry: String
    job_title: String
    job_title_role: String
    job_title_sub_role: String
    job_title_levels: [String]
    job_company_id: String
    interests: [String]
    skills: [String]
    experience: [experience]
    education: [education]
  }

  type title {
    name: String
    role: String
    sub_role: String
    level: [String]
  }

  type companyExperience {
    company_id: String
    location_names: [String]
    end_date: String
    start_date: String
    title: title
    is_primary: Boolean
  }

  type experience {
    company: companyExperience
  }

  type school {
    name: String
    type: String
    id: String
    location: String
    linkedin_url: String
    facebook_url: String
    twitter_url: String
    website: String
    domain: String
  }

  type education {
    school: school
    degrees: [String]
    start_date: String
    end_date: String
    majors: [String]
    minors: [String]
    gpa: String
  }

  "Input object for getting candidate"
  input GetCandidateInput {
    "ID of the company we wish to get"
    candidateID: String!
  }

  type Query {
    "Will return all candidates"
    getCandidates: [Candidate]
    "Will return candidate by id"
    getCandidate(getCandidateInput: GetCandidateInput!): Candidate
  }
`;

export default typeDefs;
