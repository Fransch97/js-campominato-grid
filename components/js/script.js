// Esercizio di oggi: **Griglia Campo Minato**
// nome repo: js-campominato-grid
// **Consegna**
// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.
// **Consigli del giorno:** :party_wizard:
// **** Creiamo prima una griglia unica (es con 100 quadratini) per  poi dinamicizzare il dato con classi css dedicate
// **** Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
// Ad esempio:
// Di cosa ho bisogno per generare i numeri?
// Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
// Le validazioni e i controlli possiamo farli anche in un secondo momento.
// buon lavoro! :faccia_leggermente_sorridente:

console.log("working");

let container = document.querySelector('.container');

//div generator
function creatCubes(){
    const cube = document.createElement('div');
    
    console.log(cube);
}
creatCubes()

//controll evenen ore odd
function isEvenOdd(number){
    if(number % 2){
        console.log("odd")
        return 'odd'
    }
    console.log("even")
    return 'even'
}
// isEvenOdd(5) tested 

const randomNumber = []
//random numbers from 1 to
function oneToRandom(toNumber){
    
 for(let i = 0; i < toNumber; i++){
    let exists, numberRandom;
    while(!exists){
        numberRandom = Math.ceil(Math.random()*toNumber)
        console.log(numberRandom);
        if(!randomNumber.includes(numberRandom)){
            exists = true;
            randomNumber.push(numberRandom);
        }else{
            console.log("esisteva già")
        }
    }
     
 }
}

oneToRandom(10)
console.log(randomNumber)