//G43389-Julien Beghain - B111
class Soucoupe {
    // Constructeur
    constructor(posX, posY) {

        this._posX = posX;
        this._posY = posY;
        this._img = "images/flyingSaucer-petit.png";
        this._id = nbOfEnemy + 1;
        this._idTag = this.makeIdTag();
    }


    get posY() {
        return this._posY;
    }

    set posY(value) {
        this._posY = value;
    }

    get posX() {
        return this._posX;
    }

    set posX(value) {
        this._posX = value;
    }

    get img() {
        return this._img;
    }

    get idTag() {
        return this._idTag;
    }

    get id() {
        return this._id;
    }

    //Méthode construisant un id unique pour une soucoupe
    makeIdTag() {
        return "enemy#" + this.id;
    }

    //initialise l'html nécessaire pour afficher une soucoupe
    initHtml() {
        let idTag = this.idTag;
        let nameEnemy = $('<img>', {
            id: idTag
        });
        $("#game").append(nameEnemy);
        let currentEnemy = document.getElementById(this.idTag);
        currentEnemy.src = this.img;
        currentEnemy.style.position = "absolute";
        currentEnemy.style.top = this.posY + "px";
        currentEnemy.style.left = this.posX + "px";
    }

    //affiche une soucoupe à sa position actuelle
    display() {
        let currentEnemy = document.getElementById(this.idTag);
        currentEnemy.style.top = this.posY + "px";
        currentEnemy.style.left = this.posX + "px";
    }

    //déplace la soucoupe de 10 sur l'axe des X
    move() {

        let distance = randomIntFromInterval(-5, 5);
        if (this.posX > 0) {
            this.posX -= 5;

            if (this.posY + distance > 5 && this.posY + distance < 370) {
                this.posY += distance;
            }


            this.display();
        } else {
            this.remove();
            setScore(-1);
            console.log(score);
        }
    }

    //retire la soucoupe du jeu et du tableau des soucoupes.
    remove() {
        document.getElementById(this.idTag).style.visibility = "hidden";
        tabEnemy.splice(tabEnemy.findIndex(Soucoupe => Soucoupe._idTag === this.idTag), 1);

    }
}
