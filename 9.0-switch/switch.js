// var angka = parseInt(prompt("Insert number ..."));

// switch( angka ){
//     case 1 :
//         alert('Anda memasukkan angka 1');
//         break;
//     case 2 :
//         alert('Anda memasukkan angka 2');
//         break;
//     case 3 :
//         alert('Anda memasukkan angka 3');
//         break;
//     default :
//         alert('angka yang anda masukkan salah');
//         break;
// }

var item = prompt('masukkan nama makanan / minuman : \n (cth: nasi, daging, susu, hamburger, softdrink)');

switch( item ){
    case 'nasi':
    case 'daging':
    case 'susu':
        alert('Makanan/minuman: SEHAT!');
        break;

    case 'hamburger':
    case 'softdrink':
        alert('Makanan/minuman: TIDAK SEHAT!');
        break;
        
    default:
        alert('anda memasukkan nama makanan/minuman yang salah');
}

