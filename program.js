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

/*
//Exercise 10
var net = require('net');
var date = new Date();
var portNum = process.argv[2];
var year, month, day, hour, min;

var server = net.createServer(function(socket){
    year = date.getFullYear();
    month = date.getMonth() + 1;
    day = date.getDate();
    hour = date.getHours();
    min = date.getMinutes();

    if(month.length != 2){
        month = "0" + month;
    }

    if(day.length == 1){
        day = "0" + day;
    }

    var data = year + "-" + month + "-" + day + " " + hour + ":" + min;
    if(data.length > 5){
        socket.write(data + "\n");
    }
    socket.end();
});

server.listen(portNum);
*/

/*
//Exercise 11
var http = require('http');
var fs = require('fs');
var portNum = process.argv[2];
var filePath = process.argv[3];

var server = http.createServer(function (req, res){
    var content = fs.createReadStream(filePath);
    content.pipe(res);
});
server.listen(portNum);
*/

/**
//Exercise 12
var http = require('http');
var portNum = process.argv[2];
var map = require('through2-map');

var server = http.createServer(function (req, res){
    if(req.method == 'POST'){
        req.pipe(map(function (chunk){
            return chunk.toString().toUpperCase();
        })).pipe(res);
    }
});
server.listen(portNum);
*/
/*
//Exercise 13
var http = require('http');
var portNum = process.argv[2];
var url = require('url');

var server = http.createServer(function (req, res){
    if(req.method == 'GET'){
        //console.log(url.parse(req.url, true).query);
        var dateString = url.parse(req.url, true).query.iso;
        console.log(dateString);
        console.log(Date.parse(dateString));
        var date = new Date(url.parse(req.url, true).query.iso);
        var dateObj = new Object();
        dateObj.hour = date.getHours();
        dateObj.minute = date.getMinutes();
        dateObj.second = date.getSeconds();

        var jsonFormat = JSON.stringify(dateObj);
        console.log(jsonFormat);
        var unixTime = new Object();
        unixTime.unixtime = date.getTime();
        var jsonUnix = JSON.stringify(unixTime);
        res.writeHead(200, {'Content-Type': 'application/json' })
        if(req.url.indexOf("/api/parsetime") != -1){
            res.end(jsonFormat);
        }
        else if(req.url.indexOf("/api/unixtime") != -1){
            res.end(jsonUnix);
        }
    }
});
server.listen(portNum);
*/
