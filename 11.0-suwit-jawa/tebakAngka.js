alert('Game tebak angka pilih 1 - 10 \nKamu punya 3 kesempatan!');


// menangkap pilihan komputer
// membangkitkan bilangan random
var comp = Math.random();

if(comp > 0.01 && comp < 0.20){
    comp = 1;
}else if(comp > 0.20 && comp < 0.30){
    comp = 2;
}else if(comp > 0.30 && comp < 0.40){
    comp = 3;
}else if(comp > 0.40 && comp < 0.50){
    comp = 4;
}else if(comp > 0.50 && comp < 0.60){
    comp = 5;
}else if(comp > 0.60 && comp < 0.70){
    comp = 6;
}else if(comp > 0.70 && comp <= 0.80){
    comp = 7;
}else if(comp > 0.80 && comp < 0.90){
    comp = 8;
}else if(comp > 0.90 && comp < 1.00){
    comp = 9;
} else {
    comp = 10;
}

console.log(comp);

var kesempatan = 3;
var lagi = true;


while(kesempatan){
    
    // menangkap pilihan player
    var user = parseInt(prompt('Masukkan angka tebakan ...'));


    var hasil = '';

    // menentukan rules
    if(user == comp){
        alert('Tebakan BENAR! \nAngka yang dicari adalah: ' + comp)
        kesempatan = 0;
    }else if(user < comp){
        kesempatan = kesempatan - 1;
        alert('Terlalu RENDAH! \nKamu masih punya: ' + kesempatan + ' kesempatan');
        if(kesempatan == 0){
            alert('Kesempatan kamu habis!');
        }
        if(kesempatan == 0){
            alert('Anda gagal! \nAngka yang dicari adalah: ' + comp);
        }
    }else if(user > comp){
        kesempatan = kesempatan - 1;
        alert('Terlalu TINGGI! \nKamu masih punya: ' + kesempatan + ' kesempatan');
        if(kesempatan == 0){
            alert('Kesempatan kamu habis!');
        }
        if(kesempatan == 0){
            alert('Anda gagal! \nAngka yang dicari adalah: ' + comp);
        }
    } else {
        alert("Masukan tidak boleh string/kosong.");
    }
    
}

lagi = confirm('Ingin Main Lagi ?');

alert("Terima kasih telah bermain!");
