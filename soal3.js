//   Problem
//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. 
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

function xo(str) {
   for (i= 1; i<str.length; i++){
   let hurufX = str.match(/x/g);
   let hurufO = str.match(/o/g);
   if (hurufX.length == hurufO.length){
    return true
   }else{
    return false
   }
   }
   }
   
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true

