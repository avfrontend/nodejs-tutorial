// CommonJs, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require("./4-names");
const sayHi = require("./5-utils");

sayHi("susan");
sayHi(names.john);
sayHi(names.peter);

// https://www.youtube.com/watch?v=Oe421EPjeBE
// 46:26 - Alternavtive Syntax
