//chiedi all'utente un numero (n)

const n = parseInt(prompt('Scegli un numero'));

let chosen = document.getElementById('chosen');
let cuboFinale = document.getElementById('cubo');


//verifico che il numero è valido

if ((isNaN(n)) || n <= 0) {
    alert('Numero non valido');

} else {

    chosen.innerHTML = '<p>' + n + '</p>';


//scorro i numeri da 0 - n
    for (let i=0; i <= n; i++) {
        //calcolo il cubo
        const cubo = i*i*i;
        //stampo
        cuboFinale.innerHTML = '<p> Il cubo del numero ' + n + '  è  ' + cubo + '. Troverai tutti i calcoli dei numeri da 1 a ' + n + ' nel console log.</p>'
        console.log(cubo);
    }

}