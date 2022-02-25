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
  type Query {
    "Will return all companies"
    getCompanies: [Company]
  }
`;

export default typeDefs;
