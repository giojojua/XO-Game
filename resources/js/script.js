'use strict'

let arrayXO = document.querySelectorAll('.box')
let clicks = 0

for (let i = 0; i < arrayXO.length; i++) {
    arrayXO[i].addEventListener('click', function () {
        if (clicks === 0 || clicks % 2 === 0 && arrayXO[i].innerHTML == 0) {
            // console.log(clicks)
            clicks++
            arrayXO[i].innerHTML = 'X'
            checkDraw(clicks)
            checkWin('X')
        } else if (arrayXO[i].innerHTML == 0) {
            // console.log(clicks)
            clicks++
            arrayXO[i].innerHTML = 'O'
            checkDraw()
            checkWin('O')
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

function checkWin(x, o) {
    switch (true) {
        case arrayXO[0].innerHTML == x && arrayXO[1].innerHTML == x && arrayXO[2].innerHTML == x:
            restartModalText.innerHTML = `<h2>${x} Wins</h2>`
            restartModal.style.display = 'flex'
            break;
        case arrayXO[3].innerHTML == x && arrayXO[4].innerHTML == x && arrayXO[5].innerHTML == x:
            restartModalText.innerHTML = `<h2>${x} Wins</h2>`
            restartModal.style.display = 'flex'
            break;
        case arrayXO[6].innerHTML == x && arrayXO[7].innerHTML == x && arrayXO[8].innerHTML == x:
            restartModalText.innerHTML = `<h2>${x} Wins</h2>`
            restartModal.style.display = 'flex'
            break;
        case arrayXO[0].innerHTML == x && arrayXO[3].innerHTML == x && arrayXO[6].innerHTML == x:
            restartModalText.innerHTML = `<h2>${x} Wins</h2>`
            restartModal.style.display = 'flex'
            break;
        case arrayXO[1].innerHTML == x && arrayXO[4].innerHTML == x && arrayXO[7].innerHTML == x:
            restartModalText.innerHTML = `<h2>${x} Wins</h2>`
            restartModal.style.display = 'flex'
            break;
        case arrayXO[2].innerHTML == x && arrayXO[5].innerHTML == x && arrayXO[8].innerHTML == x:
            restartModalText.innerHTML = `<h2>${x} Wins</h2>`
            restartModal.style.display = 'flex'
            break;
        case arrayXO[0].innerHTML == x && arrayXO[4].innerHTML == x && arrayXO[8].innerHTML == x:
            restartModalText.innerHTML = `<h2>${x} Wins</h2>  `
            restartModal.style.display = 'flex'
            break
        case arrayXO[2].innerHTML == x && arrayXO[4].innerHTML == x && arrayXO[6].innerHTML == x:
            restartModalText.innerHTML = `<h2>${x} Wins</h2>`
            restartModal.style.display = 'flex'
            break;
    }
}

function checkDraw(clicks) {
    if (clicks === 9) {
        restartModalText.innerHTML = `<h2>Draw</h2>`
        restartModal.style.display = 'flex'
    }
}

