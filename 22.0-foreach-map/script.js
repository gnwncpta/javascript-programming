// Manipulasi Array

// 1. Menambah isi Array
// var arr = [];
// arr[0] = "Gunawan";
// arr[1] = "Cipta";
// arr[2] = "Negara";

// console.log(arr);


// 2. Menghapus isi Array
// var arr = ["Gunawan", "Cipta", "Negara"];
// arr[1] = undefined;
// console.log(arr);


// 3. Menampilan isi Array 
// array method = length
// var arr = ["Gunawan", "Cipta", "Negara"];

// for( var i = 0; i < arr.length; i++ ){
//     console.log('Mahasiswa ke-' + (i+1) + ' : ' + arr[i]);
// }



// Method pada Array

// 1. join
// console.log(arr.join(' '));

// 2. push & pop
// arr.push("Doddy", "Fitri");
// arr.pop();
// console.log(arr.join(' '));

// 3. unshift & shift
// arr.unshift('Doddy');
// arr.shift()
// console.log(arr.join(' '));

// 4. splice
// splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ...)
// arr.splice(1, 2, 'Doddy', 'Fitri');
// console.log(arr.join(' '));


// 5. slice
// slice(indexAwal, indexAkhir)
// var arr = ['Gunawan', 'Cipta', 'Negara', 'Doddy', 'Fitri'];
// var arr2 = arr.slice(1, 4);
// console.log(arr.join(' '));
// console.log(arr2.join(' '));

// 6. foreach
// var angka = [1,2,3,4,5,6,7,8];
// var nama = ['Gunawan', 'Cipta', 'Negara'];

// for( var i =0; i < angka.length; i ++ ){
//     console.log(angka[i]); 
// }

// function expression
// var cetak = function(e){
//     console.log(e);
// }

// angka.forEach(function(e){
//     console.log(e);
// });

// nama.forEach(function(element, index){
//     console.log('Mahasiswa ke-' + (index+1) + ' adalah: ' + element);
// })

// 7. map
// var angka = [1,2,3,4,5,6,7,8];
// var angka2 = angka.map(function(e){
//     return e * 2;
// });

// console.log(angka2.join(' '));

// 8. sort
var angka = [1,2,10,5,20,3,6,8,4];
console.log(angka.join(' '));
angka.sort(function(a, b){
    return a-b;
});
console.log(angka.join(' '));