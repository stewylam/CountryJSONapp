// Part 1 Create a Node.js application that does the following:

//     Takes in one parameter from the command line, the name of a country. 
//     Note: command line arguments can be read from the global array process.argv
//     Reads and parses the countries.json file. 
//     Note: you must use readFile and not readFileSync.
//     Outputs information about that specific country. 
//     Must be in the following format:

// Country: Netherlands 
// Top Level Domain: .nl

var country = process.argv[2];

var fs = require ('fs');

fs.readFile('./countries.json', 'utf-8', function(err,data){
    if (err) {
        throw err;
    }

    var info = JSON.parse(data);
        for (i = 0; i < info.length; i++) {
            if (info[i].name=== country) {
            console.log(info[i])
        }
    }
});



// Part 2

    // For the purposes of this exercise, you must create a separate module for reading and parsing the JSON file, named "json-file-reader".
    // This module should have a function that takes in a filename and a callback function as a parameter. 
    // It should then read that file, then parse the JSON. 
    // Finally, it should call the callback function and pass the parsed JSON to it.
    // One way to think of this module is as a helper that can read and parse any JSON file. 
    // It has nothing to do with 'countries', so to speak.
    // Another way to think of it is as a small wrapper to fs.readFile, except that this function only works with JSON files.


var country = process.argv[2];

var reader = require('./json-file-reader.js');

reader.readJson('./countries.json', function(json){
    console.log("Parsing file")
    for (i = 0; i < json.length; i++) {
        if (json[i].name === country) {
            console.log("Country: "+ json[i].name);
            console.log("Top Level Domain: " + json[i].topLevelDomain)
        }
    }
});