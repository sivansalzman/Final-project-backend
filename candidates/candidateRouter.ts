const { Router } = require("express");
import CandidateController from "./candidateController";
import { CandidateCollection } from "./candidateModel";

const candidateRouter = new Router();

// candidateRouter.get("/", CandidateController.getCandidates);
candidateRouter.post("/forAlgo", CandidateController.forAlgo);
candidateRouter.get("/:id", CandidateController.getCandidate);
candidateRouter.post("/", CandidateController.addCandidate);
candidateRouter.put("/:id", CandidateController.updateCandidate);
candidateRouter.delete("/:id", CandidateController.deleteCandidate);

export default candidateRouter;
