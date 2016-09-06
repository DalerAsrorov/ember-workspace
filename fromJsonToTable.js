

var MOUNTAINS = [
  {name: "Kilimanjaro", height: 5895, country: "Tanzania"},
  {name: "Everest", height: 8848, country: "Nepal"},
  {name: "Mount Fuji", height: 3776, country: "Japan"},
  {name: "Mont Blanc", height: 4808, country: "Italy/France"},
  {name: "Vaalserberg", height: 323, country: "Netherlands"},
  {name: "Denali", height: 6168, country: "United States"},
  {name: "Popocatepetl", height: 5465, country: "Mexico"}
];

function getValues(theEl) {
  var resArray = [];
  for(key in theEl) {
    if(theEl.hasOwnProperty(key)) {
      val = theEl[key];
      resArray.push(val);
    }
  }
  return resArray;
}

function buildTable(arrayOfObjects) {
  var wrapperDom = document.getElementById('wrapper');
  var tbl = document.createElement('table');
  tbl.style.width = '100%';
  tbl.setAttribute('border', '1');
  var tbody = document.createElement('tbody');
  tbl.appendChild(tbody);
  var headerDrawn = false;
  var tdsArray = [];

  if(arrayOfObjects.length === 0)
    return 0;

  // getting headers
  var headers = Object.keys(arrayOfObjects[0]);
  console.log(headers);

  // getting elements
  arrayOfObjects.forEach(function(element) {
    var arr = getValues(element);
    tdsArray.push(arr);
  });

  var tr = document.createElement('tr');
  tbody.appendChild(tr);
  for(var i = 0; i < headers.length; i++) {
    var th = document.createElement('th');
    var newText = document.createTextNode(headers[i]);
    th.appendChild(newText);
    tr.appendChild(th);
  }

  for(var i = 0; i < tdsArray.length; i++) {
    var trEl = document.createElement('tr');
    tdsArray[i].forEach(function(tdText) {
      var tdEl = document.createElement('td');
      var txtNode = document.createTextNode(tdText);
      tdEl.appendChild(txtNode);
      trEl.appendChild(tdEl);
    });
    tbody.appendChild(trEl);
    console.log('\n');
  }

  wrapperDom.appendChild(tbl);

};

buildTable(MOUNTAINS);
