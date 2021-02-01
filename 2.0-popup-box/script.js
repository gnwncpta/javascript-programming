// alert('Halo');
// alert('nama');
// alert('saya');
// alert('Gunawan Cipta');

// var name = prompt("Insert name: ");
// alert(name);

// var tes = confirm('Are you sure?');
// if( tes === true ){
//     alert("user menekan OK!");
// } else {
//     alert('user menekan Cancel!');
// }

alert('Selamat Datang!');
var lagi = true;

while( lagi ){
    var nama = prompt('Insert name:');
    alert(`Hello! ${nama}`);

    lagi = confirm('Try again?');
}

alert('Thank You!');