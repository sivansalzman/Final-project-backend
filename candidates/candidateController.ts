import { CandidateCollection } from "./candidateModel";
import { promisify } from "util";
import { exec } from "child_process";
import axios from 'axios'

const companies_for_user = async (mode, candidates) => {
	const execPromise = promisify(exec);
	const python_path = "/usr/local/bin/python3";
	const script_path = "../Talent.AI/programFlow/kMeans.py";

	const promise = execPromise(
		`${python_path} ${script_path} --func candidate --cand ${candidates}`,
		{ cwd: "/Users/guyshenkar/Documents/private/final project/Talent.AI" }
	);

	promise.child.stdout.on("data", async (data) => {
		process.stdout.write(`data on stdout:${data}`);
		if (data.startsWith("$$")) {
			data = data.slice(2);
			let jsonData1 = JSON.stringify(data);
			let jsonData = await JSON.parse(jsonData1);
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


const getCandidatehelper = async (id) => {
	try {
		return await CandidateCollection.findOne({ id: id })
			.then((docs) => {
				return docs;
			})
			.catch((err) => console.log(`Error getting the data from DB: ${err}`));

	} catch (err) {
		console.log(err)
	}
}




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
		} else if (req.query.googleID) {
			console.log(req.query.googleID);
			params["googleID"] = req.query.googleID;
			await CandidateCollection.find(params)
				.then((docs) => {
					res.json(docs);
				})
				.catch((err) => console.log(`Error getting the data from DB: ${err}`));
		} else {
			await CandidateCollection.find({})
				.then((docs) => {
					res.json(docs);
				})
				.catch((err) => console.log(`Error getting the data from DB: ${err}`));
		}
	},
	getCandidate: async (req, res) => {
		try {
			const candidate = await getCandidatehelper(req.params.id)
			res.json(candidate)

		} catch (err) {
			console.log(err)
		}
	},
	addCandidate: async (req, res) => {
		const addCandidate = req.body.addCandidate;
		console.log(addCandidate);
		await CandidateCollection.insertMany(addCandidate)
			.then((docs) => {
				res.json(docs);
			})
			.catch((err) => console.log(`Error getting the data from DB: ${err}`));
	},

	updateCandidate: async (req, res) => {
		const updateCandidate = req.body.update;
		if (updateCandidate["skills"] !== []) {
			console.log(updateCandidate);
			await CandidateCollection.updateMany(
				// { id: req.params.id },
				// { $push: { skills: { $each: updateCandidate["skills"] } } }
				{ _id: req.params.id },
				{ skills: updateCandidate["skills"] }
			)
				.then((docs) => {
					console.log(docs);
					res.json(docs);
				})
				.catch((err) => console.log(`Error getting the data from DB: ${err}`));
		} else {
			await CandidateCollection.updateOne(
				{ id: req.params.id },
				updateCandidate
			)
				.then((docs) => {
					console.log(docs);
				})
				.catch((err) => console.log(`Error getting the data from DB: ${err}`));
		}
	},

	deleteCandidate: async (req, res) => {
		await CandidateCollection.findOneAndDelete({ id: req.params.id })
			.then((docs) => {
				res.json(docs);
			})
			.catch((err) => console.log(`Error getting the data from DB: ${err}`));
	},

	forAlgo: async (req, res) => {
		try {
			const candidate = await getCandidatehelper(req.params.id)
			console.log(candidate)

			const percents = await axios.post("http://127.0.0.1:4000/api/candidate", candidate)
			console.log(percents.data)
			// parse data
			res.json(percents.data)
		} catch (err) {
			console.log(err)
		}


	},
};

export default CandidateController;
