document.addEventListener("keydown", keyPress);
var can = document.getElementById("labyrinth");
var ctx = can.getContext("2d");
var sqaure = 25;
ctx.fillStyle = "black"
ctx.fillRect(0, 0, can.width, can.height);
var labyrinth = [
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
var sprite_map = [
    ["ulb", "hb", "hb", "hb", "hb", "hb", "urb", "0", "ulb", "hb", "hb", "hb", "hb", "hb", "urb", "vb", 1, "vb", "ulb", "hb", "hb", "hb", "hb", "hb", "hb", "hb", "hb", "hb", "hb", "hb", "hb", "hb", "hb", "hb", "urb"],
    ["vb", "p", "p", "p", "p", "p", "dlb", "hb", "drb", "p", "p", "p", "p", "p", "vb", "vb", 1, "vb", "vb", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "vb"],
    ["vb", "p", "ulb", "hb", "hb", "p", "p", "p", "p", "p", "ulb", "hb", "urb", "p", "vb", "vb", 1, "vb", "vb", "p", "img", 0, 0, 0, 0, 0, 0, 0, "p", "ulb", "hb", "hb", "urb", "p", "vb"],
    ["vb", "p", "vb", "p", "p", "p", "vb", "p", "ulb", "hb", "hb", "hb", "drb", "p", "dlb", "drb", 1, "dlb", "drb", "p", 0, 0, 0, 0, 0, 0, 0, 0, "p", "dlb", "hb", "hb", "drb", "p", "vb"],
    ["vb", "p", "vb", "p", "ulb", "hb", "vb", "p", "vb", 0, "vb", "p", "p", "p", "p", "p", "p", "p", "p", "p", 0, 0, 0, 0, 0, 0, 0, 0, "p", "p", "p", "p", "p", "p", "vb"],
    ["vb", "p", "vb", "p", "dlb", "hb", "drb", "p", "dlb", "hb", "drb", "p", "vb", "p", "ulb", "urb", "p", "ulb", "urb", "p", 0, 0, 0, 0, 0, 0, 0, 0, "p", "ulb", "hb", "hb", "urb", "p", "vb"],
    ["vb", "p", "vb", "p", "p", "p", "p", "p", "p", "p", "p", "p", "vb", "p", "vb", "vb", "p", "vb", "vb", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "dlb", "hb", "hb", "drb", "p", "vb"],
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
    ["vb", "p", "p", "p", "p", "p", "p", "p", "p", "ulb", "hb", "hb", "urb", "p", "vb", "vb", "p", "vb", "vb", "p", "ulb", "hb", "urb", "p", "p", "p", "p", "p", "p", "p", "vb", "vb", "p", "vb", 0],
    ["vb", "p", "ulb", "urb", "p", "ulb", "hb", "urb", "p", "vb", "ulb", "urb", "vb", "p", "vb", "vb", "p", "vb", "vb", "p", "vb", 0, "vb", "p", "ulb", "hb", "hb", "hb", "urb", "p", "vb", "vb", "p", "vb", 0],
    ["vb", "p", "dlb", "drb", "p", "dlb", "hb", "drb", "p", "vb", "vb", "vb", "vb", "p", "vb", "vb", "p", "vb", "vb", "p", "vb", "ulb", "drb", "p", "dlb", "hb", "hb", "hb", "drb", "p", "dlb", "drb", "p", "dlb", "urb"],
    ["vb", "p", "p", "p", "p", "p", "p", "p", "p", "vb", "vb", "dlb", "drb", "p", "dlb", "drb", "p", "dlb", "drb", "p", "dlb", "hb", "urb", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "vb"],
    ["vb", "p", "ulb", "hb", "hb", "urb", "p", "vb", "p", "vb", "dlb", "urb", "p", "p", "p", "p", "p", "p", "p", "p", "p", "vb", "vb", "p", "ulb", "hb", "hb", "hb", "hb", "hb", "hb", "hb", "urb", "p", "vb"],
    ["vb", "p", "dlb", "hb", "hb", "drb", "p", "vb", "p", "dlb", "hb", "drb", "p", "ulb", "hb", "urb", 1, "ulb", "hb", "urb", "p", "dlb", "drb", "p", "dlb", "hb", "hb", "hb", "hb", "hb", "hb", "hb", "drb", "p", "vb"],
    ["vb", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "vb", 0, "vb", 1, "vb", 0, "vb", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "vb"],
    ["dlb", "hb", "hb", "hb", "hb", "hb", "hb", "hb", "hb", "hb", "hb", "hb", "hb", "drb", 0, "vb", 1, "vb", 0, "dlb", "hb", "hb", "hb", "hb", "hb", "hb", "hb", "hb", "hb", "hb", "hb", "hb", "hb", "hb", "drb"]
]

//Klasse for tegne sprites
class sprite {
    constructor(width, height, source, x, y) {
        this.image = new Image();
        this.image.src = source;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.update = function () {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        };
    }
}

/*finner minste avstand*/
function heuristic(start, goal) {
    return Math.abs(start[0] - goal[0]) + Math.abs(start[1] - goal[1])
}

function ArrayInArray(array, array2) {
    for (var i = 0; i < array.length; i++) {
        if (array[i][0] == array2[0] && array[i][1] == array2[1]) {
            return true;
        }
    }
}
//Finner alle åpne steder for spøkelser
function find_open(x, y, prev) {
    var opne = [];

    if (labyrinth[y + 1][x])
        if (y + 1 != prev[1] || x != prev[0])
            if (!(y + 1 == 25 && x == 16))
                opne.push([x, y + 1]);

    if (labyrinth[y - 1][x])
        if (y - 1 != prev[1] || x != prev[0])
            if (!(y - 1 == 3 && x == 16))
                opne.push([x, y - 1]);

    if (labyrinth[y][x + 1])
        if (y != prev[1] || x + 1 != prev[0])
            if (!(y == 14 && x + 1 == 34))
                opne.push([x + 1, y]);

    if (labyrinth[y][x - 1])
        if (y != prev[1] || x - 1 != prev[0])
            if (!(y == 14 && x - 1 == 3))
                opne.push([x - 1, y]);

    return opne;
}

//Ghost AI
class ghost {
    constructor(x, y, corner) {
        this.x = x;
        this.y = y;
        this.prev = [x, y];
        this.scatter = true;
        this.corner = corner;
        this.next = function () {
            if (this.scatter) {
                var mulig = find_open(this.x, this.y, this.prev);
                if (mulig.length == 0)
                    temp = this.prev;
                else {
                    var temp = mulig[0];
                    for (var i = 1; i < mulig.length; i++) {
                        if (heuristic(mulig[i], this.corner) < heuristic(temp, this.corner)) {
                            temp = mulig[i];
                        }
                    }
                }
                this.prev = [this.x, this.y];
                this.x = temp[0];
                this.y = temp[1];
            } else {
                var mulig = find_open(this.x, this.y, this.prev);
                var temp = mulig[0];
                for (var i = 1; i < mulig.length; i++) {
                    if (heuristic(mulig[i], [pacman.x / sqaure, pacman.y / sqaure]) < heuristic(temp, [pacman.x / sqaure, pacman.y / sqaure])) {
                        temp = mulig[i];
                    }
                }
                this.prev = [this.x, this.y];
                this.x = temp[0];
                this.y = temp[1];
            }
        }
    }
}


//Sprites
var pacman = new sprite(sqaure, sqaure, "./sprites/pacman.png", 25, 25);
//Nødvendige variabler
var vel_x = 0;
var vel_y = 0;
var score = 0;
var lives = 3;

//Ghosts
var white = new ghost(16, 14, [3, 4]);
var green = new ghost(14, 15, [33, 5]);
var grey = new ghost(15, 14, [1, 20]);
var evil = new ghost(17, 17, [33, 33]);
var white_sprite = new sprite(sqaure, sqaure, "sprites/white.png", white.x * sqaure, white.y * sqaure);
var green_sprite = new sprite(sqaure, sqaure, "sprites/green.png", green.x * sqaure, green.y * sqaure);
var grey_sprite = new sprite(sqaure, sqaure, "sprites/grey.png", grey.x * sqaure, grey.y * sqaure);
var evil_sprite = new sprite(sqaure, sqaure, "sprites/evil.png", evil.x * sqaure, evil.y * sqaure);
/*
 Call astar each frame
 update sprite
*/
//Bakgrunn sprites
var pellet = new Image();
var vert_beam = new Image();
var hori_beam = new Image();
var upper_left_beam = new Image();
var upper_right_beam = new Image();
var lower_left_beam = new Image();
var lower_right_beam = new Image();
var logo = new Image();
var cherry = new Image();

pellet.src = "./sprites/pellet.png";
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
    for (var iy = 0; iy < can.height / sqaure; iy++) {
        for (var ix = 0; ix < can.width / sqaure; ix++) {
            if (sprite_map[iy][ix] == "p")
                ctx.drawImage(pellet, ix * sqaure, iy * sqaure, sqaure, sqaure);
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
    /*
    for (var iy = 0; iy < can.height / sqaure; iy++) {
        for (var ix = 0; ix < can.width / sqaure; ix++) {
            if (labyrinth[iy][ix] == 0)
                ctx.fillRect(ix * sqaure, iy * sqaure, sqaure, sqaure);
        }
    }*/
}

function check_movement(object) {
    var x = Math.floor(object.x / sqaure);
    var y = Math.floor(object.y / sqaure);
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
function incrementScore(eat) {
    if (eat == "p") {
        score += 100;
    } else if (eat == "g") {
        score += 1000;
    } else if (eat == "f") {
        score += 500;
    } else {
        score++;
    }
    document.getElementById("score").innerHTML = score;
}


function Rotate(angle) {
    ctx.translate(pacman.x, pacman.y);
    ctx.rotate(angle);
    ctx.translate(-pacman.x, -pacman.y);
    ctx.drawImage(pacman, pacman.x, pacman.y, sqaure, sqaure);
}

//Start funksjon
function start() {
    //TODO: Make a functioning start and pause screen
    drawBack();
    setInterval(main, 1000 / 8);
}
start();
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
    pacman.update();
    //TODO fiks score oppdatering
    /*
    if(pacman.x==pellet.x&&pacman.y==pellet.y)
        increment.score
        remove pellet from pellet array 
        clearrect(pellet.x,pellet.y)
    */
    //Finn neste posisjon for spøkelsene
    white.next([Math.floor(pacman.x / sqaure) + 4 * vel_x, Math.floor(pacman.y / sqaure) + 8 * vel_y]);
    green.next([Math.floor(Math.random() * can.width / sqaure), Math.floor(Math.random() * can.height / sqaure)]);
    grey.next([Math.floor(pacman.x / sqaure) - 8 * vel_x, Math.floor(pacman.y / sqaure) - 4 * vel_y]);
    evil.next([Math.floor(pacman.x / sqaure), Math.floor(pacman.y / sqaure)]);
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
    white_sprite.update();
    green_sprite.update();
    grey_sprite.update();
    evil_sprite.update();
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

}

//Keyboard 
function keyPress(evt) {
    switch (evt.keyCode) {
        case 37:
            vel_y = 0;
            vel_x = -1;
            pacman.image.src = "./sprites/pacman2.png";
            break;
        case 38:
            vel_y = -1;
            vel_x = 0;
            pacman.image.src = "./sprites/pacman1.png";
            break;
        case 39:
            vel_x = 1;
            vel_y = 0;
            pacman.image.src = "./sprites/pacman.png";
            break;
        case 40:
            vel_y = 1;
            vel_x = 0;
            pacman.image.src = "./sprites/pacman3.png";
            break;
        case 87:
            vel_y = -1;
            vel_x = 0;
            pacman.image.src = "./sprites/pacman1.png";
            break;
        case 65:
            vel_x = -1;
            vel_y = 0;
            pacman.image.src = "./sprites/pacman2.png";
            break;
        case 83:
            vel_y = 1;
            vel_x = 0;
            pacman.image.src = "./sprites/pacman3.png";
            break;
        case 68:
            vel_x = 1;
            vel_y = 0;
            pacman.image.src = "./sprites/pacman.png";
            break;
    }
}