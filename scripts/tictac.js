
var newgame = document.getElementById('newgame');

var button0 = document.getElementById('0');
var button1 = document.getElementById('1');
var button2 = document.getElementById('2');
var button3 = document.getElementById('3');
var button4 = document.getElementById('4');
var button5 = document.getElementById('5');
var button6 = document.getElementById('6');
var button7 = document.getElementById('7');
var button8 = document.getElementById('8');
var turn = 0


function computerturn() {
//Computer Makes a Move
console.log("wish i knew what to do??")
wincheck()
turn = 0
}

function wincheck() {
var board = []
var Xarray = []
var Oarray = []
board.push(button0.innerHTML)
board.push(button1.innerHTML)
board.push(button2.innerHTML)
board.push(button3.innerHTML)
board.push(button4.innerHTML)
board.push(button5.innerHTML)
board.push(button6.innerHTML)
board.push(button7.innerHTML)
board.push(button8.innerHTML)

//assemble array of used squares
for (let i = 0; i <= board.length; i++){
    if (board[i] == "X") {
Xarray.push(i)
    } else if (board[i] =="O"){
        Xarray.push(i)
    }
}
console.log(Xarray)
console.log(Oarray)

//compare arrays to winners


}

button0.onclick =function() {
 if (button0.innerHTML == "O" || turn == 1)  {
    return
} else {
    button0.innerHTML = "X"
    turn = 1
    wincheck()
    computerturn()
}
}

button1.onclick =function() {
 if (button1.innerHTML == "O"  || turn == 1) {
    return
} else {
    button1.innerHTML = "X"
    turn = 1
    wincheck()
    computerturn()
}
}

button2.onclick =function() {
 if (button2.innerHTML == "O"  || turn == 1) {
    return
} else {
    button2.innerHTML = "X"
    turn = 1
    wincheck()
    computerturn()
}
}

button3.onclick =function() {
 if (button3.innerHTML == "O"  || turn == 1) {
    return
} else {
    button3.innerHTML = "X"
    turn = 1
    wincheck()
    computerturn()
}
}

button4.onclick =function() {
 if (button4.innerHTML == "O"  || turn == 1) {
    return
} else {
    button4.innerHTML = "X"
    turn = 1
    wincheck()
    computerturn()
}
}

button5.onclick =function() {
 if (button5.innerHTML == "O"  || turn == 1) {
    return
} else {
    button5.innerHTML = "X"
    turn = 1
    wincheck()
    computerturn()
}
}

button6.onclick =function() {
 if (button6.innerHTML == "O"  || turn == 1) {
    return
} else {
    button6.innerHTML = "X"
    turn = 1
    wincheck()
    computerturn()
}
}

button7.onclick =function() {
 if (button7.innerHTML == "O"  || turn == 1) {
    return
} else {
    button7.innerHTML = "X"
    turn = 1
    wincheck()
    computerturn()
}
}

button8.onclick =function() {
 if (button8.innerHTML == "O"  || turn == 1) {
    return
} else {
    button8.innerHTML = "X"
    turn = 1
    wincheck()
    computerturn()
}
}

//clear board for new game
newgame.onclick = function() {
console.log("New game triggered - clear all fields");
turn = 0
button0.innerHTML = ""
button1.innerHTML = ""
button2.innerHTML = ""
button3.innerHTML = ""
button4.innerHTML = ""
button5.innerHTML = ""
button6.innerHTML = ""
button7.innerHTML = ""
button8.innerHTML = ""
};

