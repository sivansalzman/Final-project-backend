const { Router } = require("express");
import CandidateController from "./candidateController";

const candidateRouter = new Router();

candidateRouter.get("/", CandidateController.getCandidates);
candidateRouter.get("/forAlgo/:id", CandidateController.forAlgo);
candidateRouter.get("/:id", CandidateController.getCandidate);
candidateRouter.post("/", CandidateController.addCandidate);
candidateRouter.put("/:id", CandidateController.updateCandidate);
candidateRouter.put(
  "/:id/:index",
  CandidateController.updateCandidateEducation
);
candidateRouter.put(
  "/exp/:id/:index",
  CandidateController.updateCandidateExperience
);
candidateRouter.delete("/:id", CandidateController.deleteCandidate);

export default candidateRouter;
