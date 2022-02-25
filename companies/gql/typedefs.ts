const { gql } = require("apollo-server");

const typeDefs = gql`
  type Company {
    name: String
    size: String
    employee_count: String
    founded: String
    industry: String
    location: location
    linkedin_id: String
    linkedin_url: String
    facebook_url: String
    twitter_url: String
    profiles: [String]
    website: String
    ticker: String
    type: String
    summary: String
    tags: [String]
    headline: String
    alternative_names: [String]
    alternative_domains: [String]
    affiliated_profiles: [String]
  }

  type location {
    name: String
    locality: String
    region: String
    metro: String
    country: String
    continent: String
    street_address: String
    address_line_2: String
    postal_code: String
    geo: String
  }
  "Input object for getting company"
  input GetCompanyInput {
    "ID of the company we wish to get"
    companyName: String!
  }
  "Add location input"
  input AddLocationInput {
    name: String
    locality: String
    region: String
    metro: String
    country: String
    continent: String
    street_address: String
    address_line_2: String
    postal_code: String
    geo: String
  }

  "Add company input"
  input AddCompanyInput {
    name: String
    size: String
    employee_count: String
    founded: String
    industry: String
    location: AddLocationInput
    linkedin_id: String
    linkedin_url: String
    facebook_url: String
    twitter_url: String
    profiles: [String]
    website: String
    ticker: String
    type: String
    summary: String
    tags: [String]
    headline: String
    alternative_names: [String]
    alternative_domains: [String]
    affiliated_profiles: [String]
  }

  "Update company input"
  input UpdateCompanyInput {
    companyID: String
    name: String
    size: String
    employee_count: String
    founded: String
    industry: String
    location: AddLocationInput
    linkedin_id: String
    linkedin_url: String
    facebook_url: String
    twitter_url: String
    profiles: [String]
    website: String
    ticker: String
    type: String
    summary: String
    tags: [String]
    headline: String
    alternative_names: [String]
    alternative_domains: [String]
    affiliated_profiles: [String]
  }

  "Delete company input"
  input DeleteCompanyInput {
    companyID: String
  }

  type Query {
    "Will return all companies"
    getCompanies: [Company]
    "Will return specific company"
    getCompany(getCompanyInput: GetCompanyInput!): Company
  }
  type Mutation {
    "Will add company"
    addCompany(addCompanyInput: AddCompanyInput!): Company
    "Will update company"
    updateCompany(updateCompanyInput: UpdateCompanyInput!): Company
    "Will delete company"
    deleteCompany(deleteCompanyInput: DeleteCompanyInput!): Company
  }
`;

export default typeDefs;
