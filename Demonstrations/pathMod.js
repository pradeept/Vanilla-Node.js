const path = require("path");


//Variables
console.log(__filename);
console.log(__dirname);


//methods
// path.basename()
// path.extname()
// path.parse()     -Converts absolute path to object
// path.format()    -Converts object to absolute path
// path.isAbsolute() -Checks whether the path is absolute or not
// path.join()      -Joins string parameters passed into a path string

console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));
console.log(path.format(path.parse(__dirname)));
console.log(path.isAbsolute(__filename));
console.log(path.join("Module","index.js"));
console.log(path.join("Module","//index.js"));


