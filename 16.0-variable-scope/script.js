// Global Scope / Window Scope
// var a = 1;
// "use strict";

// function tes(){
//     a = 2;
//     // console.log(window.a); yang kiri artinya kita memanggil var a di luar function dengan window
// }

// tes();
// console.log(a);

var a = 1;

function tes(a){
    console.log(a);
}

tes(a)
console.log(a);