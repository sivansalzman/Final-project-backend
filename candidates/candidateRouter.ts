const { Router } = require("express");
import CandidateController from "./candidateController";

const candidateRouter = new Router();

candidateRouter.get("/", CandidateController.getCandidates);
candidateRouter.get("/:id", CandidateController.getCandidate);
candidateRouter.get("/:ids", CandidateController.getCandidatesById);
candidateRouter.get("/:full_name", CandidateController.getCandidatesByFullName);
candidateRouter.post("/", CandidateController.addCandidate);
candidateRouter.put("/:id", CandidateController.updateCandidate);
candidateRouter.delete("/:id", CandidateController.deleteCandidate);

export default candidateRouter;
