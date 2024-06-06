const characters = [
    { name: "Totoro", image: "../images/totoro.jpg" },
    { name: "Chihiro", image: "../images/chihiro.jpg" },
    { name: "Howl", image: "../images/howl.jpg" },
    { name: "Kiki", image: "../images/kikipfp.jpg" },
    { name: "San", image: "../images/san.jpg" },
    { name: "Marnie", image: "../images/marnie.jpg" },
    { name: "Mononoke", image: "../images/mononoke.jpg" },
    { name: "Sho", image: "../images/sho.jpg" },
    { name: "Totoro", image: "../images/totoro.jpg" },
    { name: "Nausicaa", image: "../images/naussicska.jpg" }
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