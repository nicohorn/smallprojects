var data = {
     name: "cliff",
     age: "34",
     name: "ted",
     age: "42",
     name: "bob",
     age: "12"
   }

var jsonData = JSON.stringify(data);

var fs = require('fs');

fs.writeFile("test.txt", jsonData, function(err) {
       if (err) {
           console.log(err);
       }
   });
