console.log("test")

//6. Turime šešis atsitiktinius skaičius nuo 1000 iki 9999. Surikiuoti juos didėjimo tvarka.

let a;
let b;
let c;
let d;
let e;
let f;

//a = Math.random();
a = Math.floor(Math.random()*(9999-1000))+1000
console.log(a)

b = Math.floor(Math.random()*(9999-1000))+1000
console.log(b)

c = Math.floor(Math.random()*(9999-1000))+1000
console.log(c)

d = Math.floor(Math.random()*(9999-1000))+1000
console.log(d)

e = Math.floor(Math.random()*(9999-1000))+1000
console.log(e)

f = Math.floor(Math.random()*(9999-1000))+1000
console.log(f)

// Pirmas ciklas
if (a>b) {
    let x = a;
    a = b;
    b = x;
}

if (b>c) {
    let x = b;
    b = c;
    c = x;
}

if (c>d) {
    let x = c;
    c = d;
    d = x;
}

if (d>e) {
    let x = d;
    d = e;
    e = x;
}

if (e>f) {
    let x = e;
    e = f;
    f = x;
}

// Antras ciklas
if (a>b) {
    let x = a;
    a = b;
    b = x;
}

if (b>c) {
    let x = b;
    b = c;
    c = x;
}

if (c>d) {
    let x = c;
    c = d;
    d = x;
}

if (d>e) {
    let x = d;
    d = e;
    e = x;
}


// Trecias ciklas
if (a>b) {
    let x = a;
    a = b;
    b = x;
}

if (b>c) {
    let x = b;
    b = c;
    c = x;
}

if (c>d) {
    let x = c;
    c = d;
    d = x;
}

// Ketvirtas ciklas
if (a>b) {
    let x = a;
    a = b;
    b = x;
}

if (b>c) {
    let x = b;
    b = c;
    c = x;
}

// Penktas ciklas
if (a>b) {
    let x = a;
    a = b;
    b = x;
}
console.log("------------------------")

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
console.log(f)

console.log("****************")
// FUNKCIJOS

//Tai yra kodo blokas, kuris vykdo tam tikra uzduoti, ir kuri galima iskviesti kada norime.

function multiply(a, b) {
    console.log(a*b);
}

multiply(11,2)

function greeting(){
    console.log("Hello, " + firstName);
}

let firstName = "Ricardas"

function sum(a, b){
    return a+b;
}

let skaicius1 = 78;
let skaicius2 = 896;

let suma = sum(25,56);
console.log("Suma yra "+sum(skaicius1,skaicius2));




// for creating heading, where a is size and b is text

// function createHeading(a, b){
//     document.write("<h"+a+">"+b+"</h"+a+">");
// }


function createHeading(a, b){
    return "<h"+a+">"+b+"</h"+a+">";
}

document.write(createHeading(3, "Funkcija su return"))



function createHeadingV2() {
    let a;
    let b;
    a = parseInt(window.prompt("Iveskite heading dydi"))
    b = window.prompt("Iveskite pavadinimo teksta")

    document.write("<h"+a+">"+b+"</h"+a+">");
}



//Masyvai - Arrays

const trees = [
    "Pusis",
    "Berzas",
    "Azuolas"
    ];


const cars = [];
cars[0] = "BMW";
cars[1] = "Opel";
cars[2] = "Audi";

console.log(trees);
document.write(cars);


let bestCar = cars[2];
console.log(bestCar)


//Objektai - Objects

const student = {
    firstName:"Jonas",
    lastName: "Jonaitis",
    age:23
}

console.log(student.firstName);


// Array Methods

const furniture = [
    "stalas",
    "kede",
    "fotelis",
    "lova"
]

console.log(furniture);

console.log(furniture.toString());
console.log(furniture.join(" | "));

let bed = furniture.pop();
console.log(furniture);
console.log(bed);

furniture.push("sofa")
console.log(furniture);

furniture.shift();
console.log(furniture);
furniture.unshift("spintele")
console.log(furniture);

console.log(furniture.length) // Paskutinis indeksas yra vienu mazesnis uz length

delete furniture[2];
console.log(furniture);