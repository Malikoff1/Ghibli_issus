const characters = [
    { name: "When Marnie was There", image: "../images/scenewhenmarniewasthere.jpg" },
    { name: "Howls Moving Castel", image: "../images/scenehowl.jpg" },,
    { name: "From Up On Poppy Hill", image: "../images/scenefromuponpoppy hill.jpg" },
    { name: "When Marnie was There", image: "../images/scenewhenmarniewastheree.jpg" },
    { name: "The Wind Rises", image: "../images/scenewindrises.jpg" },
    { name: "The Wind Rises", image: "../images/scenewindrisess.jpg" },
    { name: "Howls Moving Castel", image: "../images/scenehowll.jpg" }
];
let currentCharacter = characters[Math.floor(Math.random() * characters.length)];

document.getElementById("characterImage").src = currentCharacter.image;

function checkGuess() {
    const userGuess = document.getElementById('guess').value.trim().toLowerCase();
    const feedback = document.getElementById('feedback');
    
    if (userGuess === currentCharacter.name.toLowerCase()) {
        feedback.textContent = 'Congratulations! You guessed it right!';
        feedback.style.color = 'green';
        setTimeout(() => {
            nextCharacter();
        }, 2000);  // Wait 2 seconds before showing the next character
    } else {
        feedback.textContent = 'Incorrect! Try again.';
        feedback.style.color = 'red';
    }
}

function nextCharacter() {
    currentCharacter = characters[Math.floor(Math.random() * characters.length)];
    document.getElementById("characterImage").src = currentCharacter.image;
    document.getElementById('guess').value = '';
    document.getElementById('feedback').textContent = '';
}