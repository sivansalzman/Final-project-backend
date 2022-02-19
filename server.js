const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");

const {userRouter} = require("./routers/routerUser");
const {companyRouter} = require("./routers/routerCompany");
const {candidateRouter} = require("./routers/routerCandidate");

app.use(cors({ origin: true, credentials: true }))
app.use(express.json());
app.use(express.urlencoded({extended: true})); 

app.use('/api/user', userRouter);
app.use('/api/company', companyRouter);
app.use('/api/candidate',candidateRouter);

app.use((req, res, next) => {
    res.status(500).send('Something is broken!');
});

app.listen(port, () => console.log('Express server is running on port ', port));