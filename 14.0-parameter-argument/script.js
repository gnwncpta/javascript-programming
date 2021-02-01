// function tambah(a, b){
//     return a + b;
// }

// function kali(a, b){
//     return a * b;
// }

function kubus(a, b){
    var total, a, b;
    a = a * a * a;
    b = b * b *b;
    total = a + b;
    return total;
}

// var hasil = kali(tambah(1,2), tambah(3, 4));

function tambah() {
    var hasil = 0;
    for( var i = 0; i < arguments.length; i++ ){
        hasil = arguments[i];
    }

    return hasil;
}

var coba = tambah(1, 2, 3);

console.log(coba);










// var a = parseInt(prompt('Masukkan nilai 1: '));
// var b = parseInt(prompt('Masukkan nilai 2: '));
// var hasil = tambah(a, b);