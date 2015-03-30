
//chessboard
var chessboard = function(gridSize) {
   var rowCount = 0;
   var result = '';
   while(result.length <= (gridSize * gridSize)) {
      var start = 1, str = '';
      if(rowCount % 2 === 0) {
         start = 2;
      }
      rowCount++;

      while(str.length < gridSize) {
         var field = "#";
         if(start % 2 === 0) {
            field = ' ';
         }
         start++;
         str = str + field;
      }
      result = result + str + "\n";
   }
   console.log(result);
};

//fizzbuzz fizz buzz
var fizzBuzz = function() {
   for (var i = 1; i <= 100; i++) {
      if((i % 3) === 0 && ((i % 5) ===0)) {
         console.log("FizzBuzz");
      } else if((i % 3) === 0) {
         console.log("Fizz");
      } else if((i % 5) === 0) {
         console.log("Buzz");
      } else {
         console.log(i);
      }
   }
};

// triangle
var triangle = function (txt) {
   var vtxt = '';
   for (var i = 0; i <= 7; i++) {
      vtxt = vtxt + txt;
      console.log(vtxt);
   }
};

triangle('*');
fizzBuzz();
chessboard(8);
