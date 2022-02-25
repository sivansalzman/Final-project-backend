export interface Company {
  name: String;
  size: String;
  employee_count: Number;
  founded: Number;
  industry: String;
  location: location;
  linkedin_id: String;
  linkedin_url: String;
  facebook_url: String;
  twitter_url: String;
  profiles: String[];
  website: String;
  ticker: String;
  type: String;
  summary: String;
  tags: String[];
  headline: String;
  alternative_names: String[];
  alternative_domains: String[];
  affiliated_profiles: String[];
}

export interface location {
  name: String;
  locality: String;
  region: String;
  metro: String;
  country: String;
  continent: String;
  street_address: String;
  address_line_2: String;
  postal_code: String;
  geo: String;
}
