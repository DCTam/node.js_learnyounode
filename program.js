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
    if (err){
        console.log("Error");
    }

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

/*
//Exercise 8
var http = require('http');
var URL = process.argv[2];
var charString = "";
http.get(URL, function callback(response){
    response.on("data", function(data){
        charString += data;
    });

    response.on("end", function(){
       console.log(charString.length);
       console.log(charString);
    });
});
*/

/*
//Exercise 9
var http = require('http');
var URL1 = process.argv[2];
var URL2 = process.argv[3];
var URL3 = process.argv[4];

http.get(URL1, function callback1(response1){
    var charString1 = "";
    response1.on("data", function(data1){
        charString1 += data1;    
    });

    response1.on("end", function(){
        console.log(charString1);
    });

    http.get(URL2, function callback2(response2){
        var charString2 = "";
        response2.on("data", function(data2){
            charString2 += data2;
        });
        
        response2.on("end", function(){
            console.log(charString2);
        });

        http.get(URL3, function callback3(response3){
            var charString3 = "";
            response3.on("data", function(data3){
                charString3 += data3;
            });

            response3.on("end", function(){
                console.log(charString3);
            });
        });
    });
});
*/
