// Problem
// Diberikan sebuah function bandingkanAngka(angka1, angka2) yang menerima dua parameter angka. 
// Function akan me-return nilai true jika angka2 lebih besar dari angka1, dan false jika sebaliknya. 
// Jika kedua angka bernilai sama, function akan me-return -1.

let angka1 = 5;
let angka2 = 10;

function bandingkanAngka(angka1, angka2) {
    if (angka2 > angka1){
        return true
    } if (angka2 < angka1){
        return false
    } if (angka2 == angka1){
        return -1
    }
  }

 // ------------------------------------
    // TEST CASES
    console.log(bandingkanAngka(5, 8)); // true
    console.log(bandingkanAngka(5, 3)); // false
    console.log(bandingkanAngka(4, 4)); // -1
    console.log(bandingkanAngka(3, 3)); // -1
    console.log(bandingkanAngka(17, 2)); // false
// ------------------------------------




  // Problem
  // Diberikan sebuah function balikKata(kata) yang menerima satu parameter berupa string. 
  // Function akan me-return kata yang dibalik. Contoh, jika kata adalah "John Doe", function akan me-return "eoD nhoJ".
  

function balikKata(kata) {
    let output =""
    for (let i = kata.length-1; i>=0;i--){
        output += kata[i]
    }
     return output
    }
    

    // TEST CASES
    console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
    console.log(balikKata('John Doe')); // eoD nhoJ
    console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
    console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
    console.log(balikKata('Super')); // repuS
  
  // ------------------------------------
  console.log('')
  // ------------------------------------