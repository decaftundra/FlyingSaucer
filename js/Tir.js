//G43389-Julien Beghain - B111

// Classe représentant un tir
class Tir {

    constructor(posX, posY) {
        this._posX = posX;
        this._posY = posY;
        this._img = "images/tir.png";
        this._id = nbOfShot + 1;
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

    get id() {
        return this._id;
    }

    get img() {
        return this._img;
    }

    get idTag() {
        return this._idTag;
    }

    //Méthode construisant un id unique pour un tir
    makeIdTag() {
        return "shot#" + this.id;
    }

    //initialise l'html nécessaire pour afficher un tir
    initHtml() {
        let idTag = this.idTag;
        let nameShot = $('<img>', {
            id: idTag
        });
        $("#game").append(nameShot);
        let currentShot = document.getElementById(this.idTag);
        currentShot.src = this.img;
        currentShot.style.position = "absolute";
        currentShot.style.top = this.posY + "px";
        currentShot.style.left = this.posX + "px";
    }

    //affiche un tir à sa position actuelle
    display() {
        let currentShot = document.getElementById(this.idTag);
        currentShot.style.top = this.posY + "px";
        currentShot.style.left = this.posX + "px";
    }

    //déplace le tir de 10 sur l'axe des X
    move() {

        if (this.posX < 960) {
            this.posX += 10;
            this.display();
        }else{
            this.remove();
        }
    }

    //retire le tir du jeu et du tableau des tirs.
    remove() {
        document.getElementById(this.idTag).style.visibility = "hidden";
        tabShot.splice(tabShot.findIndex(Tir => Tir._idTag === this.idTag), 1)


    }


}
