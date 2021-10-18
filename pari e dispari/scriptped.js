/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

//Inserisco i numeri 

const numeroPariDispari = prompt("Inserire un numero pari o dispari")
const numeroUtente = prompt("Inserire un numero da 1 a 5")

//Creo un numero casuale

function generateRandomNumber(minNum = 1, maxNum = 10) {
    const randomNum = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
    return randomNum
}

//Constanti per calcolare i miei numeri 

const numeroGenerato = generateRandomNumber(1, 5)
const totale = numeroUtente + numeroGenerato

//Variabile che mi ritorna se il numero è pari o dispari 

const risultato = pariDispari(totale)

function pariDispari(number) {
    if (number % 2 === 0) {
        return 'pari'
    } else {
        return 'dispari'
    }
}

//Creo una costante vuota per determinare il risultato

let risposta = ""

if (risultato === numeroPariDispari) {
    risposta = `Hai vinto, il tuo numero è ${risultato}: ${totale}`
} else {
    risposta = `Hai perso, il tuo numero è ${risultato}: ${totale}`
}
alert(risposta)









