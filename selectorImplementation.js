<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>

    <div id="wrapper">
      <p>

      </p>
      <p>

      </p>
    </div>

    <div id="testTwo">
      <p>
        dfsdfs
      </p>
      <p>
        dfsfdsdfs
      </p>
      <div class="">

      </div>
      <a href="#"></a>
      <p>
        dfsfdsfdsdfsdsfsdfdsf
      </p>
      <p>
        dfsfdsfdssdf
      </p>
    </div>

    <script>
    var testDomEl = document.getElementById('testTwo');
    var resultArray = getAllElements(testDomEl, "p");

    function getAllElements(Node, tagName) {
      var elements = [];
      var nodeChildren = Node.childNodes;
      nodeChildren.forEach(function(child) {
        if(child.tagName) {
          if(child.tagName.toUpperCase() === tagName.toUpperCase()){
            elements.push(child);
          }
        }
      });
      return elements;
    }


    console.log(resultArray);
    </script>


  </body>
</html>
