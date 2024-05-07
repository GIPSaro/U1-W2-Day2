/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
console.log("ESERCIZIO 1");

/* SCRIVI QUI LA TUA RISPOSTA */

let num1 = 17;
let num2 = 10;
if (num1 < num2) {
  console.log("17 è il numero più piccolo");
} else if (num1 > num2) {
  console.log("17 è il numero più grande");
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

console.log("ESERCIZIO 2");

/* SCRIVI QUI LA TUA RISPOSTA */

const numb2 = 7;

if (numb2 !== 5) {
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/
console.log("ESERCIZIO 3");
/* SCRIVI QUI LA TUA RISPOSTA */

let x = 15;
if (x % 5 === 0) {
  console.log("divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

console.log("ESERCIZIO 4");

/* SCRIVI QUI LA TUA RISPOSTA */

let y = 10;
let y1 = 2;
if (y === 8 || y1 === 8 || y + y1 === 8 || y - y1 === 8 || y1 - y === 8) {
  console.log("verificato");
} else {
  console.log("non verificato");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

console.log("ESERCZIO 5");

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart = 5;
let shippingCost = 10;
let amountToPay = totalShoppingCart;
if (totalShoppingCart < 50) {
  amountToPay += shippingCost;
}
console.log("Totale da pagare: ", amountToPay);

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

console.log("ESERCIZIO 6");

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart2 = 65;
totalShoppingCart = totalShoppingCart2 * 0.8;
let amountToPay2 = totalShoppingCart;
if (totalShoppingCart < 50) {
  amountToPay += shippingCost;
}
console.log("Totale da pagare: ", amountToPay2);

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
console.log("ESERCIZIO 7");

/* SCRIVI QUI LA TUA RISPOSTA */

let primo = 6;
let secondo = 14;
let terzo = 10;
if (primo > secondo) {
  if (terzo > primo) {
    console.log("terzo, primo, secondo");
  } else if (terzo > secondo) {
    console.log("primo, terzo, secondo");
  } else {
    console.log("primo, secondo, terzo");
  }
} else if (terzo > secondo) {
  console.log("terzo, secondo, primo");
} else if (terzo > primo) {
  console.log("secondo, terzo, primo");
} else {
  console.log("secondo, primo, terzo");
}
/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

console.log("ESERCIZIO 8");

/* SCRIVI QUI LA TUA RISPOSTA */

let numero22 = "Gio";
if (typeof numero22 === "number") {
  console.log("è un numero");
} else {
  console.log("non è un numero");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

console.log("ESERCIZIO 9");

/* SCRIVI QUI LA TUA RISPOSTA */

let test = 31;
if (test % 2 === 0) {
  console.log("è un numero pari!");
} else {
  console.log("è un numero dispari!");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

console.log("ESERCIZIO 10");

/* SCRIVI QUI LA TUA RISPOSTA */

let val = 11;
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

console.log("ESERCIZIO 11");

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */

me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

console.log("ESERCIZIO 12");

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

console.log("ESERCIZIO 13");

/* SCRIVI QUI LA TUA RISPOSTA */

me.skills.pop();
console.log(me.skills);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

console.log("ESERCIZIO 14");

/* SCRIVI QUI LA TUA RISPOSTA */

let myArray = [];
myArray.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(myArray);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

console.log("ESERCIZIO 15");

/* SCRIVI QUI LA TUA RISPOSTA */

myArray[9] = 100;
console.log(myArray);
