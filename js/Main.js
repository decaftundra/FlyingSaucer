//G43389-Julien Beghain - B111

let vaisseau;
let nbOfShot;
let tabShot = [];
let tabEnemy = [];
let nbOfEnemy;
let theGame;

let gameOver = false;
let score = 0;

$(document).ready(function () {
    principale();
    $(document).keydown(function (e) {
        actionShip(e)
    });

    showBestScore();
    theGame = setInterval(game, 50);




});

//initialise le vaisseau du jeu
function principale() {

    vaisseau = new Vaisseau("images/vaisseau-ballon-petit.png");
    vaisseau.initHtml();
    nbOfShot = 0;
    nbOfEnemy = 0;
}

//récupère l'event des touches et gère l'action correspondante
function actionShip(event) {

    let key = event.which || event.keyCode;
    let displacement;
    console.log(key);

    if (key == 32) {

        vaisseau.fire();
        nbOfShot += 1;
        console.log("shot");

    } else {
        if (key == 38) {
            displacement = -10;
        } else if (key == 40) {
            displacement = 10;
        }

        vaisseau.move(displacement);
    }


}

//représente les instances à lancer à chaque période temps
function game() {

    createSoucoupe(randomIntFromInterval(1, 50));
    moveSoucoupe();
    moveShot();
    checkCollision();
    stopGame();


}

//crée les soucoupes si le chiffres 42 est passé en paramètre et qu'il n'y a pas plus de 10 soucoupes déjà affichées.
function createSoucoupe(trigger) {

    if (trigger === 42 && tabEnemy.length < 10) {
        let currentEnemy = new Soucoupe(950, randomIntFromInterval(0, 350));
        nbOfEnemy += 1;
        tabEnemy[tabEnemy.length] = currentEnemy;
        currentEnemy.initHtml();

    }

}

//déplace toutes les soucoupes
function moveSoucoupe() {
    let currentElement;
    for (let i = 0; i < tabEnemy.length; i++) {
        currentElement = tabEnemy[i];
        currentElement.move();
    }
}

//déplace tout les tirs
function moveShot() {
    let currentElement;
    for (let i = 0; i < tabShot.length; i++) {
        currentElement = tabShot[i];
        currentElement.move();
    }
}

//vérifie si chaque tir croise les coordonnées de chaque soucoupe et les supprime le cas échéant.
function checkCollision() {

    let currentShot;
    let currentEnemy;
    const ENEMY_HEIGHT = 36;
    const SHOT_WIDTH = 32;

    for (let i = 0; i < tabShot.length; i++) {
        currentShot = tabShot[i];

        for (let j = 0; j < tabEnemy.length; j++) {
            currentEnemy = tabEnemy[j];

            if ((currentShot.posX + SHOT_WIDTH >= currentEnemy.posX && currentShot.posX <= currentEnemy.posX) &&
                (currentShot.posY >= currentEnemy.posY &&
                    currentShot.posY <= currentEnemy.posY + ENEMY_HEIGHT)) {

                currentEnemy.remove();
                currentShot.remove();
                setScore(1);
                console.log(score);

            }
        }
    }
}

//arrête le jeu si gameOver = true.
function stopGame() {
    if (gameOver) {
        clearInterval(theGame);
        setHighScore();
    }
}

//permet de changer le score
function setScore(newScore) {
    score += newScore;
    $("#score").text(score);
}

//sauve le score dans le local storage si le score de la partie est plus élevé
function setHighScore() {
    let highscore = localStorage.getItem("highscore");

    if (highscore !== null) {
        if (score > highscore) {
            localStorage.setItem("highscore", score);
            promptHighScore();

        } else {
            alert("PERDU!");
            location.reload();
        }
    } else {
        localStorage.setItem("highscore", score);

    }
}

//permet de sauver le nom du joueur qui fait un bestScore
function promptHighScore() {
    let txt;
    let person = prompt("Please enter your name:");
    if (person == null || person == "") {
        txt = "John Doe";
        localStorage.setItem("player", txt);
    } else {
        localStorage.setItem("player", person);
    }
    location.reload();

}

//affiche le meilleur score sur la page.
function showBestScore() {
    if (localStorage.getItem("highscore") !== null && localStorage.getItem("player") !== null) {
        let name = localStorage.getItem("player");
        let theScore = localStorage.getItem("highscore");
        $("#bestScore").text("Best score: " + name + "......" + theScore);
    }
}
