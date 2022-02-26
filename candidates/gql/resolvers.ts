import { CandidateCollection } from "../models/candidate";
import { Candidate, GetCandidateInput } from "../candidates-types";

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
  // Mutation: {
  //   addCandidate: async (parent, args, context, info) => {
  //     try {
  //       const addcandidateInput =
  //         args.addcandidateInput as AddcandidateInput as candidate;
  //       if (await CandidateCollection.insertMany(addcandidateInput)) {
  //         return true;
  //       }
  //       return false;
  //     } catch (err) {
  //       throw err;
  //     }
  //   },
  //   updateCandidate: async (parent, args, context, info) => {
  //     try {
  //       const updatecandidateID = args.updatecandidateInput
  //         .candidateID as UpdatecandidateInput["candidateID"];
  //       const update = args.updatecandidateInput
  //         .candidateInfo as UpdatecandidateInput["candidateInfo"];
  //       if (
  //         await CandidateCollection.updateOne({ id: updatecandidateID }, update)
  //       ) {
  //         return true;
  //       }
  //       return false;
  //     } catch (err) {
  //       throw err;
  //     }
  //   },
  //   deleteCandidate: async (parent, args, context, info) => {
  //     try {
  //       const deletecandidateID =
  //         args.deletecandidateInput as DeletecandidateInput;
  //       if (
  //         await CandidateCollection.findOneAndDelete({ id: deletecandidateID })
  //       ) {
  //         return true;
  //       }
  //       return false;
  //     } catch (err) {
  //       throw err;
  //     }
  //   },
  //},
};

export default resolvers;
