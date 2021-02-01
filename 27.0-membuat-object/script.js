// Membuat Object
// Object Literal
var mhs = {
    nama: "Gunawan Cipta",
    nrp: "043040023",
    email: 'gnwncpta@gmail.com',
    jurusan: 'Rekayasa Perangkat Lunak'
};

var mhs2 = {
    nama: "Jonathan Samuel",
    nrp: "051070030",
    email: 'jonathansam@gmail.com',
    jurusan: 'Cyber Security'
};


// Function declaration
function buatObjectMahasiswa(nama, nrp, email, jurusan){
    var mhs = {};
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email;
    mhs.jurusan = jurusan;

    return mhs;
}

var mhs3 = buatObjectMahasiswa('Nofariza', '1234567', 'nofariza@gmail.com', 'Graphic Design');


// Constructor
function Mahasiswa(nama, nrp, email, jurusan){
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;
}

var mhs4 = new Mahasiswa('Erik', '123456789', 'erik@gmailcom', 'Teknik Informatika');