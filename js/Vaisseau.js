//G43389-Julien Beghain - B111

// Classe représentant le vaisseau
class Vaisseau {

    // Constructeur
    constructor(img) {

        this._posX = 100;
        this._posY = 200;

        this.img = img;
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

    // Affiche le vaisseau à sa position actuelle
    display() {
        var vaisseau = document.getElementById('vaisseau');
        vaisseau.style.top = this.posY + "px";
        vaisseau.style.left = this.posX + "px";
    }

    // Initialise le vaisseau dans le html
    initHtml() {
        var vaisseau = document.getElementById('vaisseau');
        vaisseau.src = this.img;
        vaisseau.style.position = "absolute";
        vaisseau.style.top = this.posY + "px";
        vaisseau.style.left = this.posX + "px";

    }

    //déplace le vaisseau et l'affiche
    move(distance) {

        if (this.posY + distance < 360 && this.posY + distance > 10) {
            this.posY = this.posY + distance;
            this.display();
        }
    }

    //initialise un tir, le place dans un tableau
    fire(){
        let currentShot = new Tir(this.posX+48, this.posY+13);
        tabShot[tabShot.length] = currentShot;
        currentShot.initHtml();
        return currentShot;
    }


}
