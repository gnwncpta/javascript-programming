var penumpang = [];

var tambahPenumpang = function(namaPenumpang, penumpang){
    // jika angkot kosong
    if(penumpang.length == 0){  
        // tambah penumpang diawal array
        penumpang.push(namaPenumpang);
        // kembalikan isi array & keluar dari function
        return penumpang;

    } else { 
        // else
        // telusuri seluruh kursi dari awal
        for( var i = 0; i < penumpang.length; i++){

            // jika ada kursi kosong 
            if( penumpang[i] == undefined ){
                // tambah penumpang di kursi tersebut
                penumpang[i] = namaPenumpang;
                // kembalikan isi array & keluar dari function
                return penumpang;
            }

            // jika sudah ada nama yang sama
            else if( penumpang[i] == namaPenumpang ){
                // tampilkan pesan kesalahannya
                console.log(namaPenumpang + " sudah ada didalam angkot.");
                // kembalikan isi array & keluar dari function
                return penumpang;
            }

            //  jika seluruh kursi terisi
            else if( i == penumpang.length - 1 ) {
                // tambah penumpang diakhir array
                penumpang.push(namaPenumpang);
                // kembalikan isi array & keluar dari function
                return penumpang;
            }

        }
    }
    
}   


var hapusPenumpang = function(namaPenumpang, penumpang){

    // jika angkot kosong
    if(penumpang.length == 0){
        // tampilkan pesan bahwa angkot kosong, dan
        console.log("Angkot masih kosong!");
        // tidak mungkin ada penumpang turun
        // kembalikan isi array & keluar dari function

    } else { // else 
        // telusuri seluruh kursi dari awal
        for( var i = 0; i < penumpang.length; i++){
        // jika nama penumpang sesuai
            if(penumpang[i] == namaPenumpang){
                // hapus penumpang dengan mengubah namanya,
                // menjadi undefined
                console.log('Penumpang dengan nama: ' + penumpang[i] + ' telah turun!');
                penumpang[i] = undefined;
                // kembalikan isi array & keluar dari function
                return penumpang;
            } else if( i == penumpang.length - 1 ) { // jika tidak ada nama yang sesuai
                // tampilkan pesan kesalahannya
                console.log(namaPenumpang + " tidak ada diangkot!");
                // kembalikan isi array & keluar dari function
                return penumpang;
            }
        }
    }

    return penumpang;
}
