// set backgroundColor by ID
function setBackgroundColor(elementId){
    document.getElementById(elementId).classList.add('bg-orange-400');

}

 
function continuegame() {

    // Generate a random alphabet
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabet = alphabetString.split('');
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    const alphabetNew = alphabet[index];
    // console.log(alphabetNew)
    document.getElementById('current-alphabet').innerText=alphabetNew;
    setBackgroundColor(alphabetNew);
}


// play function works
function play() {
    document.getElementById('home-section').classList.add('hidden');
    document.getElementById('playground').classList.remove('hidden');
    continuegame();


}