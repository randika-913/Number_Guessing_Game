let randomNum = Math.floor(Math.random() * 10) + 1;
let attemptsLeft = 3;

function checkGuess() {

    let userGuess = parseInt(document.getElementById("txtUserInput").value);
    let result = document.getElementById("message");

    if (randomNum == userGuess) {

        Swal.fire({
            title: "Welldone Soldier",
            text: "You guessed the number correctly !!",
            imageUrl: "https://media.tenor.com/iBLzg9X4HbQAAAAM/clapping-leonardo-dicaprio.gif",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image"
        });

    } else {

        attemptsLeft--;

        if (attemptsLeft === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Game Over! ❌',
                text: `You ran out of attempts! The correct number was ${randomNum}.`
            });

            resetRandomNum(); 
        }else{

        if (randomNum > userGuess) {

            Swal.fire({
                title: "අයියෝ ඔයිට වඩා වැඩියි !!",
                text: `Attempts Left: ${attemptsLeft}`,
                imageUrl: "https://media.tenor.com/rVITf4xkgrkAAAAM/steve-carell-no.gif",
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: "Custom image"
            });
        }else if(randomNum < userGuess) {
            Swal.fire({
                title: "අයියෝ ඔයිට වඩා අඩුයි !!",
                text: `Attempts Left: ${attemptsLeft}`,
                imageUrl: "https://media.tenor.com/rVITf4xkgrkAAAAM/steve-carell-no.gif",
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: "Custom image"
            });
        }
        }

        txtUserInput.value = "";
    }

}

function resetRandomNum() {
    txtUserInput.value = "";
    randomNum = Math.floor(Math.random() * 10) + 1;
    attemptsLeft = 3;
}