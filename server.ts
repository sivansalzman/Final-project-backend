import express from "express";
import cors from "cors";
const app = express();
const port = process.env.PORT || 3000;

import candidateRouter from "./candidates/candidateRouter";
import companyRouter from "./companies/companyRouter";
import jobofferRouter from "./job-offer/jobofferRouter";

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/jobOffer", jobofferRouter);
app.use("/api/candidate", candidateRouter);
app.use("/api/company", companyRouter);

app.use((req, res, next) => {
  res.status(500).send("Something is broken!");
});

app.listen(port, () => console.log("Express server is running on port ", port));
