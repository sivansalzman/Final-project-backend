const { Router } = require("express");
import JobofferController from "./jobofferController";

const jobofferRouter = new Router();

jobofferRouter.get("/", JobofferController.getJobsOffers);
jobofferRouter.get("/:id", JobofferController.getJobOffer);
jobofferRouter.post("/", JobofferController.addJobOffer);
jobofferRouter.put("/:id", JobofferController.updateJobOffer);
jobofferRouter.delete("/:id", JobofferController.deleteJobOffer);
jobofferRouter.post("/rankCandidates/:id", JobofferController.rankCandidates);

export default jobofferRouter;
