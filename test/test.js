var jade = require("jade");
var fs = require("fs");
var fn = jade.compileFileClient("template.jade", {});
fs.writeFileSync("templates.js", fn);
console.log(fn);




