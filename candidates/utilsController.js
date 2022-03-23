// import { exec } from "child_process";
// import express from "express";
// import { promisify } from "util";

const exec = require("child_process");
const express = require("express");
const promisify = require("util");

const companies_for_user = async (mode, candidates) => {
	const execPromise = promisify(exec);

	try {
		const python_path = "/usr/bin/python";
		const script_path = "./Talent.AI/programFlow/kMeans.py"

		const path = `${python_path} ${script_path} --func candidate --cand ${candidates}`
		console.log(path)




		const promise = execPromise(path);

		promise.child.stdout.on("data", async (data) => {
			process.stdout.write(`data on stdout:${data}`);
			if (data.startsWith("$$")) {
				data = data.slice(2);
				// console.log(data)
				let jsonData1 = await JSON.stringify(data);
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

	} catch (err) {
		console.log(err);
	}


};

export default companies_for_user;
//companies_for_user("a", ["b"]);
