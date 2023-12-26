function validateForm() {
    var namaPelanggan = document.getElementById('namaPelanggan').value;
    var email = document.getElementById('email').value;
    var jamKeberangkatan = document.getElementById('jamKeberangkatan').value;
    var tujuanKeberangkatan = document.getElementById('tujuanKeberangkatan').value;
    var jumlahTiket = document.getElementById('jumlahTiket').value;

    // Clear previous errors
    clearErrors();

    // Validate namaPelanggan
    if (namaPelanggan.length === 0 || namaPelanggan.length > 30) {
        displayError('Nama Pelanggan harus diisi dan maksimum 30 karakter.');
        return;
    }

    // Validate email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        displayError('Format Email tidak valid.');
        return;
    }

    // Validate jamKeberangkatan
    var jamRegex = /^(?:[01]\d|2[0-3]):(?:[0-5]\d)$/;
    if (!jamRegex.test(jamKeberangkatan)) {
        displayError('Format Jam Keberangkatan tidak valid (00:00 - 23:59).');
        return;
    }

    // Validate tujuanKeberangkatan
    if (tujuanKeberangkatan.length === 0) {
        displayError('Tujuan Keberangkatan harus diisi.');
        return;
    }

    // Validate jumlahTiket
    if (jumlahTiket < 1 || jumlahTiket > 10 || isNaN(jumlahTiket)) {
        displayError('Jumlah Tiket harus bilangan bulat antara 1 dan 10.');
        return;
    }

    // If everything is valid, display the result
    displayResult(namaPelanggan, email, jamKeberangkatan, tujuanKeberangkatan, jumlahTiket);
}

function displayError(message) {
    var errorDiv = document.getElementById('result');
    errorDiv.innerHTML = '<div class="error">' + message + '</div>';
}

function clearErrors() {
    var errorDiv = document.getElementById('result');
    errorDiv.innerHTML = '';
}

function displayResult(namaPelanggan, email, jamKeberangkatan, tujuanKeberangkatan, jumlahTiket) {
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '<h3>Form Data:</h3>' +
                        '<p>Nama Pelanggan: ' + namaPelanggan + '</p>' +
                        '<p>Email: ' + email + '</p>' +
                        '<p>Jam Keberangkatan: ' + jamKeberangkatan + '</p>' +
                        '<p>Tujuan Keberangkatan: ' + tujuanKeberangkatan + '</p>' +
                        '<p>Jumlah Tiket: ' + jumlahTiket + '</p>';
}