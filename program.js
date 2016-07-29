/*
//Excercise 3
var fs = require('fs');
//console.log(process.argv);
//var string = fs.readFileSync(process.argv[2]).toString();
//var strArray = string.split('\n');

//console.log(strArray.length - 1);
/*
 
 
/*
//Exercise 4
fs.readFile(process.argv[2], 'utf8', function (err, data){
    if (err){
        console.log("Error");
    }
    
    console.log(data.split('\n').length - 1);
});
*/


/*
//Exercise 5
var fs = require('fs');
var path = require('path');
var filterExt = "";

fs.readdir(process.argv[2], function (err, list){ //should be argv[2] and 3
    filterExt = "." + process.argv[3];
   
    for(var ele of list){
        //console.log(path.extname(ele));
        if(path.extname(ele) == filterExt){
            console.log(ele);
        }
    }
});
*/

/*
//Exercise 6
var mymodule = require('./module');
var dir = process.argv[2];
var filterExt = process.argv[3];

mymodule(dir, filterExt, function(err,data){
    if(err){
        console.log("error");
    }
    else {
            for(var ele of data){
                console.log(ele);
            }
    }
});
*/

/*
//Exercise 7
var http = require('http');

var URL = process.argv[2];
http.get(URL, function callback (response){
    response.on("data", function(data){
        console.log(data.toString());
    });
});
*/

//Exercise 8
var http = require('http');
var URL = process.argv[2];


