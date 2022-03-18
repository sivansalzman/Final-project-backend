import { JobOfferCollection } from "../models/job-offer";
import {
  AddJobOfferInput,
  DeleteJobOfferInput,
  GetJobOfferInput,
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
        const { JobOfferID } = args.getJobOfferInput as GetJobOfferInput;
        const jobOffer = await JobOfferCollection.findOne({ id: JobOfferID });
        return jobOffer;
      } catch (err) {
        throw err;
      }
    },
  },
  Mutation: {
    addJobOffer: async (parent, args, context, info) => {
      try {
        const addjobOfferInput = args.addjobOfferInput
          .jobOfferInfo as AddJobOfferInput;
        if (await JobOfferCollection.insertMany(addjobOfferInput)) {
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
          .JobOfferID as UpdateJobOfferInput["jobOfferID"];
        const update = args.updatejobOfferInput
          .jobOfferInfo as UpdateJobOfferInput["jobOfferInfo"];
        if (
          await JobOfferCollection.updateOne({ id: updateJobOfferID }, update)
        ) {
          return true;
        }
        return false;
      } catch (err) {
        throw err;
      }
    },
    deleteJobOffer: async (parent, args, context, info) => {
      try {
        console.log("here");
        const deleteJobOfferID =
          args.deletejobOfferInput as DeleteJobOfferInput;
        if (
          await JobOfferCollection.findOneAndDelete({ id: deleteJobOfferID })
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
