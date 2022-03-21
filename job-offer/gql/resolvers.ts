import { JobOfferCollection } from "../models/job-offer";
import {
  AddJobOfferInput,
  DeleteJobOfferInput,
  GetJobOfferInput,
  GetJobOfferInputCandidate,
  UpdateJobOfferInput,
} from "../job-offer-types";

const resolvers = {
  Query: {
    getJobsOffers: async (parent, args, context, info) => {
      try {
        const jobOffers = await JobOfferCollection.find();
        return jobOffers;
      } catch (err) {
        throw err;
      }
    },
    getJobOffer: async (parent, args, context, info) => {
      try {
        const { jobOfferID } = args.getJobOfferInput as GetJobOfferInput;
        const jobOffer = await JobOfferCollection.findOne({ _id: jobOfferID });
        return jobOffer;
      } catch (err) {
        throw err;
      }
    },
    getJobOfferByCandidate: async (parent, args, context, info) => {
      try {
        const { CandidateJobOfferID } =
          args.GetJobOfferInputCandidate as GetJobOfferInputCandidate;
        const jobOfferByCandidate = await JobOfferCollection.find({
          candidates_id: { $in: CandidateJobOfferID },
        });
        return jobOfferByCandidate;
      } catch (err) {
        throw err;
      }
    },
  },
  Mutation: {
    addJobOffer: async (parent, args, context, info) => {
      try {
        const addJobOfferInput = args.addJobOffer;
        if (await JobOfferCollection.insertMany(addJobOfferInput)) {
          return true;
        }
        return false;
      } catch (err) {
        throw err;
      }
    },
    updateJobOffer: async (parent, args, context, info) => {
      try {
        const updateJobOfferID = args.updatejobOfferInput
          .jobOfferID as UpdateJobOfferInput["jobOfferID"];
        const update = args.updatejobOfferInput
          .jobOfferInfo as UpdateJobOfferInput["jobOfferInfo"];
        if (update.candidates_id != "") {
          if (
            await JobOfferCollection.updateOne(
              { job_offer_ID: updateJobOfferID },
              { $push: { candidates_id: update.candidates_id } }
            )
          ) {
            return true;
          }
        }
        // } else if (
        //   await JobOfferCollection.updateOne({ id: updateJobOfferID }, update)
        // ) {
        //   console.log(update.candidates_id);

        //   return true;
        // }
        return false;
      } catch (err) {
        throw err;
      }
    },
    deleteJobOffer: async (parent, args, context, info) => {
      try {
        const deleteJobOfferID =
          args.deleteJobOfferInput as DeleteJobOfferInput;
        if (
          await JobOfferCollection.findOneAndDelete({
            id: deleteJobOfferID.jobOfferID,
          })
        ) {
          return true;
        }
        return false;
      } catch (err) {
        throw err;
      }
    },
  },
};

export default resolvers;
