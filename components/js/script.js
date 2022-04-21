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

const container = document.querySelector('.container');
const play = document.querySelector('button');
console.log(play)
const randomNumber = []

function ripristina(){
    randomNumber.length = 0;
    container.innerHTML = "";
}


play.addEventListener('click', ()=>{
    var audios = new Audio ('components/sound/play.mp3');
    audios.play()
    ripristina();
    level = document.querySelector('select').value;
    console.log(level);
    oneToRandom(checkNumberLevel(level),checkLevel(level));
    console.log(allOdd)
   
}
)

//div generator
function creatCubes(number,randomico,level){
    const cube = document.createElement('div');
    cube.classList.add('cubo');
    cube.classList.add(level);
    cube.classList.add(isEvenOdd(randomico));
    cube.innerHTML = `<span>${number} <span>`;
    container.append(cube);
    const soundcontroll = cube.className
    console.log(soundcontroll)
   
    cube.addEventListener('click', function(){
        this.classList.add('clicked');
        if(soundcontroll.includes("even")){
            var audio = new Audio('components/sound/wow.wav');
            audio.play();
            
        }else{
            var audio = new Audio('components/sound/lose.wav');
            audio.play();
            cube.innerHTML = `<span id="heart">&#128163;</span> `
            container.innerHTML += 
            `
            <div class="lose">
                <h1>Hai perso <br> riavvia la partita!</h1>
            </div>
            `;
    }
       
    })
    
}

//function to se if even ore odd
// function bombchecker(){
//     if()
// }

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

//random numbers from 1 to
function oneToRandom(toNumber, level){
    
 for(let i = 1; i <= toNumber; i++){
    let exists, numberRandom;
    while(!exists){
        numberRandom = Math.ceil(Math.random()*toNumber)
        console.log(i);
        if(!randomNumber.includes(numberRandom)){
            exists = true;
            randomNumber.push(numberRandom);
            const banana = creatCubes(numberRandom, numberRandom, level)
           
        }else{
            console.log("esisteva già")
        }
    }
     
 }
}

// console.log(randomNumber)tested



// level ckeck function
function checkLevel(level){
    if(level==="easy"){
        return 'small'
    }
    if(level==="hard"){
        return 'mid'
    }
    if(level==="crazy"){
        return 'xl'
    }
}

//number of cube
function checkNumberLevel(level){
    if(level==="easy"){
        return 49
    }
    if(level==="hard"){
        return 81
    }
    return 100
}