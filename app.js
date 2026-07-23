let randomNum = Math.floor(Math.random() * 10) + 1;

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

        if (randomNum > userGuess) {

            Swal.fire({
                title: "අයියෝ ඔයිට වඩා වැඩියි !!",
                text: "You guessed the number incorrectly !!",
                imageUrl: "https://media.tenor.com/rVITf4xkgrkAAAAM/steve-carell-no.gif",
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: "Custom image"
            });
        }else if(randomNum < userGuess) {
            Swal.fire({
                title: "අයියෝ ඔයිට වඩා අඩුයි !!",
                text: "You guessed the number incorrectly !!",
                imageUrl: "https://media.tenor.com/rVITf4xkgrkAAAAM/steve-carell-no.gif",
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: "Custom image"
            });
        }


    }

}