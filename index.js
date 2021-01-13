const myInfos = require('./information.js')

var cowsay = require("cowsay");

console.log(cowsay.say({
	text : `hello i'm ${myInfos.name} from ${myInfos.campus}`,
	e : "oO",
	T : "U "
}));