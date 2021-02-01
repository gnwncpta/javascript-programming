// var mahasiswa = {
//     nama: "Gunawan Cipta",
//     lulus: true,
//     IPSemester: [2.90, 3.10, 3.25, 2.88, 3.04],
//     IPKumulatif: function(){
//         var total = 0;
//         var ips = this.IPSemester;
//         for( var i = 0; i < ips.length; i++){
//             total += ips[i];
//         }
//         return total/ips.length;
//     }
// }

// mahasiswa.IPKumulatif();


// membuat Object
// ini adalah style object literal
var mhs = {
    nama: 'Gunawan Cipta',
    umur: 17,
    ips: [3.00, 2.50, 3.20],
    alamat: {
        jalan: "Jl. abc No. 123",
        kota: "Depok",
        provinsi: "Jawa Barat"
    }
};

var laptop = {
    model: 'Macbook Pro 2020',
    tahun: 2020,
    warna: ['Merah', 'Kuning', 'Abu abu'],
    harga: '10 Juta',
    fitur: {
        backlit: true,
        retina: true,
        antiBanting: false,
    }
} 