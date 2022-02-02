//calcola la somma e la media dei primi 10 numeri

//dichiaro variabili (somma, media, ecc.)
let somma = 0;
let media = 0;
const limite = 10;

//scorro i primi 10 numeri (con ciclo for?)

for (let i = 0; i < limite; i++) {
    somma += i;
}

//calcolo la media
media = somma / limite;

//stampo somma e media
alert(`la somma dei numeri da 1 a 10 è: ${somma} e la media è ${media}`)