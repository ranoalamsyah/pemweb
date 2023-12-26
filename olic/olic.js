function validasiForm() {
    // ambil elemen
    let namaPelanggan = document.getElementById("namaPelanggan").value.trim();
    let email = document.getElementById("email").value.trim();
    let jamKeberangkatan = document.getElementById("jamKeberangkatan").value.trim(); // trim di sini
    let tujuanKeberangkatan = document.getElementById("tujuanKeberangkatan").value.trim();
    let jumlahTiket = document.getElementById("jumlahTiket").value.trim(); // trim di sini

    // Validasi
    if (namaPelanggan.length === 0) {
        displayErrorMessage("errorNamaPelanggan", "Nama Pelanggan harus diisi.");
        return false;
    }

    if (email.length === 0) {
        displayErrorMessage("errorEmail", "Email harus diisi.");
        return false;
    }

    if (jamKeberangkatan.length === 0) {
        displayErrorMessage("errorJamKeberangkatan", "Jam Keberangkatan harus diisi.");
        return false;
    }

    if (tujuanKeberangkatan.length === 0) {
        displayErrorMessage("errorTujuanKeberangkatan", "Tujuan Keberangkatan harus diisi.");
        return false;
    }

    if (jumlahTiket.length === 0 || isNaN(jumlahTiket)) {
        displayErrorMessage("errorJumlahTiket", "Jumlah Tiket harus diisi dengan angka.");
        return false;
    }

    if (namaPelanggan.length !== 0 && email.length !== 0 && jamKeberangkatan.length !== 0 && tujuanKeberangkatan.length !== 0 && jumlahTiket.length !== 0 && !isNaN(jumlahTiket)) {
            tampilkanHasilForm();
            return false; // Mencegah formulir dikirim
        }

        return false;
}

function displayErrorMessage(elementId, message) {
    document.getElementById(elementId).innerHTML = message;
    document.getElementById(elementId).style.color = "red";
}

function tampilkanHasilForm() {
        // ambil elemen
        let namaPelanggan = document.getElementById("namaPelanggan").value.trim();
        let email = document.getElementById("email").value.trim();
        let jamKeberangkatan = document.getElementById("jamKeberangkatan").value.trim();
        let tujuanKeberangkatan = document.getElementById("tujuanKeberangkatan").value.trim();
        let jumlahTiket = document.getElementById("jumlahTiket").value.trim();

        // Menampilkan hasil di bawah formulir
        let hasilFormDiv = document.getElementById("hasilForm");
        hasilFormDiv.innerHTML = `
            <h3>Hasil Formulir:</h3>
            <p>Nama Pelanggan: <span id="hasilNamaPelanggan">${namaPelanggan}</span></p>
            <p>Email: <span id="hasilEmail">${email}</span></p>
            <p>Jam Keberangkatan: <span id="hasilJamKeberangkatan">${jamKeberangkatan}</span></p>
            <p>Tujuan Keberangkatan: <span id="hasilTujuanKeberangkatan">${tujuanKeberangkatan}</span></p>
            <p>Jumlah Tiket: <span id="hasilJumlahTiket">${jumlahTiket}</span></p>
        `;
    }