export interface Candidate {
  _id: string;
  full_name: string;
  gender: string;
  birth_year: string;
  birth_date: string;
  industry: string;
  job_title: string;
  job_title_role: string;
  job_title_sub_role: string;
  job_title_levels: string[];
  job_company_id: string;
  interests: string[];
  skills: string[];
  experience: experience[];
  education: education[];
}

export interface title {
  name: string;
  role: string;
  sub_role: string;
  level: string[];
}

export interface companyExperience {
  company_id: string;
  location_names: string[];
  end_date: string;
  start_date: string;
  title: title;
  is_primary: Boolean;
}

export interface experience {
  company: companyExperience;
}

export interface school {
  name: string;
  type: string;
  id: string;
  location: string;
  linkedin_url: string;
  facebook_url: string;
  twitter_url: string;
  website: string;
  domain: string;
}

export interface education {
  school: school;
  degrees: string[];
  start_date: string;
  end_date: string;
  majors: string[];
  minors: string[];
  gpa: string;
}

export interface GetCandidateInput {
  candidateID: string;
}
