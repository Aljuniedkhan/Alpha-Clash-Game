// set backgroundColor by ID
function setBackgroundColor(elementId) {
    document.getElementById(elementId).classList.add('bg-orange-400');

}
// remove Background Color by ID
function removeBackgroundColor(elementId) {
    document.getElementById(elementId).classList.remove('bg-orange-400');

}

function getThePressedButton(event) {
    const playerPressed = event.key

    if(playerPressed==='Escape'){
        gameOver()
    }
    // console.log(playerPressed);
    const expectedKey = document.getElementById('current-alphabet').innerText
    const updatedExpectedKey = expectedKey.toLowerCase();
    // console.log(updatedExpectedKey, playerPressed)
    if (playerPressed === updatedExpectedKey) {
        const score = document.getElementById('score-id')
        const intscore = score.innerText
        const intScore = parseInt(intscore);
        const updateScore = (intScore + 1);
        document.getElementById('score-id').innerText = updateScore;
        //  console.log(updatedExpectedKey, playerPressed);
        removeBackgroundColor(updatedExpectedKey);
        continuegame();
    } else {
        const life = document.getElementById('life-id').innerText;
        const intLife = parseInt(life);
        const finalLife = intLife - 1;
        document.getElementById('life-id').innerText = finalLife;
        if (finalLife === 0) {
            gameOver();
            document.getElementById('AtLastScore').innerText = finalLife;
        }
    }
}
document.addEventListener('keyup', getThePressedButton)


function continuegame() {

    // Generate a random alphabet
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabet = alphabetString.split('');
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    const alphabetNew = alphabet[index];
    // console.log(alphabetNew)
    document.getElementById('current-alphabet').innerText = alphabetNew;
    setBackgroundColor(alphabetNew);
}


// play function works
function play() {
    document.getElementById('home-section').classList.add('hidden');
    document.getElementById('playground').classList.remove('hidden');
    // reset score&life
    document.getElementById('life-id').innerText = 3;
    document.getElementById('score-id').innerText = 0;
    continuegame();
    document.getElementById('score-life').classList.add('hidden');
}


function setTextElementValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}
function removeBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

// game over function
function gameOver() {
    document.getElementById('playground').classList.add('hidden');
    document.getElementById('score-life').classList.remove('hidden');
    const finalScore = document.getElementById('score-id').innerText;
    const finalScore1 = parseInt(finalScore);
    console.log(finalScore1)
    setTextElementValueById('FinalFinalScore', finalScore1);

    // clear the ex-alphabet bg color
    const Exalphabet = document.getElementById('current-alphabet').innerText

    removeBackgroundColorById(Exalphabet)
}




