function volumeKubus(a, b){

    var hitungKubus;
    var hitungA = a * a * a;
    var hitungB = b * b * b;
    hitungKubus = hitungA + hitungB;

    return hitungKubus;

}

alert(`Volume Kubus: ${volumeKubus(5, 10)}`);