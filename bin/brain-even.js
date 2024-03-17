#!/usr/bin/env node
import readlineSync from "readline-sync";
import getName from "../src/cli.js";
import getEven from "../src/even.js";

console.log("welcome to the Brain Games");
getName();
getEven();
