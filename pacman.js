document.addEventListener("keydown", keyPress);
var can = document.getElementById("labyrinth");
var ctx = can.getContext("2d");
var sqaure = 25;

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
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]
/*
    find alle åpne
    for alle åpne:
        find den minste avstanden:
    return minst
*/
function heuristic(start, goal) {
    return Math.abs(start[0] - goal[0]) + Math.abs(start[1] - goal[1])
}

function find_open(x, y, prev) {
    var opne = [];
    if (labyrinth[y + 1][x])
        if (y + 1 != prev[1] || x != prev[0])
            opne.push([x, y + 1]);
    if (labyrinth[y - 1][x])
        if (y - 1 != prev[1] || x != prev[0])
            opne.push([x, y - 1]);
    if (labyrinth[y][x + 1])
        if (y != prev[1] || x + 1 != prev[0])
            opne.push([x + 1, y]);
    if (labyrinth[y][x - 1])
        if (y != prev[1] || x - 1 != prev[0])
            opne.push([x - 1, y]);
    return opne;
}

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

class pellet {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.image = new Image();
        this.image.src = "./sprites/pellet.png";

        ctx.drawImage(this.image, this.x, this.y, 20, 20);
    }
}


pellet = new sprite(sqaure, sqaure, "./sprites/pellet.png", 100, 75)
pellet.update()
var graph = new Graph(labyrinth);
class ghost {
    constructor(x, y, corner) {
        this.x = x;
        this.y = y;
        this.prev = [x, y];
        this.scatter = true;
        this.corner = corner;
        this.warp = false;
        this.warpx = function (vel) {
            this.x += vel;
        }
        this.warpy = function (vel) {
            this.y += vel;
        }
        this.next = function () {
            if (this.y == 14 && this.x == 0) {
                this.warpx(1)
            }
            if (this.y == 14 && this.x == 35) {
                this.warpx(-1)
            }
            if (this.x == 0 && this.y == 16) {
                this.warp = true;
            }
            if (this.x == 28 && this.y == 16) {
                this.warp = true
            }
            if (this.scatter) {
                var mulig = find_open(this.x, this.y, this.prev);
                var temp = mulig[0];
                for (var i = 1; i < mulig.length; i++) {
                    if (heuristic(mulig[i], this.corner) < heuristic(temp, this.corner)) {
                        temp = mulig[i];
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
        /*
                this.next = function (goal) {
                    var start = graph.grid[this.x][this.y];
                    var end = graph.grid[goal[0]][goal[1]];
                    var path = astar.search(graph, start, end)[0];
                    this.x = path.x;
                    this.y = path.y;
                }*/
    }
}

function drawBack() {
    for (var iy = 0; iy < can.height / sqaure; iy++) {
        for (var ix = 0; ix < can.width / sqaure; ix++) {
            if (labyrinth[iy][ix] == 0)
                ctx.fillRect(ix * sqaure, iy * sqaure, sqaure, sqaure);
        }
    }
}

drawBack();

var background = new sprite(can.width, can.height, "./board.png", 0, 0);
var pacman = new sprite(sqaure, sqaure, "./sprites/pacman.png", 50, 25);
var vel_x = 0;
var vel_y = 0;
var score = 0;
var lives = 3;

var blinky = new ghost(16, 14, [3, 4]);
var blinky2 = new ghost(14, 15, [33, 5]);
var blinky3 = new ghost(15, 14, [1, 26]);
var blinky4 = new ghost(17, 17, [33, 33]);
var blinky_sprite = new sprite(sqaure, sqaure, "sprites/blinky.png", blinky.x * sqaure, blinky.y * sqaure);
var blinky2_sprite = new sprite(sqaure, sqaure, "sprites/blinky.png", blinky2.x * sqaure, blinky2.y * sqaure);
var blinky3_sprite = new sprite(sqaure, sqaure, "sprites/blinky.png", blinky3.x * sqaure, blinky3.y * sqaure);
var blinky4_sprite = new sprite(sqaure, sqaure, "sprites/blinky.png", blinky4.x * sqaure, blinky4.y * sqaure);
/*
 Call astar each frame
 update sprite
*/
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

    return true
}

function incrementScore(eat) {
    if (eat == "p") {
        score += 100;
    } else if (eat == "g") {
        score += 1000;
    } else if (eat == "f") {
        score += 500;
    }
}





function start() {
    //TODO: Make a functiong start and pause screen
    setInterval(main, 1000 / 8);
}
start();

function main() {
    ctx.clearRect(pacman.x, pacman.y, sqaure, sqaure);
    pacman.x += vel_x * sqaure;
    pacman.y += vel_y * sqaure;
    if (!check_movement(pacman)) {
        pacman.x -= vel_x * sqaure;
        pacman.y -= vel_y * sqaure;
    };
    pellet.update();
    pacman.update();
    blinky.next([Math.floor(pacman.x / sqaure), Math.floor(pacman.y / sqaure)]);
    blinky2.next([Math.floor(pacman.x / sqaure), Math.floor(pacman.y / sqaure)]);
    blinky3.next([Math.floor(pacman.x / sqaure), Math.floor(pacman.y / sqaure)]);
    blinky4.next([Math.floor(pacman.x / sqaure), Math.floor(pacman.y / sqaure)]);
    ctx.clearRect(blinky2_sprite.x, blinky2_sprite.y, sqaure, sqaure);
    ctx.clearRect(blinky_sprite.x, blinky_sprite.y, sqaure, sqaure);
    ctx.clearRect(blinky3_sprite.x, blinky3_sprite.y, sqaure, sqaure);
    ctx.clearRect(blinky4_sprite.x, blinky4_sprite.y, sqaure, sqaure);
    blinky_sprite.x = blinky.x * sqaure;
    blinky_sprite.y = blinky.y * sqaure;
    blinky2_sprite.x = blinky2.x * sqaure;
    blinky2_sprite.y = blinky2.y * sqaure;
    blinky3_sprite.x = blinky3.x * sqaure;
    blinky3_sprite.y = blinky3.y * sqaure;
    blinky4_sprite.x = blinky4.x * sqaure;
    blinky4_sprite.y = blinky4.y * sqaure;
    blinky_sprite.update();
    blinky2_sprite.update();
    blinky3_sprite.update();
    blinky4_sprite.update();
    if (score > 500) {
        blinky.scatter = false;
        blinky2.scatter = false;
        blinky3.scatter = false;
        blinky4.scatter = false
    }

    if (pacman.x == blinky_sprite.x && pacman.y == blinky_sprite.y)
        console.log("1")
}

//Will reset the game to starting conditions, without having to refresh
function reset() {

}

function keyPress(evt) {
    switch (evt.keyCode) {
        case 37:
            vel_x = -1;
            vel_y = 0;
            break;
        case 38:
            vel_y = -1;
            vel_x = 0;
            break;
        case 39:
            vel_x = 1;
            vel_y = 0;
            break;
        case 40:
            vel_y = 1;
            vel_x = 0;
            break;
        case 87:
            vel_y = -1;
            vel_x = 0;
            break;
        case 65:
            vel_x = -1;
            vel_y = 0;
            break;
        case 83:
            vel_y = 1;
            vel_x = 0;
            break;
        case 68:
            vel_x = 1;
            vel_y = 0;
            break;
    }
}