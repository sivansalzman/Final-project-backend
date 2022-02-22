const { gql } = require("apollo-server");

const typeDefs = gql`;

type Company {
    name: String
    size: String
    employee_count: Number
    founded: Number
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
    summery: String
    tags: [String]
    headline: String
    alternative_names: [String]
    alternative_domains: [String]
    affiliated_profiles: [String]
}
 `;

export default typeDefs;
