console.log("working");

const container = document.querySelector('.container');
const play = document.querySelector('button');
console.log(play);
const randomNumber = [];
const bombs = [];
let score = 1;
function ripristina(){
    randomNumber.length = 0;
    container.innerHTML = "";
    score = 1;
}


play.addEventListener('click', ()=>{
    var audios = new Audio ('components/sound/play.mp3');
    audios.play();
    ripristina();
    level = document.querySelector('select').value;
    console.log(level);
    oneToRandom(checkNumberLevel(level),checkLevel(level));
    BombsGeneratoruis(checkNumberLevel(level))
    console.log(bombsContainer)
}
)
//div generator
function creatCubes(number,level){
    const cube = document.createElement('div');
    cube.classList.add('cubo');
    cube.classList.add(level);
    cube.innerHTML = `<span>${number} </span>`;
    container.append(cube);
   
    cube.addEventListener('click', function(){
        this.classList.add('clicked');
        const text = parseInt(this.innerText);
        console.log(text)
        if(!bombsContainer.includes(text)){
            cube.classList.add("even");

            var audio = new Audio('components/sound/wow.wav');
            audio.play();
            score++;
        }else if(bombsContainer.includes(text)){
            cube.classList.add("odd");

            var audio = new Audio('components/sound/lose.wav');
            audio.play();
            cube.innerHTML = `<span id="heart">&#128163;</span> `;
            container.innerHTML += 
            `
            <div class="lose">
                <h1>You lose <br>after ${score} try <br> Replay!</h1>
            </div>
            `;
            let oddSS = document.querySelectorAll('span');
            let oddSScubo = document.querySelectorAll('.cubo');
            console.log(oddSS);
            for(let i = 0; i < oddSS.length; i++){
                let addossunique = parseInt(oddSS[i].innerHTML);
                console.log("numero span prima del if",addossunique)
                console.log("array bombe", bombsContainer)
                console.log("container cercato", oddSS[i])
                if(bombsContainer.includes(addossunique) ){
                    console.log("lo span che sta nel bombscontainer",oddSS[i])
                const spani = oddSS[i]

                oddSScubo[i].classList.add('clicked', 'odd');
                spani.innerHTML = `<span id="heart">&#128163;</span> `
                }
                
            }
            
            
    }
       
    })
    
}



//controll evenen ore odd
function isEvenOdd(number){
    if(number % 2){
        console.log("odd");
        return 'odd';
    }
    console.log("even");
    return 'even';
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
            creatCubes(numberRandom, level)
        }else{
            console.log("esisteva già");
        }
    }
     
 }
}

// console.log(randomNumber)tested



// level ckeck function
function checkLevel(level){
    if(level==="easy"){
        return 'small';
    }
    if(level==="hard"){
        return 'mid';
    }
    if(level==="crazy"){
        return 'xl'
    }
}

//number of cube
function checkNumberLevel(level){
    if(level==="easy"){
        bombslimit = 5;
        return 49;
    }
    if(level==="hard"){
        bombslimit = 15;
        return 81;
    }
    bombslimit = 99;

    return 100;
}

//bombsGerator
let bombslimit ;
const bombsContainer = [];
function BombsGeneratoruis(toNumber){
    while(bombsContainer.length<bombslimit){
       const pickedBomb = Math.ceil(Math.random()*toNumber);
       if(!bombsContainer.includes(pickedBomb)){
           bombsContainer.push(pickedBomb);
           console.log("picked bomb number",pickedBomb)
       }
    }
}

// BombsGeneratoruis(20)
// console.log(bombsContainer)