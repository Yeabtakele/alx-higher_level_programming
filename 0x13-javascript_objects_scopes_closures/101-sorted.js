#!/usr/bin/node
// Import the dictionary from 101-data.js
// Create an empty dictionary for user IDs by occurrence
// Loop through each key-value pair in the original dictionary
const dict = require('./101-data.js').dict;
const NewDict = {};
const list = [];
let MyList = [];
let Newlist = [];

const totalist = Object.entries(dict);
const vals = Object.values(dict);
const valsUniq = [...new Set(vals)];
const newDict = {};
for (const j in valsUniq) {
  const list = [];
  for (const k in totalist) {
    if (totalist[k][1] === valsUniq[j]) {
      list.unshift(totalist[k][0]);
    }
  }
  newDict[valsUniq[j]] = list;
}
console.log(newDict);
