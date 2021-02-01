var angka = prompt('masukkan angka ...');

if(angka % 2 === 0){
    alert(angka + ' adalah bilangan GENAP');
} else if ( angka % 2 === 1){
    alert(angka + ' adalah bilangan GANJI L');
} else {
    alert('yang anda masukkan bukan angka!');
}