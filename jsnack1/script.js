














//il computer chiede 10 volte all'utente di inserire un numero
//crea un ciclo per i prompt
//deve fermarsi dopo 10 volte

let numero;

let somma = 0;

let chosen = document.getElementById('chosen');

for (let i = 0; i < 10; i++) {
    numero = parseInt(prompt('Inserire un numero da 1-10'));
    chosen.innerHTML += '<li> numero: '+ numero +'</li>';
    console.log('you chose' + numero);

    somma += numero
    console.log('la somma è' + somma)
    

    }
    
//}

// document.getElementByID - to insert the result into the HTML
// list with tag <UL>  <----- do this INSIDE FOR
// if/else goes inside for per gli alert (NaN, etc.) 