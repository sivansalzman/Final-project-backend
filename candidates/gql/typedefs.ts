const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Candidate {
    _id: String
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
  }

  type experience {
    company_name: String
    company_founded: String
    company_industry: String
    company_size: String
    current_job: Boolean
    company_location_name: [String]
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

  "Input object for getting candidate"
  input GetCandidateInput {
    "ID of the candidate we wish to get"
    candidateID: String!
  }

  input GetCandidatesInput {
    candidatesID: [String]!
  }

  input GetCandidatesInputFullName {
    candidateFullName: String!
  }

  "Delete candidate input"
  input DeleteCandidateInput {
    candidateID: String
  }

  input CandidateInput {
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
    experience: [experienceInput]
    education: [educationInput]
  }

  input experienceInput {
    company_name: String
    company_founded: String
    company_industry: String
    company_size: String
    current_job: Boolean
    company_location_name: [String]
    company_location_country: String
    company_location_continent: String
    end_date: String
    start_date: String
    title_name: String
    title_role: String
    title_levels: [String]
  }

  input educationInput {
    school_name: String
    school_type: String
    degrees: [String]
    start_date: String
    end_date: String
    majors: [String]
    minors: [String]
    gpa: String
  }

  input UpdateCandidateInput {
    candidateID: String
    candidateInfo: CandidateInput
  }

  input AddCandidateInput {
    candidateInfo: CandidateInput
  }

  type Query {
    "Will return all candidates"
    getCandidates: [Candidate]
    "Will return candidate by id"
    getCandidate(getCandidateInput: GetCandidateInput!): Candidate

    getCandidatesById(getCandidatesInput: GetCandidatesInput!): [Candidate]

    getCandidatesByFullName(
      getCandidatesInputFullName: GetCandidatesInputFullName!
    ): Candidate
  }

  type Mutation {
    "Will add candidate"
    addCandidate(addCandidateInput: AddCandidateInput!): Boolean
    "Will update candidate"
    updateCandidate(updateCandidateInput: UpdateCandidateInput!): Boolean
    "Will delete candidate"
    deleteCandidate(deleteCandidateInput: DeleteCandidateInput!): Boolean
  }
`;

export default typeDefs;
