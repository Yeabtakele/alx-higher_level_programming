
#!/usr/bin/node
// Create the new list using map
const list = require('./100-data').list;  

const newList = list.map((value, index) => value * index);  

console.log(list);  
console.log(newList);  

