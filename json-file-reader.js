// For the purposes of this exercise, you must create a separate module for reading and parsing the JSON file, named "json-file-reader".

//This module should have a function that takes in a filename and a callback function as a parameter. It should then read that file, then parse the JSON. Finally, it should call the callback function and pass the parsed JSON to it.

//One way to think of this module is as a helper that can read and parse any JSON file. It has nothing to do with 'countries', so to speak.

//Another way to think of it is as a small wrapper to fs.readFile, except that this function only works with JSON files.*/

function readJson (filename, callback) {
	var fs= require ('fs');
	fs.readFile(`${filename}`, 'utf-8', function(err,data){
		if (err) {
			throw err;
		}
		var json = JSON.parse(data);
		callback (json);
	})
}

exports.readJson = readJson


/*var fs = require("fs");

fs.readFile('./countries.json', 'utf-8', function(err, data){
   if (err) {
        throw err;
    }

	var info = JSON.parse(data);
})

var callback = function(err, data) {
	if (err) return console.error(err);
	console.log(data);


	var info = JSON.parse(data);
};
*/