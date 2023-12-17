function tambahTambahan(){

    // Ambil nilai input angka 1 dan angka 2
    let angka1 = document.getElementById("angka1").value
    let angka2 = document.getElementById("angka2").value

    angka1 = parseInt(angka1);
    angka2 = parseInt(angka2);
    
    let hasil = document.getElementById("hasil")

    let hasilTambah = angka1 + angka2

    console.log(hasilTambah);

    hasil.innerHTML = hasilTambah
}