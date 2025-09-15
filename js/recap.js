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