// define the variables needed

let alphabet = "abcdefghijklmnopqrstuvwxyz"; 
let randomWordsArr = ["head", "hike", "pack" , "calculator", "trivia", "charger", "wallet"]
let optionsDiv = document.querySelector(".options")
let showcase = document.querySelector(".showcase")
let image = document.querySelector(".change")
let userChances = 0;

// options generator 

function optionsGenerator (str) {
    let alphabetsDiv = ""
    for (let i = 0; i < str.length; i++) {
        alphabetsDiv += `<div class="card">${str[i]}</div>`
    }
    optionsDiv.innerHTML = alphabetsDiv;
}

optionsGenerator(alphabet);
let card = document.querySelectorAll(".card")


// showcase generator 

function showcaseGenerator (arr) {
    let str = randomWord(arr);
    console.log(str)
    let showcaseDiv = [];
    let randomIndex = Math.floor(Math.random() * str.length-1);
    console.log(randomIndex)
    for (let i = 0; i < str.length; i++) {
        if (i == randomIndex) {
            showcaseDiv.push(`<div class="solution">${str[i]}</div>`)

        } else {
            showcaseDiv.push(`<div class="solution"></div>`)
        }
    }
    showcase.innerHTML = showcaseDiv.join();
    return [str, showcaseDiv];
}

// random word chooser 

function randomWord (arr) {
    return arr[Math.floor(Math.random() * 7)];
}


// add event listners to the displayed letters

card.forEach((ele) => ele.addEventListener('click', appender))


// create a function to append the solutions
let currentSolution = showcaseGenerator(randomWordsArr);
function appender (e) {
    if (userChances <= 5) { 
        if (!currentSolution[0].includes(event.srcElement.innerHTML)) {
            console.log("change the photo")
            userChances++
        } else {
            let valueShowerIndex = (currentSolution[0].indexOf(event.srcElement.innerHTML));
            currentSolution[1][valueShowerIndex] = `<div class="solution">${event.srcElement.innerHTML}</div>`;
            console.log(currentSolution[1])
            showcase.innerHTML = currentSolution[1].join();
        }
    } else {
        window.alert(`Try again thw word was ${currentSolution[0]}`)     
    }

   
}
