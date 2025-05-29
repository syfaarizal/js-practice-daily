// DOM MANIPULATION
// let el = document.getElementById("div-1");
// console.log(el)

// let el = document.getElementsByTagName("div");
// console.log(el[0])

// let element = document.getElementsByClassName("div-2");
// console.log(element[0])

// let el = document.querySelector("#div-1");
// let el = document.querySelector("div")
// let el = document.querySelector(".div-2")
// console.log(el)

// HARDER
// let element = document.getElementById("judul");
// console.log(element.innerText);

// let elemen = document.getElementsByClassName("teks");
// console.log(elemen[2].innerText);

// let paragraf = document.getElementsByTagName("div");
// console.log(paragraf[2].innerText);

// let el = document.querySelector(".teks");
// console.log(el.innerText)

// let items = document.querySelectorAll("li");
// items.forEach(items => {
//     console.log(items.innerText);
// });

// CHANGING HTML ELEMENTS
// let el = document.querySelector(".input");
// console.log(el)

// el.innerText = "Hello World"
// el.innerHTML = "<b>Bold</b>"
// input.setAttribute("type", "checkbox")
// input.style.color = "red";
// input.style.backgroundColor = "purple"

// CREATING & DELETING ELEMENTS
// const pElement = document.createElement("p")
// const divEl = document.getElementById("div-1")

// divEl.appendChild(pElement);
// pElement.innerText = "Hello this is P"

// divEl.remove(pElement)

// function tambahItem() {
//     const itemBaru = document.createElement("li")
//     itemBaru.innerText = "Item Baru";
//     document.getElementById("list").appendChild(itemBaru);
// }

// function hapusPesan() {
//     const pesan = document.getElementById("pesan");
//     pesan.remove();
// }

// function bikinKotak() {
//     const kotak = document.createElement("div");
//     kotak.style.color = "purple"
//     kotak.innerText = "Kotak baru nih";
//     kotak.style.border = "3px solid pink";
//     kotak.style.padding = "10px";
//     kotak.style.margin = "5px 0px";
//     document.getElementById("container-kotak").appendChild(kotak);
// }

// DOM EVENT
const hello = document.getElementById("hello");

hello.addEventListener("mouseenter", function() {
    // console.log("Mouse enter hello world text")
    hello.style.border = "1px solid red"
})

function pickMe() {
    const pick = document.getElementById("boom");
    pick.style.display = "block";
}

function addBorder(el) {
    el.style.border = "5px solid pink"
}