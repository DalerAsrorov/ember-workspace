// 1: Write a function that searches collection "projects" to find the object
// with the lowest "e" value and return that object's "i" value.
// Example:
//  getLowestValue([{i:10, e: 100},{i:20, e: 200}]); // returns 10
// DONE.

var projects = [{i:1, e:41}, {i:5, e:4}, {i:3, e:2}, {i:1, e:90}, {i:5, e:40}, {i:3, e:20}];

function getLowestValue(collection) {
  return collection.reduce(function(prevHighestE, item) {
    if(prevHighestE > item.e)
      return item.e;
    return prevHighestE;
  }, collection[0].e);
};


// 2: Write a HTML layout which has three columns which stretch 100% of the
// height of the browser, where the left and right column are 200px wide and the
// center column fills the leftover width. See example here -
// https://raw.githubusercontent.com/mgable/test-questions/master/question-2.jpg
// DONE.
document.body.style.height = '100%';
document.body.style.width = '100%';
function drawStripes(leftWidthPx, rightWidthPx, stripeHeight) {
  var bodyTag = document.body;

  for(var i = 0; i < 3; i++) {
    var div = document.createElement('div');

  }
};

drawStripes('200px', '200px', '100%');


// 3: write a function which takes an array of words and a string and finds all
// occurances of each array word in the string and returns that data as a
// collection.
// Exanple:
//  findWords(["cat", "at"], "Of the many cats in the catacombs, only the black cat and the white cat where at bat"); // returns [{"cat": 2}, {"at": 1}]
// DONE.

var words = ["foo", "bar", "a"];
var sentence = "after a foo, bar and foobar, we all went to a bar";

function findWordsD(wordsArray, str) {
   // cleaning up from the unnecessary characters such as comma (etc.) with regex
   var stringWithSpacedWords = str.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"");
   // splitting the cleaned up string into an array of words
   var arrayOfSentenceWords = stringWithSpacedWords.split(" ");
   var dict = [];

   wordsArray.forEach(function(item) {
     dict[item] = elementCountInArray(item, arrayOfSentenceWords);
   });

   function elementCountInArray(element, array) {
     // ES6 syntax is used. This line of code
     // eliminates all the elements in the array
     // that are not equal to the given element.
     // Then, we take the length of it since
     // the filter method returns an array of an exclusive element.
     return array.filter(item => item === element).length;
   };

   return dict;
}

// console.log(findWordsD(words, sentence));

// 4: Write a function that sums all the values of "data".
// addArrays([[1,2,3],[1]]); // returns 7
// DONE.

var data = [[[1,2,3,4,5],[[1],[2],[3],[4],[5],[6],[[1]]],[9,8,7,6,5,[1,2,3]]],[10,20,30,40,50],[21,33,55,66,77,88],[11,12,13,14,15,16,17,18,19],[[1000,1234],154,2122],[45,66,88,99,100,101]];
var data2 = [[1,2,3],[1]];

// the flatten->sum approach
function addArrays(data) {
  var sumOfAllArrays = data
        .reduce(function (flat, flattened) {
            return flat.concat(Array.isArray(flattened) ? addArrays(flattened) : flattened);
    }, [])
        .reduce(function(sum, el) {
            return sum + el;
    }, 0);
  return sumOfAllArrays;
}

console.log(addArrays(data));
console.log(addArrays(data2));

// 5: write function "makeObject" which takes two strings as parameters and
// returns an object. The first parameter will be the nested object made, and
// the second parameter will be the value of that object.
//
// makeObject("foo.bar", "buzz"); // returns {foo: {bar: "buzz"}}
// makeObject("one.two.three", "foobar");  // returns {one: {two: {three: "foobar"}}}
// makeObject("kingdom.phylum.class.order", "primates");  // returns {kingdom: {phylum: {class: {order: "primates"}}}}
// DONE.

function makeObject(str1, str2) {
  var arrayStr1 = str1.split(".");
  var root = {};
  createNestedObject(root, arrayStr1);

  function createNestedObject(mainObj, words) {
      var values = arrayWithValue(words.length, str2);
      for( var i = 0; i < words.length; i++ )
          mainObj = mainObj[ words[i] ] = mainObj[ words[i] ] || (values[i] || {});

      function arrayWithValue(arrLen, value) {
        var array = [];
        for(var i = 0; i < arrLen - 1; i++)
          array[i] = null;

        array[arrLen - 1] = value;
        return array;
      };
  };

  return root;
};

console.log(makeObject("kingdom.phylum.class.order", "primates"));

// 7. Write a RECURSIVE function findById that returns the object with the corresponding
//    id in the tree below.
//
// findById(9).value // returns 'A-A-C'
// DONE.


const sampleData = [
  {
    id: 1,
    value: 'A',
    children: [
      {
        id: 3,
        value: 'A-A',
        children: [{id: 7,value: 'A-A-A'}, {id: 8,value: 'A-A-B'}, {id: 9,value: 'A-A-C'}]
      },
      {
        id: 4,
        value: 'A-B',
        children: [{id: 10,value: 'A-B-A'}, {id: 11,value: 'A-B-B'}, {id: 12,value: 'A-B-C'}]
      }
    ]
  },
  {
    id: 2,
    value: 'B',
    children: [
      {
        id: 5,
        value: 'B-A',
        children: [{id: 13,value: 'B-A-A'}, {id: 14,value: 'B-A-B'}, {id: 15,value: 'B-A-C'}]
      },
      {
        id: 6,
        value: 'B-B',
        children: [{id: 16,value: 'B-B-A'}, {id: 17,value: 'B-B-B'}, {id: 18,value: 'B-B-C'}]
      }
    ]
  }
];

var testMethod = findById(9, sampleData);
console.log(testMethod);

function findById(id, data, optReference) {
    var indexPointer = -1;
    var currentNode = null;

    for(var i = 0; i < data.length; i++) {
        currentNode = data[i];
        if (currentNode.id === id) {
            return currentNode;
        } else if (currentNode && currentNode.children && typeof currentNode.children === "object" && currentNode.children.length ) {
            indexPointer = findById(id, data[i].children);
            if (indexPointer.id === id) {
            		return indexPointer;
						}
        }
    }

    return indexPointer;
};
