function min(a,b) {
   if(a > b) {
      return a;
   } else if(b > a) {
      return b;
   } else {
      return a;
   }
}

//recursive test
function isEven(num) {
   var iter = 0;
   var orig = num;
   function even2(num) {
      //track number of iteractions
      iter++;
      console.log("iteration for num:" + orig + " = " + iter);

      res = num % 2;
      if(res < 0) {
         return even2(num + 2);
      } else {
         return res;
      }
   }

   if(even2(num) === 1) {
      return false;
   } else {
      return true;
   }
}

function countBs(str) {
   var bcnt = 0;
   for (var i = 0; i <= str.length; i++) {
      if(str.charAt(i) === "B") bcnt++;
   }
   return bcnt;
}

function countChar(str,mstr) {
   cnt = 0;
   for (var i = 0; i <= str.length; i++) {
      if(str.charAt(i) === mstr) cnt++;
   }
   return cnt;

}



/*
console.log(min(8,7));
console.log(isEven(-1));
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-9999));
console.log(countBs("BBC"));
console.log(countChar("kakkerlak","k"));
*/
