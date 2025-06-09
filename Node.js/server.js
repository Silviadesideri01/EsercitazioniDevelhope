const CommonSum = require("./CommonSum")
//require("./CommonSum") sta dicendo a Node.js: "Vai a cercare il file CommonSum.js (il ./ indica che si trova nella stessa directory) e importami ciò che è stato esportato da esso tramite module.exports."

const result = CommonSum(10,10);
console.log(`the result is: ${result}`)