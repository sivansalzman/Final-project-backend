import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();
const port = process.env.PORT || 3000;

import candidateRouter from "./candidates/candidateRouter";
import companyRouter from "./companies/companyRouter";
import jobofferRouter from "./job-offer/jobofferRouter";
import googleAuthRouter from "./googleAuth/googleAuthRouter";

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", googleAuthRouter);
app.use("/api/jobOffer", jobofferRouter);
app.use("/api/candidate", candidateRouter);
app.use("/api/company", companyRouter);

app.use((req, res, next) => {
  res.status(500).send("Something is broken!");
});

app.listen(port, () => console.log("Express server is running on port ", port));
