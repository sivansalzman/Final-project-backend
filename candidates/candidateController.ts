import { CandidateCollection } from "./candidateModel";
import { promisify } from "util";
import { exec } from "child_process";

const companies_for_user = async (mode, candidates) => {

  const execPromise = promisify(exec);
  const python_path = "/usr/local/bin/python3";
  const script_path = "../Talent.AI/programFlow/kMeans.py";

  const promise = execPromise(`${python_path} ${script_path} --func candidate --cand ${candidates}`, { cwd: "/Users/guyshenkar/Documents/private/final project/Talent.AI" });


  promise.child.stdout.on("data", async (data) => {
    process.stdout.write(`data on stdout:${data}`);
    if (data.startsWith("$$")) {
      data = data.slice(2);
      // console.log(data)
      let jsonData1 = JSON.stringify(data);
      let jsonData = await JSON.parse(jsonData1);
      console.log(jsonData);
    }
  });

  promise.child.stderr.on("data", (data) => {
    process.stderr.write(`data on stderr:${data}`);
  });

  promise.child.on("close", (code) => {
    console.log(`close in code:${code}`);
  });
  await promise;
};


const CandidateController = {
  getCandidates: async (req, res) => {
    const params = {};
    if (req.query.full_name) {
      params["full_name"] = req.query.full_name;
      await CandidateCollection.find(params)
        .then((docs) => {
          res.json(docs);
        })
        .catch((err) => console.log(`Error getting the data from DB: ${err}`));
      // } else if (req.query.candidates) {
      //   params["full_name"] = req.query.candidates;
      //   //console.log([req.query.candidates]);
      //   //console.log(params);
      //   await CandidateCollection.find({
      //     params: {
      //       $in: req.query.candidates,
      //     },
      //   })
      //     .then((docs) => {
      //       res.json(docs);
      //     })
      //     .catch((err) => console.log(`Error getting the data from DB: ${err}`));
    } else {
      await CandidateCollection.find({})
        .then((docs) => {
          res.json(docs);
        })
        .catch((err) => console.log(`Error getting the data from DB: ${err}`));
    }
  },
  getCandidate: async (req, res) => {
    await CandidateCollection.findOne({ id: req.params.id })
      .then((docs) => {
        res.json(docs);
      })
      .catch((err) => console.log(`Error getting the data from DB: ${err}`));
  },
  addCandidate: async (req, res) => {
    const addCandidate = req.body.addCandidate;
    await CandidateCollection.insertMany(addCandidate)
      .then((docs) => {
        res.json(docs);
      })
      .catch((err) => console.log(`Error getting the data from DB: ${err}`));
  },

  updateCandidate: async (req, res) => {
    const updateCandidate = req.body.updateCandidate;
    await CandidateCollection.updateOne({ id: req.params.id }, updateCandidate)
      .then((docs) => {
        console.log(docs);
      })
      .catch((err) => console.log(`Error getting the data from DB: ${err}`));
  },

  deleteCandidate: async (req, res) => {
    await CandidateCollection.findOneAndDelete({ id: req.params.id })
      .then((docs) => {
        res.json(docs);
      })
      .catch((err) => console.log(`Error getting the data from DB: ${err}`));
  },

  forAlgo: async (req, res) => {

    const candidates = req.body.candidates

    companies_for_user("candidate", candidates)


    await CandidateCollection.find()
      .then((docs) => {
        const cands = docs.filter((c) => candidates.includes(c['full_name']))
        res.json(cands)
      })
      .catch((err) => console.log(`Error getting the data from DB: ${err}`));
  },
};

export default CandidateController;
