// if else

let huruf = "B";

if (huruf === "B") {
    console.log(`Ini adalah huruf ${huruf}`);
} else {
    console.log("huruf tidak dikenali");
}

// nested if

let punyamobil = "iya";

if (punyamobil === "iya") {
    console.log("Selamat bang udah punya mobil");
} else if (punyamobil === "belum") {
    console.log("Tetap semangat bang, semoga kebeli");
} else {
    console.log("Yo ndak tahu kok tanya saya");
}

// switch case

let kategoriBarang = "Pakaian";
let diskon;

switch (kategoriBarang) {
  case "Elektronik":
    diskon = 10;
    break;
  case "Pakaian":
    diskon = 20;
    break;
  case "Otomotif":
    diskon = 15;
    break;
  default:
    diskon = 5;
}

console.log(`Anda mendapatkan diskon sebesar ${diskon}% untuk kategori ${kategoriBarang}.`);

// for statement

for(let x = 0; x<=20; x += 3) {
    console.log(x);
}

// while

let angka = 8;

while (angka >= 2) {
  console.log(angka);
  angka -= 2;
}

// do while

let a = 1;

do {
  console.log(a);
  a++;
} while (a <= 7);

// function

function cekHuruf(karakter) {
  let huruf = karakter.toLowerCase();
  if (huruf === 'a' || huruf === 'i' || huruf === 'u' || huruf === 'e' || huruf === 'o') {
      return "Vokal";
  } else {
      return "Konsonan";
  }
}

let karakter = 'L';
let jenisHuruf = cekHuruf(karakter);

console.log(`Karakter '${karakter}' adalah huruf ${jenisHuruf}`);