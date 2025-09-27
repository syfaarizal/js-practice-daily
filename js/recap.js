// Recap variable, tipe data, & aritmatika operator

let namaa = "Ali";
let usiaa = 20;
let tahunLahir = 2025 - usiaa;

console.log("Nama saya " + namaa);
console.log("Saya lahir tahun " + tahunLahir);

let panjang = 5;
let lebar = 3;
let luasPersegiPanjang = panjang * lebar;

console.log(luasPersegiPanjang);

let alas = 4;
let tinggi = 6;
let luasSegitiga = 1/2 * alas * tinggi;

console.log(luasSegitiga)

let name = "Udin";
let umur = 20;

console.log(`Halo, nama saya ${name}, umur saya ${umur} tahun.`)

// Recap Conditional statement & Comparison Operators

let nilai = 75;

if (nilai >= 75) {
    console.log("Lulus");
} else {
    console.log("Tidak Lulus");
}

let usia = 90;

if (usia <= 13) {
    console.log("Anak-anak");
} else if (usia <= 17) {
    console.log("Remaja");
} else if (usia >= 18) {
    console.log("Dewasa");
} else {
    console.log("Tua")
}

let angka1 = 5;
let angka2 = 10;
let operator = `*`;
let result;

if (operator === `+`) {
    result = angka1 + angka2;
} else if (operator === `-`) {
    result = angka1 - angka2;
} else if (operator === `*`) {
    result = angka1 * angka2;
} else if (operator === `/`) {
    if (angka2 !== 0) {
        result = angka1 / angka2;
    } else {
        result = 'Error';
    }
} else {
    result = 'Operator gak dikenal';
}

console.log(`Result: ${result}`);

let num1 = 20;
let num2 = 10;
let operators = `*`;
let hasil;

switch (operators) {
    case ('+'):
        hasil = num1 + num2;
        break;
    case ('-'):
        hasil = num1 - num2;
        break;
    case ('*'):
        hasil = num1 * num2;
        break;
    case ('/'):
        hasil = num1 / num2;
        if (num1 !== 0) {
            hasil = num1 / num2;
        } else {
            hasil = 'Error';
        }
        break;
    case ('%'):
        hasil = num1 % num2;
        break;
    default:
        result = 'operator gak dikenal';
} 

console.log(`Hasil: ${hasil}`);

let buah = ["Apel", "Mangga"];
buah.push("Jeruk");
console.log("Setelah push: " + buah);
buah.unshift("Semangka");
console.log("Setelah unshift: " + buah);
buah.pop();
console.log("Setelah pop: " + buah);
buah.shift();
console.log("Setelah shift: " + buah);
console.log("Hasil akhir:" + buah);

let antrian = ["Budi", "Ani", "Susi"];
console.log("Awal antrian: " + antrian);

// Pelanggan baru datang
antrian.push("Udin");
console.log("Udin masuk antrian: " + antrian);

// Kasir memanggil pelanggan depan 
let pelanggan = antrian.shift();
console.log(pelanggan, "sudah dilayani. Antrian sekarang: " + antrian);

// VIP masuk ke depan
antrian.unshift("Joko");
console.log("VIP masuk antrian: " + antrian);

// Kasir melayani lagi
pelanggan = antrian.shift();
console.log(pelanggan, "sudah dilayani. Antrian sekarang: " + antrian);

let ntrian = ["Andi", "Budi"];
let counter = 1; // buat nama pelanggan baru
let putaran = 0;
let maxPutaran = 5; // berhenti setelah 5x siklus

console.log("Awal antrian: " + ntrian);

let kasir = setInterval(() => {
    // Pelanggan baru datang
    let pelangganBaru = "Pelanggan" + counter++;
    antrian.push(pelangganBaru);
    console.log(pelangganBaru + " masuk antrian: " + ntrian);

    // Kasir melayani pelanggan terdepan
    let dilayani = ntrian.shift();
    console.log(dilayani, "sedang dilayani. Antrian sekarang: " + ntrian);

    // Hitung putaran
    if (putaran >= maxPutaran) {
        clearInterval(kasir);
        console.log("Simulasi selesai");
    }
}, 3000); // setiap 3 detik

// Recap Functions

function sapa(nama) {
    console.log(`Halo, ${nama}, selamat datang!`);
}

sapa("Sylus");
sapa("Udin");
sapa("Budi");

function hitungLuasPersegiPanjang(p, l) {
    let luas = p * l;
    return luas;
}

let luas = hitungLuasPersegiPanjang(5, 10);
console.log(luas);

function hitungLuasSegitig(a, t) {
    let luas = 1/2 * a * t;
    return luas;
}

let luasSegitig = hitungLuasSegitig(4, 8);
console.log(luasSegitig);

function hitungLuasLingkaran(r) {
    let luas = 3.14 * r * r;
    return luas;
}

let luasLingkaran = hitungLuasLingkaran(5);
console.log(luasLingkaran);

// Recap DOM Manipulation
// function gantiWarna() {
//     document.body.style.backgroundColor = "lightblue";
// }
// function sembunyi() {
//     document.getElementById("hello").style.display = "none";
// }
// function tampil() {
//     document.getElementById("hello").style.display = "block";
// }
// function ubahTeks() {
//     document.getElementById("hello").innerText = "Hello, udah diubah teksnya";
// }
// function resetTeks() {
//     document.getElementById("hello").innerText = "Hello World!";
// }
function gantiWarna() {
    document.body.style.backgroundColor = "lightblue";
}
function sembunyi() {
    document.getElementById("hello").style.display = "none";
}
function tampil() {
    document.getElementById("hello").style.display = "block";
}
function ubahTeks() {
    document.getElementById("hello").innerText = "Hello, udah diubah teksnya";
}
function resetTeks() {
    document.getElementById("hello").innerText = "Hello World!";    
}