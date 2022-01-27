//il computer chiede 10 volte all'utente di inserire un numero
//crea un ciclo per i prompt
//deve fermarsi dopo 10 volte

let numeri = prompt('Inserire un numero da 1-10');

for (let i = 0; i < 11; i++) {

    do {
        prompt('Inserire un numero da 1-10')
        console.log(i, numeri[i]);
        console.log('prossimo numero');


    } while(numeri[i] == 10) {
        alert('Hai scelto i numeri'  + (numeri[i]))
        console.log('fine')

    }
}