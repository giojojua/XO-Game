'use strict'

let arrayXO = document.querySelectorAll('.box')
let clicks = 0
let winningConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6],
]

for (let i = 0; i < arrayXO.length; i++) {
    arrayXO[i].addEventListener('click', function () {
        if (clicks === 0 || clicks % 2 === 0 && arrayXO[i].innerHTML == 0) {
            clicks++
            arrayXO[i].innerHTML = 'X'
            checkDraw(clicks)
            checkWin('X', winningConditions)
        } else if (arrayXO[i].innerHTML == 0) {
            clicks++
            arrayXO[i].innerHTML = 'O'
            checkDraw()
            checkWin('O', winningConditions)
        }
        event.preventDefault()
    })
}

let restartModal = document.getElementById('win')
let restartModalText = document.getElementById('textWin')
let restartXO = document.getElementById('restartXO')
let resetXO = document.getElementById('resetXO')

resetXO.onclick = function () {
    reset()
}

restartXO.onclick = function () {
    reset('none')
}

function reset(hide) {
    clicks = 0
    restartModal.style.display = hide
    for (let i = 0; i < arrayXO.length; i++) {
        arrayXO[i].innerHTML = ''
    }
}

function checkWin(x, winningConditions) {
    for (const index in winningConditions) {
        let val = winningConditions[index]
        if (arrayXO[val[0]].innerHTML == x && arrayXO[val[1]].innerHTML == x && arrayXO[val[2]].innerHTML == x) {
            restartModalText.innerHTML = "<h2>".concat(x, " Wins</h2>");
            restartModal.style.display = 'flex';
            break;
        }
    }
}

function checkDraw(clicks) {
    if (clicks === 9) {
        restartModalText.innerHTML = `<h2>Draw</h2>`
        restartModal.style.display = 'flex'
    }
}