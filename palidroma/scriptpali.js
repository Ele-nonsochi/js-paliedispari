/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

//Chiedere all'utente d'inserire una parola 

const parolaUtente = prompt("Prego inserire una parola:")

//Capire se la parola è palindroma creo una variabile per la parola

const parolaPalidroma = palidroma(parolaUtente)
let risposta = ""
//Controllo se la parola data è palidroma o no 

if (parolaPalidroma) {
    risposta = "La tua parola è palidroma"
} else {
    risposta = "La tua parola non è palidroma"
}

//Creo una funzione dove stabilisco se la parola è vera o falsa 

function palidroma(parolaUtente) {
    let array = parolaUtente.split('')
    let arrayReverse = array.reverse()
    if (arrayReverse.join('') === parolaUtente) {
        return true
    } else {
        return false
    }
}

alert(risposta)