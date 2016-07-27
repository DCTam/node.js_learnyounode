var fs = require('fs');
var path = require('path');
var filteredArr = [];

module.exports = function process(dirName, fileExt, callback){
    var filterExt =  "." + fileExt;

    fs.readdir(dirName, function(err, list){

        if(err){
            return    callback(err);
        }

        for(var ele of list){
            if(path.extname(ele) == filterExt){
                filteredArr.push(ele);
            }
        }
        callback(null,filteredArr);
    });
    
};

