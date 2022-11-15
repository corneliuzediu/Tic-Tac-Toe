//***Variables***
let currentShape = 'cross';
let gameOver = false;


//***Arrays***
let fields = [];


//***Functions***
function fillShape(id) {
    if (!fields[id] && !gameOver) {
        if (currentShape == 'cross') {
            currentShape = 'circle';
            document.getElementById('player-1').classList.remove('player__active');
            document.getElementById('player-2').classList.add('player__active');
        } else {
            currentShape = 'cross';
            document.getElementById('player-2').classList.remove('player__active');
            document.getElementById('player-1').classList.add('player__active');
        }
        fields[id] = currentShape;
        console.log(fields);
        showSign();
        checkWinner();
    }
}


function showSign() {
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == 'circle') {
            document.getElementById('circle-' + i).classList.remove('d-none');
        }
        if (fields[i] == 'cross') {
            document.getElementById('cross-' + i).classList.remove('d-none');
        }
    }
}


//Searching for a winner
function checkWinner() {
    let winner;
    //First row
    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-1').style.transform = 'scale(1)';
    }
    //Second Row
    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3];
        document.getElementById('line-2').style.transform = 'scale(1)';
    }
    //Third Row
    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[6];
        document.getElementById('line-3').style.transform = 'scale(1)';
    }
    //First Column
    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-6').style.transform = 'rotate(90deg) scale(1)';
    }
    //Second Column
    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
        document.getElementById('line-5').style.transform = 'rotate(90deg) scale(1)';
    }
    //Third Column
    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-4').style.transform = 'rotate(90deg) scale(1)';
    }
    //First Diagonal
    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-7').style.transform = 'rotate(45deg) scale(1.3)';
    }
    //Second Diagonal
    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-8').style.transform = 'rotate(-45deg) scale(1.3)';
    }
    //Show is the winner
    if (winner) {
        gameOver = true;
        setTimeout(function () {
            winnerSign(winner);
        }, 1500)
    }
}

//Shows the sign of the "Winner"
function winnerSign(winner) {
    document.getElementById('winner_container').classList.remove('d-none');
    if (winner == 'circle') {
        document.getElementById('winner_sign').src = "./img/sign_o.png";
    } else {
        document.getElementById('winner_sign').src = "./img/sign_x.png";
    }
}

//Restart the Game
function restartGame() {
    fields = [];
    gameOver = false;
    resetSign();
    resetAnimation();
}

//Hide the signs from the previous game
function resetSign() {
    for (let i = 0; i < 9; i++) {
        document.getElementById('circle-' + i).classList.add('d-none');
        document.getElementById('cross-' + i).classList.add('d-none');
    }
}

//Hide the animation from the previous game
function resetAnimation() {
    document.getElementById('winner_container').classList.add('d-none');
    for (let i = 1; i < 9; i++) {
        document.getElementById('line-' + i).style.transform = 'scale(0)'
    }
}