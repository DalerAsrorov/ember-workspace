// Example from the book.
// var req = new XMLHttpRequest();
// var customPath = "OOP.js";
// req.open("GET", customPath, true);
// req.addEventListener("load", function() {
//   console.log("Done:", req.status);
//   // console.log(req.responseText);
// })
// req.send(null);

// function get(url) {
//   return new Promise(function(succeed, fail) {
//     var req = new XMLHttpRequest();
//     req.open("GET", url, true);
//     req.addEventListener("load", function() {
//       if(req.status < 400) {
//         succeed(req.responseText);
//       } else {
//         fail(new Error("Request failed: ", req.responseText));
//       }
//     });
//     req.addEventListener("error", function() {
//       fail(new Error("Network error"));
//     });
//     req.send(null);
//   })
// }
//
// function getJSON(url) {
//   return get(url).then(JSON.parse);
// }
//
// function showMessage(msg) {
//   var elt = document.createElement("div");
//   elt.textContent = msg;
//   return document.body.appendChild(elt);
// }
//
// var loading ='some url';
// getJSON("examples/bret.json")
//   .then(function(bert) {
//     return getJSON(bert.spouse);
//   })
//   .then(function(spouse) {
//     return getJSON(spouse.mother);
//   })
//   .then(function(mother) {
//     showMessage("The name is " + mother.name);
//   })
//   .catch(function(error) {
//     showMessage(String(error));
//   })
//   .then(function() {
//     document.body.removeChild(loading);
//   });

//text/plain, text/html, and application/json

// Problem 1 solution
// function fetchInMultipleTypes(url, type) {
//   return new Promise(function(success, fail) {
//     var xhr = new XMLHttpRequest();
//     xhr.open("GET", url, true);
//     xhr.setRequestHeader("accept", type);
//     xhr.addEventListener("load", function() {
//       success(xhr.responseText);
//     });
//     xhr.send(null);
//   })
// }
//
// var url = "http://eloquentjavascript.net/author";
// var type1 = "text/plain";
// var type2 = "text/html";
// var type3 = "application/json";
// var type4 = "application/rainbows+unicorns";
//
// fetchInMultipleTypes(url, type4).then(function(text){
//   console.log(text);

// })
//
var customUrl = 'http://itp-api.herokuapp.com/code-challenges/1';

getSongs().then(function(songs) {
  console.log("Something");
  console.log(songs);
});

console.log('raw');

function getSongs() {
  return new Promise(function(success) {
    var req = new XMLHttpRequest();
    req.open("GET", customUrl, true);
    req.addEventListener("load", function() {
      if(req.status < 400) {
        var jsonFormatFile = JSON.parse(req.responseText);
        var customFormattedArray = jsonFormatFile.data.map(function(song) {
          return {
            id: song.id,
            price: song.attributes.price,
            title: song.attributes.title,
            "play-count": song.attributes['play-count']
          }
        });
        success(customFormattedArray);
      }
      else
        return new Error("Network error.");
    });
    req.send(null);
  });
}

// get("https://www.reddit.com/r/emberjs.json").then(
//   function(text) {
//     console.log(JSON.parse(text));
//     console.log("data.txt: " + text);
//   },
//   function(error) {
//     console.log("data.txt: " + error);
//   });
//
// function getContents(url) {
//   var promise = new Promise(function(success, fail) {
//     var req = new XMLHttpRequest();
//     req.open("GET", url, true);
//
//     req.addEventListener("load", function() {
//       if(req.status < 400)
//         success(req.responseText);
//       else
//         fail(new Error("Request failed: ", req.responseText));
//     });
//
//     req.addEventListener("error", function() {
//       fail(new Error("Network error."));
//     });
//
//     req.send(null);
//   });
//
//   return promise;
// }
