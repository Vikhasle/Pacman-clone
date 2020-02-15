//TODO: Bevegelsene til pacman er litt for raske, og det er vanskelig å ikke krasje i vegger
//TODO: Noen ganger fungerer ikke kollisjonen mellom spøkelsene og pacman, vet ikke hvorfor
document.addEventListener("keydown", keyPress);
const can = document.getElementById("labyrinth");
const ctx = can.getContext("2d");
//En tile i pacman er 25x25 pixler
const sqaure = 25;
//Svart bakgrunn
ctx.fillStyle = "black"
ctx.fillRect(0, 0, can.width, can.height);
//Et kart over hvor vegger er
const labyrinth = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    
]
//Et kart over hvor alle bakgrunnsspritene skal være 
const sprite_map = [
    ["ulb", "hb", "hb", "hb", "hb", "hb", "urb", "0", "ulb", "hb", "hb", "hb", "hb", "hb", "urb", "vb", 1, "vb", "ulb", "hb", "hb", "hb", "hb", "hb", "hb", "hb", "hb", "hb", "hb", "hb", "hb", "hb", "hb", "hb", "urb"],
    ["vb", "p", "p", "p", "p", "p", "dlb", "hb", "drb", "p", "p", "p", "p", "p", "vb", "vb", 1, "vb", "vb", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "vb"],
    ["vb", "p", "ulb", "hb", "hb", "p", "p", "p", "p", "p", "ulb", "hb", "urb", "p", "vb", "vb", 1, "vb", "vb", "p", "img", 0, 0, 0, 0, 0, 0, 0, "p", "ulb", "hb", "hb", "urb", "p", "vb"],
    ["vb", "p", "vb", "p", "p", "p", "vb", "p", "ulb", "hb", "hb", "hb", "drb", "p", "dlb", "drb", 1, "dlb", "drb", "p", 0, 0, 0, 0, 0, 0, 0, 0, "p", "dlb", "hb", "hb", "drb", "p", "vb"],
    ["vb", "p", "vb", "p", "ulb", "hb", "vb", "p", "vb", 0, "vb", "p", "p", "p", "p", "p", "p", "p", "p", "p", 0, 0, 0, 0, 0, 0, 0, 0, "pp", "p", "p", "p", "p", "p", "vb"],
    ["vb", "p", "vb", "p", "dlb", "hb", "drb", "p", "dlb", "hb", "drb", "p", "vb", "p", "ulb", "urb", "p", "ulb", "urb", "p", 0, 0, 0, 0, 0, 0, 0, 0, "p", "ulb", "hb", "hb", "urb", "p", "vb"],
    ["vb", "p", "vb", "p", "p", "p", "pp", "p", "p", "p", "p", "p", "vb", "p", "vb", "vb", "p", "vb", "vb", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "dlb", "hb", "hb", "drb", "p", "vb"],
    ["vb", "p", "vb", "ulb", "hb", "urb", "p", "ulb", "urb", "p", "ulb", "hb", "drb", "p", "vb", "vb", "p", "vb", "vb", "p", "ulb", "urb", "p", "ulb", "hb", "hb", "hb", "urb", "p", "p", "p", "p", "p", "p", "vb"],
    ["vb", "p", "dlb", "hb", "hb", "drb", "p", "vb", "vb", "p", "dlb", "hb", "urb", "p", "vb", "vb", "p", "vb", "vb", "p", "vb", "vb", "p", "vb", "ulb", "hb", "hb", "drb", "p", "ulb", "urb", "p", "ulb", "hb", "drb"],
    ["vb", "p", "p", "p", "p", "p", "p", "vb", "vb", "p", "p", "p", "vb", "p", "vb", "vb", "p", "vb", "vb", "p", "vb", "vb", "p", "vb", "vb", "p", "p", "p", "p", "vb", "vb", "p", "vb", 0, 0],
    ["vb", "p", "hb", "hb", "hb", "hb", "hb", "drb", "dlb", "hb", "urb", "p", "vb", "p", "dlb", "drb", "p", "dlb", "drb", "p", "vb", "drb", "p", "dlb", "drb", "p", "ulb", "urb", "p", "vb", "vb", "p", "dlb", "hb", "urb"],
    ["vb", "p", "p", "p", "p", "p", "p", "p", "p", "vb", "vb", "p", "vb", "p", "p", "p", "p", "p", "p", "p", "dlb", "urb", "p", "p", "p", "p", "vb", "vb", "p", "vb", "vb", "p", "p", "p", "vb"],
    ["dlb", "hb", "hb", "urb", "p", "ulb", "hb", "urb", "p", "vb", "vb", "p", "p", "p", "hb", "hb", 1, "hb", "hb", "p", "p", "vb", "p", "ulb", "hb", "hb", "drb", "vb", "p", "vb", "dlb", "hb", "urb", "p", "vb"],
    ["hb", "hb", "hb", "drb", "p", "dlb", "hb", "drb", "p", "dlb", "hb", "hb", "p", "vb", 1, 1, 1, 1, 1, "vb", "p", "vb", "p", "dlb", "hb", "hb", "hb", "drb", "p", "dlb", "hb", "hb", "drb", "p", "vb"],
    [1, 1, 1, 1, "p", "p", "p", "p", "p", "p", "p", "p", "p", 1, 1, 1, "f", 1, 1, 1, "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", 1],
    ["hb", "hb", "hb", "urb", "p", "ulb", "hb", "urb", "p", "ulb", "hb", "urb", "p", "vb", 1, 1, 1, 1, 1, "vb", "p", "ulb", "urb", "p", "ulb", "urb", "p", "ulb", "urb", "p", "ulb", "urb", "p", "ulb", "hb"],
    ["ulb", "hb", "hb", "drb", "p", "dlb", "hb", "drb", "p", "vb", "ulb", "drb", "p", "p", "hb", "hb", 1, "hb", "hb", "p", "p", "vb", "vb", "p", "dlb", "drb", "p", "vb", "vb", "p", "vb", "vb", "p", "vb", 0],
    ["vb", "p", "p", "p", "p", "p", "p", "p", "p", "vb", "dlb", "hb", "urb", "p", "p", "p", "p", "p", "p", "p", "ulb", "drb", "vb", "p", "p", "p", "p", "vb", "vb", "p", "vb", "vb", "p", "vb", 0],
    ["vb", "p", "ulb", "hb", "hb", "urb", "p", "vb", "p", "dlb", "hb", "hb", "drb", "p", "ulb", "urb", "p", "ulb", "urb", "p", "dlb", "hb", "drb", "p", "ulb", "urb", "p", "vb", "vb", "p", "vb", "vb", "p", "vb", 0],
    ["vb", "p", "dlb", "hb", "hb", "drb", "p", "vb", "p", "p", "p", "p", "p", "p", "vb", "vb", "p", "vb", "vb", "p", "p", "p", "p", "p", "dlb", "drb", "p", "dlb", "drb", "p", "vb", "vb", "p", "vb", 0],
    ["vb", "p", "p", "p", "p", "p", "p", "p", "p", "ulb", "hb", "hb", "urb", "p", "vb", "vb", "p", "vb", "vb", "p", "ulb", "hb", "urb", "p", "p", "pp", "p", "p", "p", "p", "vb", "vb", "p", "vb", 0],
    ["vb", "p", "ulb", "urb", "p", "ulb", "hb", "urb", "p", "vb", "ulb", "urb", "vb", "p", "vb", "vb", "p", "vb", "vb", "p", "vb", 0, "vb", "p", "ulb", "hb", "hb", "hb", "urb", "p", "vb", "vb", "p", "vb", 0],
    ["vb", "p", "dlb", "drb", "p", "dlb", "hb", "drb", "p", "vb", "vb", "vb", "vb", "p", "vb", "vb", "p", "vb", "vb", "p", "vb", "ulb", "drb", "p", "dlb", "hb", "hb", "hb", "drb", "p", "dlb", "drb", "p", "dlb", "urb"],
    ["vb", "p", "p", "p", "pp", "p", "p", "p", "p", "vb", "vb", "dlb", "drb", "p", "dlb", "drb", "p", "dlb", "drb", "p", "dlb", "hb", "urb", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "vb"],
    ["vb", "p", "ulb", "hb", "hb", "urb", "p", "vb", "p", "vb", "dlb", "urb", "p", "p", "p", "p", "p", "p", "p", "p", "p", "vb", "vb", "p", "ulb", "hb", "hb", "hb", "hb", "hb", "hb", "hb", "urb", "p", "vb"],
    ["vb", "p", "dlb", "hb", "hb", "drb", "p", "vb", "p", "dlb", "hb", "drb", "p", "ulb", "hb", "urb", 1, "ulb", "hb", "urb", "p", "dlb", "drb", "p", "dlb", "hb", "hb", "hb", "hb", "hb", "hb", "hb", "drb", "p", "vb"],
    ["vb", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "vb", 0, "vb", 1, "vb", 0, "vb", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "vb"],
    ["dlb", "hb", "hb", "hb", "hb", "hb", "hb", "hb", "hb", "hb", "hb", "hb", "hb", "drb", 0, "vb", 1, "vb", 0, "dlb", "hb", "hb", "hb", "hb", "hb", "hb", "hb", "hb", "hb", "hb", "hb", "hb", "hb", "hb", "drb"]
]

//Audio shit

const eating_sound= new Audio("sounds/eat.mp3");
eating_sound.playbackRate=2;
const start_sound = new Audio("sounds/start.mp3");
const death_sound = new Audio("sounds/death.mp3");

//Pacman klassen
class pac {
    constructor(width, height, source, x, y) {
        //Sprite info 
        this.image = new Image();
        this.image.src = source;
        //Størrelsen til pacman
        this.width = width;
        this.height = height;
        //kordinater
        this.x = x;
        this.y = y;
        //Animasjon counter for animasjonen til pacman
        this.count = 0;
    }
    //Metode for å tegne pacman
    update() {
        ctx.drawImage(this.image, this.count * 50, 0, 50, 50, this.x, this.y, sqaure, sqaure);
        //oppdatering av hvilke sprites som skal vises
        if (this.count == 2)
            this.count = 0;
        else
            this.count++;
    };
}
//Klasse for tegne generiske sprites
class sprite {
    constructor(width, height, source, x, y) {
        this.image = new Image();
        this.image.src = source;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
    }
    //Metode for å tegne
    update () {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    };
}

//Manhattan heuristic for distanse mellom to punkt
function heuristic(start, goal) {
    return Math.abs(start[0] - goal[0]) + Math.abs(start[1] - goal[1])
}


//Finner alle åpne steder for spøkelser
function find_open(x, y, prev) {
    var opne = [];
    //Ovenfor
    if (labyrinth[y + 1][x])
        if (y + 1 != prev[1] || x != prev[0])
            if (!(y + 1 == 25 && x == 16))
                opne.push([x, y + 1]);
    //Nedenfor
    if (labyrinth[y - 1][x])
        if (y - 1 != prev[1] || x != prev[0])
            if (!(y - 1 == 3 && x == 16))
                opne.push([x, y - 1]);
    //Høyre
    if (labyrinth[y][x + 1])
        if (y != prev[1] || x + 1 != prev[0])
            if (!(y == 14 && x + 1 == 34))
                opne.push([x + 1, y]);
    //Venstre
    if (labyrinth[y][x - 1])
        if (y != prev[1] || x - 1 != prev[0])
            if (!(y == 14 && x - 1 == 3))
                opne.push([x - 1, y]);

    return opne;
}

//Ghost AI klassen
class ghost {
    constructor(x, y, corner) {
        //kordinater
        this.x = x;
        this.y = y;
        //De forrige kordinatene til spøkelset
        this.prev = [x, y];
        //Oppførelse bools
        this.scared = false;
        this.scatter = true;
        //Hvilket hjørnet spøkelse går til
        this.corner = corner;
    }
    //Metoden bestemmer hvor spøkelset skal gå
    //goal er målet til spøkelset i kordinat form
    next(goal) {
        //Hvis scatter boolen er satt vil spøkelse finne korteste veien til hjørnet sitt
        if (this.scatter) {
            //vis spøkelset er redd pacman
            if (this.scared) {
                let mulig = find_open(this.x, this.y, this.prev);
                //Vis det er ingen muligheter gå tilbake
                let temp;
                if (mulig.length == 0)
                    temp = this.prev;
                else {
                    //Koden under finner det kordinatet med mest heuristic verdi til målet
                    temp = mulig[0];
                    for (let i = 1; i < mulig.length; i++) 
                        if (heuristic(mulig[i], this.corner) > heuristic(temp, goal)) 
                            temp = mulig[i];
                }
                this.prev = [this.x, this.y];
                this.x = temp[0];
                this.y = temp[1];
            } else {
                //Alle mulige steder spøkelset kan gå 
                let mulig = find_open(this.x, this.y, this.prev);
                let temp;
                if (mulig.length == 0)
                    temp = this.prev;
                else {
                    //Koden under finner det kordinatet med mest heuristic verdi til målet
                    temp = mulig[0];
                    for (let i = 1; i < mulig.length; i++) 
                        if (heuristic(mulig[i], this.corner) < heuristic(temp, this.corner)) 
                            temp = mulig[i];
                }
                //Sett kordinatene til spøkelset 
                this.prev = [this.x, this.y];
                this.x = temp[0];
                this.y = temp[1];
            }
        } else {
            //vis spøkelset er redd pacman
            if (this.scared) {
                let mulig = find_open(this.x, this.y, this.prev);
                if (mulig.length == 0)
                    let temp = this.prev;
                else {
                    //Koden under finner det kordinatet med minst heuristic verdi til målet
                    let temp = mulig[0];
                    for (let i = 1; i < mulig.length; i++) 
                        if (heuristic(mulig[i], this.corner) > heuristic(temp, goal)) 
                            temp = mulig[i];
                        
                }
                this.prev = [this.x, this.y];
                this.x = temp[0];
                this.y = temp[1];
            } else {
                //Alle mulige steder spøkelset kan gå 
                let mulig = find_open(this.x, this.y, this.prev);
                //Vis det ikke er noen steder å gå for spøkelset
                if (mulig.length == 0)
                    let temp = this.prev;
                else{
                    //Koden under finner det kordinatet med minst heuristic verdi til målet
                    let temp = mulig[0];
                    for (let i = 1; i < mulig.length; i++) 
                        if (heuristic(mulig[i], goal) < heuristic(temp, goal)) 
                            temp = mulig[i];
                }
                //sett kordinatetene til spøkelse
                this.prev = [this.x, this.y];
                this.x = temp[0];
                this.y = temp[1];
            }
        }
    }
}


//Sprites
const pacman = new pac(sqaure, sqaure, "./sprites/test.png", 25, 25);
//Nødvendige variabler
let vel_x = 0;
let vel_y = 0;
let score = 0;
let lives = 3;
let prev_vel_x = 0;
let prev_vel_y = 0;
//Ghosts
const white = new ghost(16, 14, [3, 4]);
const green = new ghost(14, 15, [33, 5]);
const grey = new ghost(15, 14, [1, 20]);
const evil = new ghost(17, 17, [33, 33]);
const white_sprite = new sprite(sqaure, sqaure, "sprites/white.png", white.x * sqaure, white.y * sqaure);
const green_sprite = new sprite(sqaure, sqaure, "sprites/green.png", green.x * sqaure, green.y * sqaure);
const grey_sprite = new sprite(sqaure, sqaure, "sprites/grey.png", grey.x * sqaure, grey.y * sqaure);
const evil_sprite = new sprite(sqaure, sqaure, "sprites/evil.png", evil.x * sqaure, evil.y * sqaure);

//Bakgrunn sprites
const pellet = new Image();
const power_pellet = new Image();
const vert_beam = new Image();
const hori_beam = new Image();
const upper_left_beam = new Image();
const upper_right_beam = new Image();
const lower_left_beam = new Image();
const lower_right_beam = new Image();
const logo = new Image();
const cherry = new Image();
pellet.src = "./sprites/pellet.png";
power_pellet.src = "sprites/power.png"
vert_beam.src = "./sprites/beam.png";
hori_beam.src = "./sprites/beam2.png";
lower_left_beam.src = "./sprites/dlb.png";
lower_right_beam.src = "./sprites/drb.png";
upper_right_beam.src = "./sprites/urb.png";
upper_left_beam.src = "./sprites/ulb.png";
logo.src = "./sprites/logo.png"
cherry.src = "./sprites/cherry.png"
//Tegner bakgrunn
function drawBack() {
    for (let iy = 0; iy < can.height / sqaure; iy++) {
        for (let ix = 0; ix < can.width / sqaure; ix++) {
            if (sprite_map[iy][ix] == "p")
                ctx.drawImage(pellet, ix * sqaure, iy * sqaure, sqaure, sqaure);
            else if (sprite_map[iy][ix] == "pp")
                ctx.drawImage(power_pellet, ix * sqaure, iy * sqaure, sqaure, sqaure);
            else if (sprite_map[iy][ix] == "vb")
                ctx.drawImage(vert_beam, ix * sqaure, iy * sqaure, sqaure, sqaure);
            else if (sprite_map[iy][ix] == "hb")
                ctx.drawImage(hori_beam, ix * sqaure, iy * sqaure, sqaure, sqaure);
            else if (sprite_map[iy][ix] == "urb")
                ctx.drawImage(upper_right_beam, ix * sqaure, iy * sqaure, sqaure, sqaure);
            else if (sprite_map[iy][ix] == "drb")
                ctx.drawImage(lower_right_beam, ix * sqaure, iy * sqaure, sqaure, sqaure);
            else if (sprite_map[iy][ix] == "ulb")
                ctx.drawImage(upper_left_beam, ix * sqaure, iy * sqaure, sqaure, sqaure);
            else if (sprite_map[iy][ix] == "dlb")
                ctx.drawImage(lower_left_beam, ix * sqaure, iy * sqaure, sqaure, sqaure);
            else if (sprite_map[iy][ix] == "img")
                ctx.drawImage(logo, ix * sqaure, iy * sqaure, sqaure * 8, sqaure * 4);
            else if (sprite_map[iy][ix] == "f")
                ctx.drawImage(cherry, ix * sqaure, iy * sqaure, sqaure, sqaure);
        }
    }
}

//Tar vekk powerup
function removePower() {
    white.scared = false;
    grey.scared = false;
    green.scared = false;
    evil.scared = false;
    white_sprite.image.src="sprites/white.png";
    grey_sprite.image.src="sprites/grey.png";
    green_sprite.image.src="sprites/green.png";
    evil_sprite.image.src="sprites/evil.png";
}
//Setter powerup
function Power() { 
    white.scared = true;
    grey.scared = true;
    green.scared = true;
    evil.scared = true;
    white_sprite.image.src="sprites/scared.png";
    grey_sprite.image.src="sprites/scared.png";
    green_sprite.image.src="sprites/scared.png";
    evil_sprite.image.src="sprites/scared.png";
    setTimeout(removePower,15000);
}
/*
Fordeler med å bruke cookies:
    Lett
    Slipper å bruke server
    Fungerer på alle nettlesere
Ulemper med cookies:
    Kan lett jukse til en highscore
    Cookies blir slettet etter en stund
*/
//Setter inn highscores som en cookie 
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//Skriver Highscorene i cookien til html 
function setHighscores() {
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c=="null=10" || c=="d=1720") continue;
        else document.getElementById("scores").innerHTML+= c.substring(0,c.length)+"<br>";
    }
}
//Sjekker om det er gameover
function GameOver() {
    //Om du ikke har flere liv igjen
    if (lives == 0) {
        let username=prompt("Username:");
        setCookie(username,score,100);
        location.reload();
    }
    //Sjekker om vi er i kontakt med spøkelser
    if (pacman.x == white_sprite.x && pacman.y == white_sprite.y || pacman.x==white.prev[0]*sqaure && pacman.y==white.prev[1]*sqaure) {
        if (white.scared){
            white.x=1500000;
            score+=500
        }else{
            death_sound.play();
            lives--;
            incrementScore();
            clearInterval(main);
            reset();
            return
        }
        
    }
    if (pacman.x == green_sprite.x && pacman.y == green_sprite.y|| pacman.x==green.prev[0]*sqaure && pacman.y==green.prev[1]*sqaure) {
        if (green.scared){
            green.x=1500000;
            score+=500
        }else{
            death_sound.play();
            lives--;
            incrementScore();
            clearInterval(main);
            reset();
            return
        }
        
    }
    if (pacman.x == grey_sprite.x && pacman.y == grey_sprite.y || pacman.x==grey.prev[0]*sqaure && pacman.y==grey.prev[1]*sqaure) {
        if (grey.scared){
            grey.x=1500000;
            score+=500;
        }else{
            death_sound.play();
            lives--;
            incrementScore();
            clearInterval(main);
            reset();
            return
        }
    }
    if (pacman.x == evil_sprite.x && pacman.y == evil_sprite.y|| pacman.x==evil.prev[0]*sqaure && evil.y==white.prev[1]*sqaure) {
        if (evil.scared){
            evil.x=1500000;
            score+=500;
        }else{
            death_sound.play();
            lives--;
            incrementScore();
            clearInterval(main);
            reset();
            return
        }
    }
}

//sjekker for vegger
function check_movement(object) {
    let x,y;
    if(vel_x>0) x = Math.round(object.x / sqaure);
    else x = Math.floor(object.x / sqaure);
    if (vel_y>0) y = Math.round(object.y / sqaure);
    else y = Math.floor(object.y / sqaure);
    if (y == 14 && x == 0) {
        object.x = 35 * sqaure;
    }
    if (y == 14 && x == 35) {
        object.x = 0;
    }
    if (y == 0 && x == 16) {
        object.y = 28 * sqaure;
    }
    if (y == 28 && x == 16) {
        object.y = 0;
    }
    if (labyrinth[y][x] == 0)
        return false;
    return true;
}
//Oppdatering av Score
function incrementScore() {
    if (sprite_map[pacman.y / sqaure][pacman.x / sqaure] == "p") {
        eating_sound.play();
        sprite_map[pacman.y / sqaure][pacman.x / sqaure] = 1
        score += 10;
    }else if (sprite_map[pacman.y / sqaure][pacman.x / sqaure] == "f") {
        eating_sound.play();
        lives++;
        score += 500;
        sprite_map[pacman.y / sqaure][pacman.x / sqaure] = 1
    } else if (sprite_map[pacman.y / sqaure][pacman.x / sqaure] == "pp") {
        eating_sound.play();
        Power();
        sprite_map[pacman.y / sqaure][pacman.x / sqaure] = 1
    }
    document.getElementById("lives").innerHTML = "";
    for (var i = 0; i < lives; i++) {
        document.getElementById("lives").innerHTML += "<img src='sprites/pacman.png'>";
    }
    document.getElementById("score").innerHTML = score;
}

//Start funksjon
function start() {
    //TODO: Make a functioning start and pause screen
    drawBack();
    setInterval(main, 1000 / 10);
    start_sound.play();
    setHighscores();
}

//Main function
function main() {
    drawBack();
    ctx.clearRect(pacman.x, pacman.y, sqaure, sqaure);
    ctx.fillRect(pacman.x, pacman.y, sqaure, sqaure);
    pacman.x += vel_x * sqaure;
    pacman.y += vel_y * sqaure;
    //Hvis vi krasjer inn i en vegg
    if (!check_movement(pacman)) {
        pacman.x -= vel_x * sqaure;
        pacman.y -= vel_y * sqaure;
    };
    
    //Finn neste posisjon for spøkelsene
    white.next([Math.floor(pacman.x / sqaure) + 4 * vel_x, Math.floor(pacman.y / sqaure) + 8 * vel_y]);
    green.next([Math.floor(Math.random() * can.width / sqaure), Math.floor(Math.random() * can.height / sqaure)]);
    grey.next([Math.floor(pacman.x / sqaure) - 8 * vel_x, Math.floor(pacman.y / sqaure) - 4 * vel_y]);
    evil.next([Math.floor(pacman.x / sqaure), Math.floor(pacman.y / sqaure)]);
    //Hvisk vekk de gamle spritesene
    ctx.clearRect(white_sprite.x, white_sprite.y, sqaure, sqaure);
    ctx.clearRect(grey_sprite.x, grey_sprite.y, sqaure, sqaure);
    ctx.clearRect(green_sprite.x, green_sprite.y, sqaure, sqaure);
    ctx.clearRect(evil_sprite.x, evil_sprite.y, sqaure, sqaure);
    ctx.fillRect(white_sprite.x, white_sprite.y, sqaure, sqaure);
    ctx.fillRect(grey_sprite.x, grey_sprite.y, sqaure, sqaure);
    ctx.fillRect(green_sprite.x, green_sprite.y, sqaure, sqaure);
    ctx.fillRect(evil_sprite.x, evil_sprite.y, sqaure, sqaure);
    //Oppdater sprites
    white_sprite.x = white.x * sqaure;
    white_sprite.y = white.y * sqaure;
    green_sprite.x = green.x * sqaure;
    green_sprite.y = green.y * sqaure;
    grey_sprite.x = grey.x * sqaure;
    grey_sprite.y = grey.y * sqaure;
    evil_sprite.x = evil.x * sqaure;
    evil_sprite.y = evil.y * sqaure;
    pacman.update()
    white_sprite.update();
    green_sprite.update();
    grey_sprite.update();
    evil_sprite.update();
    incrementScore();
    GameOver();
    //Start chasing
    if (score > 500) {
        white.scatter = false;
        green.scatter = false;
        grey.scatter = false;
        evil.scatter = false
    }
}

//Will reset the game to starting conditions, without having to refresh
function reset() {
    ctx.clearRect(pacman.x, pacman.y, sqaure, sqaure);
    ctx.fillRect(pacman.x, pacman.y, sqaure, sqaure);
    ctx.clearRect(white_sprite.x, white_sprite.y, sqaure, sqaure);
    ctx.clearRect(grey_sprite.x, grey_sprite.y, sqaure, sqaure);
    ctx.clearRect(green_sprite.x, green_sprite.y, sqaure, sqaure);
    ctx.clearRect(evil_sprite.x, evil_sprite.y, sqaure, sqaure);
    ctx.fillRect(white_sprite.x, white_sprite.y, sqaure, sqaure);
    ctx.fillRect(grey_sprite.x, grey_sprite.y, sqaure, sqaure);
    ctx.fillRect(green_sprite.x, green_sprite.y, sqaure, sqaure);
    ctx.fillRect(evil_sprite.x, evil_sprite.y, sqaure, sqaure);
    pacman.x = 25;
    pacman.y = 25;
    white.x = 16;
    white.y = 14;
    green.x = 14;
    green.y = 15;
    grey.x = 15;
    grey.y = 14;
    evil.x = 17;
    evil.y = 17;
    vel_x = 0;
    vel_y = 0;
    white_sprite.x = white.x * sqaure;
    white_sprite.y = white.y * sqaure;
    green_sprite.x = green.x * sqaure;
    green_sprite.y = green.y * sqaure;
    grey_sprite.x = grey.x * sqaure;
    grey_sprite.y = grey.y * sqaure;
    evil_sprite.x = evil.x * sqaure;
    evil_sprite.y = evil.y * sqaure;
}

//Keyboard event handler
function keyPress(evt) {
    switch (evt.keyCode) {
        case 37:
            pacman.image.src="sprites/test2.png";
            prev_vel_x = vel_x;
            prev_vel_y = vel_y;
            vel_y = 0;
            vel_x = -1;
            break;
        case 38:
            pacman.image.src="sprites/test3.png";
            prev_vel_x = vel_x;
            prev_vel_y = vel_y;
            vel_y = -1;
            vel_x = 0;
            break;
        case 39:
            pacman.image.src="sprites/test.png";
            prev_vel_x = vel_x;
            prev_vel_y = vel_y;
            vel_x = 1;
            vel_y = 0;
            break;
        case 40:
            pacman.image.src="sprites/test1.png";
            prev_vel_x = vel_x;
            prev_vel_y = vel_y;
            vel_y = 1;
            vel_x = 0;
            break;
        case 87:
            pacman.image.src="sprites/test3.png";
            prev_vel_x = vel_x;
            prev_vel_y = vel_y;
            vel_y = -1;
            vel_x = 0;
            break;
        case 65:
            pacman.image.src="sprites/test2.png";
            prev_vel_x = vel_x;
            prev_vel_y = vel_y;
            vel_x = -1;
            vel_y = 0;
            break;
        case 83:
            pacman.image.src="sprites/test1.png";
            prev_vel_x = vel_x;
            prev_vel_y = vel_y;
            vel_y = 1;
            vel_x = 0;
            break;
        case 68:
            pacman.image.src="sprites/test.png";
            prev_vel_x = vel_x;
            prev_vel_y = vel_y;
            vel_x = 1;
            vel_y = 0;
            break;
    }
}
//Start pacman
window.onload=function(){
    start();
}