const playButton = document.getElementById("playButton");

playButton.addEventListener("click", () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1; // Generates a random number between 1 and 6
    if (randomNumber === 1) {
        alert("Congratulations! You've won!");
    } else {
        alert("Better luck next time!");
    }
});
