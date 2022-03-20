export interface JobOffer {
  _id: string;
  job_company_name: string;
  job_title: string;
  job_title_role: string;
  job_title_sub_role: string;
  role_description: string;
  job_start_date: string;
  years_of_experience: string;
  skills: string[];
  status: string;
  candidates_id: string[];
}

export interface experience {
  title_name: string;
  title_role: string;
  years_experience: string;
  skills: string[];
}

export interface GetJobOfferInput {
  JobOfferID: string;
}

export interface GetJobOfferInputCandidate {
  CandidateJobOfferID: string;
}

export interface JobOfferInput {
  JobOfferID: string;
  job_company_name: string;
  job_title: string;
  job_title_role: string;
  job_title_sub_role: string;
  role_description: string;
  job_start_date: string;
  years_experience: string;
  skills: string[];
  status: string;
  candidates_id: string[];
}

export interface AddJobOfferInput {
  jobOfferInfo: JobOfferInput;
}

export interface UpdateJobOfferInput {
  jobOfferID: string;
  jobOfferInfo: JobOfferInput;
}

export interface DeleteJobOfferInput {
  jobOfferID: string;
}
