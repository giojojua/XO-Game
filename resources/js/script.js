'use strict'

let arrayXO = document.querySelectorAll('.box')
let clicks = 0

for (let i = 0; i < arrayXO.length; i++) {
    arrayXO[i].addEventListener('click', function () {
        if (clicks === 0 || clicks % 2 === 0 && arrayXO[i].innerHTML == 0) {
            clicks++
            arrayXO[i].innerHTML = 'X'
            checkWinX()
        } else if (arrayXO[i].innerHTML == 0) {
            clicks++
            arrayXO[i].innerHTML = 'O'
            checkWinO()
        }
        event.preventDefault()
    })
}

let restartModal = document.getElementById('win')
let restartModalText = document.getElementById('textWin')
let restartXO = document.getElementById('restartXO')
let resetXO = document.getElementById('resetXO')

resetXO.onclick = function () {
    clicks = 0
    for (let i = 0; i < arrayXO.length; i++) {
        arrayXO[i].innerHTML = ''
    }
}

console.log(restartXO)

restartXO.onclick = function () {
    clicks = 0
    restartModal.style.display = 'none'
    for (let i = 0; i < arrayXO.length; i++) {
        arrayXO[i].innerHTML = ''
    }
}

function checkWinX() {
    switch (true) {
        case arrayXO[0].innerHTML == 'X' && arrayXO[1].innerHTML == 'X' && arrayXO[2].innerHTML == 'X':
            restartModalText.innerHTML = `<h2>X Wins</h2>`
            restartModal.style.display = 'flex'
            break;
        case arrayXO[3].innerHTML == 'X' && arrayXO[4].innerHTML == 'X' && arrayXO[5].innerHTML == 'X':
            restartModalText.innerHTML = `<h2>X Wins</h2>`
            restartModal.style.display = 'flex'
            break;
        case arrayXO[6].innerHTML == 'X' && arrayXO[7].innerHTML == 'X' && arrayXO[8].innerHTML == 'X':
            restartModalText.innerHTML = `<h2>X Wins</h2>`
            restartModal.style.display = 'flex'
            break;
        case arrayXO[0].innerHTML == 'X' && arrayXO[3].innerHTML == 'X' && arrayXO[6].innerHTML == 'X':
            restartModalText.innerHTML = `<h2>X Wins</h2>`
            restartModal.style.display = 'flex'
            break;
        case arrayXO[1].innerHTML == 'X' && arrayXO[4].innerHTML == 'X' && arrayXO[7].innerHTML == 'X':
            restartModalText.innerHTML = `<h2>X Wins</h2>`
            restartModal.style.display = 'flex'
            break;
        case arrayXO[2].innerHTML == 'X' && arrayXO[5].innerHTML == 'X' && arrayXO[8].innerHTML == 'X':
            restartModalText.innerHTML = `<h2>X Wins</h2>`
            restartModal.style.display = 'flex'
            break;
        case arrayXO[0].innerHTML == 'X' && arrayXO[4].innerHTML == 'X' && arrayXO[8].innerHTML == 'X':
            restartModalText.innerHTML = `<h2>X Wins</h2>  `
            restartModal.style.display = 'flex'
            break
        case arrayXO[2].innerHTML == 'X' && arrayXO[4].innerHTML == 'X' && arrayXO[6].innerHTML == 'X':
            restartModalText.innerHTML = `<h2>X Wins</h2>`
            restartModal.style.display = 'flex'
            break;
    }
}

function checkWinO() {
    switch (true) {
        case arrayXO[0].innerHTML == 'O' && arrayXO[1].innerHTML == 'O' && arrayXO[2].innerHTML == 'O':
            restartModalText.innerHTML = `<h2>O Wins</h2>`
            restartModal.style.display = 'flex'
            break;
        case arrayXO[3].innerHTML == 'O' && arrayXO[4].innerHTML == 'O' && arrayXO[5].innerHTML == 'O':
            restartModalText.innerHTML = `<h2>O Wins</h2>`
            restartModal.style.display = 'flex'
            break;
        case arrayXO[6].innerHTML == 'O' && arrayXO[7].innerHTML == 'O' && arrayXO[8].innerHTML == 'O':
            restartModalText.innerHTML = `<h2>O Wins</h2>`
            restartModal.style.display = 'flex'
            break;
        case arrayXO[0].innerHTML == 'O' && arrayXO[3].innerHTML == 'O' && arrayXO[6].innerHTML == 'O':
            restartModalText.innerHTML = `<h2>O Wins</h2>`
            restartModal.style.display = 'flex'
            break;
        case arrayXO[1].innerHTML == 'O' && arrayXO[4].innerHTML == 'O' && arrayXO[7].innerHTML == 'O':
            restartModalText.innerHTML = `<h2>O Wins</h2>`
            restartModal.style.display = 'flex'
            break;
        case arrayXO[2].innerHTML == 'O' && arrayXO[5].innerHTML == 'O' && arrayXO[8].innerHTML == 'O':
            restartModalText.innerHTML = `<h2>O Wins</h2>  `
            restartModal.style.display = 'flex'
            break;
        case arrayXO[0].innerHTML == 'O' && arrayXO[4].innerHTML == 'O' && arrayXO[8].innerHTML == 'O':
            restartModalText.innerHTML = `<h2>O Wins</h2>`
            restartModal.style.display = 'flex'
            break
        case arrayXO[2].innerHTML == 'O' && arrayXO[4].innerHTML == 'O' && arrayXO[6].innerHTML == 'O':
            restartModalText.innerHTML = `<h2>O Wins</h2>`
            restartModal.style.display = 'flex'
            break;
    }
}

