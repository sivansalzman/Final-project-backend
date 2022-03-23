import { exec } from "child_process";
import express from "express";
import { promisify } from "util";

// const exec = require("child_process");
// const express = require("express");
// const promisify = require("util");

const companies_for_user = async (mode, candidates) => {
  const execPromise = promisify(exec);

  //   mode = candidate-companies to candidate,
  //   mode = company rate company
  //if mode = candidates then candidate is single user full_name
  //if mode = company candidates list of full name

  const python_path = "/usr/bin/python3";
  const script_path = "./test.py";

  const promise = execPromise(`${python_path} ${script_path}`);

  // const promise = execPromise(
  //     `${python_path} ${script_path} --mode ${mode} --cand ${candidates}`
  // );

  promise.child.stdout.on("data",async (data) => {
    process.stdout.write(`data on stdout:${data}`);
    if(data.startsWith("$$")) {
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
};

export default companies_for_user;
//companies_for_user("a", ["b"]);
