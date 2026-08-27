// script.js - Logika validasi Form Login & Registrasi (Kopi Senja Coffee Shop)

function cekLogin() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (username === "" || password === "") {
    alert("Username dan password wajib diisi!");
  } else {
    alert("Selamat datang kembali di Kopi Senja, " + username + "!");
  }
}

function cekRegister() {
  // Ambil nilai dari setiap input
  let nama = document.getElementById("nama").value;
  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let konfirmasiPassword = document.getElementById("konfirmasi-password").value;
  let tanggalLahir = document.getElementById("tanggal-lahir").value;
  let alamat = document.getElementById("alamat").value;

  // Ambil nilai jenis kelamin (radio button)
  let lakiLaki = document.getElementById("laki-laki").checked;
  let perempuan = document.getElementById("perempuan").checked;
  let jenisKelaminTerisi = lakiLaki || perempuan;

  // 1. Validasi data penting tidak boleh kosong
  if (nama === "" || username === "" || email === "" || password === "") {
    alert("Data penting (Nama, Username, Email, Password) harus diisi!");
    return;
  }

  // 2. Validasi panjang password minimal 8 karakter
  if (password.length < 8) {
    alert("Password minimal 8 karakter!");
    return;
  }

  // 3. Validasi password dan konfirmasi password harus sama
  if (password !== konfirmasiPassword) {
    alert("Password dan konfirmasi password tidak sama!");
    return;
  }

  // 4. Validasi tanggal lahir harus diisi
  if (tanggalLahir === "") {
    alert("Silakan isi tanggal lahir!");
    return;
  }

  // 5. Validasi jenis kelamin harus dipilih
  if (!jenisKelaminTerisi) {
    alert("Silakan pilih jenis kelamin!");
    return;
  }

  // 6. Validasi alamat tidak boleh kosong
  if (alamat === "") {
    alert("Silakan isi alamat!");
    return;
  }

  // Jika semua validasi lolos
  alert("Data registrasi valid! Selamat datang, " + nama + ".");
}

// Function tambahan sesuai modul (contoh function sederhana)
function tampilkanPesan() {
  alert("Selamat belajar JavaScript!");
}