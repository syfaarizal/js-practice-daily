// console.log("Hello world External")

// TYPEOF VARIABLE

// var varVariable = "Hello from Variable"
// console.log(varVariable)
// var varVariable = "Hello from Var below"
// console.log(varVariable)
// var varVariable = "Hello from var again"
// console.log(varVariable)

// let letVariable = "Hello from let"
// console.log(letVariable)
// letVariable = "Hello from let below"
// console.log(letVariable)

// const constVariable = "Hello from const"
// console.log(constVariable)
// constVariable = "Hello from const below"
// console.log(constVariable)

// DATA TYPES

// let undefinedValue
// console.log(undefinedValue)

// let nullValue = null
// console.log(nullValue)

// let numberValue = 10
// console.log(typeof numberValue)

// let stringValue = `Hellow`
// console.log(stringValue)

// let booleanValue = false
// console.log(booleanValue)
// booleanValue = true
// console.log(typeof booleanValue)

// let objectValue = {
//     key: "value",
//     a: 1
// }
// console.log(objectValue)
// console.log(objectValue.a)

// ARITHMETIC OPERATORS

// let num1 = 2, num2 = 3, num3 = 5;

// +
// console.log(2 + 3)
// console.log(num1 + num3)

//-
// console.log(5 - 3)
// console.log(num2 - num1)

//*
// console.log(5 * 2)
// console.log(num1 * num2)

// /
// console.log(10 / 5)
// console.log(num3 / num2)

//**
// console.log(4 **  2)
// console.log(num3 ** 2)

//%
// console.log(13 % 6)
// console.log(num2 % num1)

//++
// console.log(num2++)
// console.log(num2)
// console.log(++num2)

//--
// console.log(num3--)
// console.log(num3)
// console.log(--num3)

// num1 %= num2
// console.log(num1)

// CONDITIONAL STATEMENT 

// let num1 = 10, num2 = 50;

// console.log("Belajar Conditional")

// if (num1 > num2) {
//     console.log("Kondisi if benar")
// } else if (num1 > num2) {
//     console.log("Kondisi else benar")
// } else {
//     console.log("Tidak ada jawaban yang benar")
// }

// let usia = 15;

// if (usia >= 17) {
//     console.log("Bisa buat KTP")
// } else {
//     console.log("Belum bisa buat KTP")
// }

// let hari = "Senin";

// switch (hari) {
//     case "Senin":
//     case "Selasa":
//     case "Rabu":
//     case "Kamis":
//     case "Jumat":
//         console.log("Hari kerja");
//         break;
//     case "Sabtu":
//     case "Minggu":
//         console.log("Weekend");
//         break;
//     default:
//         console.log("Hari tidak dikenal");
// }

// let login = true;

// if (login) {
//     console.log("Selamat Datang!")
// } else {
//     console.log("Silahkan login terlebih dahulu")
// }

// let nilai = 100;

// if (nilai >= 90) {
//     console.log("A")
// } else if (nilai >= 75) {
//     console.log("B")
// } else if (nilai >=60) {
//     console.log("C")
// } else {
//     console.log("D")
// }

// let umur = 17;

// if (umur >= 17){
//     console.log("Kamu sudah cukup umur")
// } else {
//     console.log("Kamu belum cukup umur")
// }

// Comparison Operator

// let username = "admin", password = "12345678";

// if (username === "admin" && password === "1234678") {
//     console.log("Login berhasil")
// } else {
//     console.log("Login gagal, silahkan coba lagi")
// }

//LOGICAL OPERATOR
    
// let usia = 17;
// let vaksin = true;

// if (usia >= 18 && vaksin) {
//     console.log("Boleh masuk bioskop")
// } else {
//     console.log("Belum boleh masuk bioskop")
// }

// let umur = 17, punyaKTP = true;

// if (umur >= 17 && punyaKTP){
//     console.log("Lu bisa daftar SIM")
// } else {
//     console.log("Belum bisa daftar SIM")
// }

// let nilaiAkhir = 79, remedial = true;

// if (nilaiAkhir >= 75 || remedial){
//     console.log("Lulus")
// } else {
//     console.log("Tidak lulus")
// }

// let isLogin = true, isActive = false;

// if (!(isLogin && isActive)) {
//     console.log("Selamat datang kembali!")
// } else {
//     console.log("Akses di tolak")
// }

// let iniLogin = true;

// if (!iniLogin) {
//     console.log("Kamu harus login dulu")
// } else {
//     console.log("Selamat datang!")
// }

// ARRAY
const rakSepatu = ["Nike", "Adidas", "Converse", "Puma"];

rakSepatu.push("Louboutin")
rakSepatu.pop()
rakSepatu.unshift("YSL")
rakSepatu.shift()
console.log(rakSepatu.length)


// Looping
for(var i = 0; i < 10;i+=1){
    console.log("Nama")
}

let mahasiswa = ["May", "Agus", "Doni"] // <= Array Looping
let nilai = [70, 80, 90]
for(var i = 0; i < mahasiswa.length;i+=1) {
    console.log(mahasiswa[i] + " " + nilai[i])
}

let murid = ["Udin", "Asep", "Siti", "Romlah"] // <= Array Looping
for(var i = 0; i < murid.length; i+=1) {
    console.log(murid[i])
}

let mahasiswaa= ["Pororo", "Edi", "Risol"] // <= Array Looping
for (nama of mahasiswaa){
    console.log(nama)
}

// di gunakan ketika looping tidak ada nilai pastinya
var i = 0
do{ //bakal ngejalanin codingan sekali dulu, baru dia ngecek kondisinya
    console.log(5) // input angka
    i+=1
} while(i < 5) // <= (cek tipe data kalau bkn != number)

// while = dia ga bakal ngelakuin loopingan nya kalau kondisinya emg ga terpenuhi. while mirip if, cuma dia looping
// let i = 0;
while(i < 7) { // kalo i > dari 7, codingan console.log gaakan di jalanin
    console.log("loop ke" + i);
    i++;
}
