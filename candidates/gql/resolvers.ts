import { CandidateCollection } from "../models/candidate";
import {
  AddCandidateInput,
  Candidate,
  DeleteCandidateInput,
  GetCandidateInput,
  UpdateCandidateInput,
} from "../candidates-types";

const resolvers = {
  Query: {
    getCandidates: async (parent, args, context, info) => {
      try {
        const candidates = await CandidateCollection.find();
        return candidates;
      } catch (err) {
        throw err;
      }
    },
    getCandidate: async (parent, args, context, info) => {
      try {
        const { candidateID } = args.getCandidateInput as GetCandidateInput;
        const candidate = await CandidateCollection.findOne({
          id: candidateID,
        });
        return candidate;
      } catch (err) {
        throw err;
      }
    },
  },
  Mutation: {
    addCandidate: async (parent, args, context, info) => {
      try {
        const addCandidateInput = args.addCandidateInput
          .candidateInfo as AddCandidateInput;
        if (await CandidateCollection.insertMany(addCandidateInput)) {
          return true;
        }
        return false;
      } catch (err) {
        throw err;
      }
    },
    updateCandidate: async (parent, args, context, info) => {
      try {
        const updateCandidateID = args.updateCandidateInput
          .candidateID as UpdateCandidateInput["candidateID"];
        const update = args.updateCandidateInput
          .candidateInfo as UpdateCandidateInput["candidateInfo"];
        if (
          await CandidateCollection.updateOne({ id: updateCandidateID }, update)
        ) {
          return true;
        }
        return false;
      } catch (err) {
        throw err;
      }
    },
    deleteCandidate: async (parent, args, context, info) => {
      try {
        const deleteCandidateID =
          args.deleteCandidateInput as DeleteCandidateInput;
        if (
          await CandidateCollection.findOneAndDelete({ id: deleteCandidateID })
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
