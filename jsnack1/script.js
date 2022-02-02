//il computer chiede 10 volte all'utente di inserire un numero
//crea un ciclo per i prompt
//deve fermarsi dopo 10 volte

let numero;

let somma = 0;

let chosen = document.getElementById('chosen');
let sommaFinale = document.getElementById('somma');

for (let i = 0; i < 10; i++) {
    let numero = parseInt(prompt('Inserire un numero da 1-10'));


    if (numero > 10) {
        alert('Numero non valido. Sarà considerato "0"');
        numero = 0;

    } else if (isNaN(numero)) {
        alert('Numero non valido. Sarà considerato "0"');
        numero = 0;

    } else {
        chosen.innerHTML += '<li> numero '+ (i + 1) + ' : ' + numero +'</li>';
        console.log('you chose' + numero);
    
        somma += numero
        sommaFinale.innerHTML = '<h1> la somma di tutti i numeri è:  ' + somma +'</h1>';
        console.log('la somma è' + somma);
    }

}

    


    


// document.getElementByID - to insert the result into the HTML
// list with tag <UL>  <----- do this INSIDE FOR
// if/else goes inside for per gli alert (NaN, etc.) 