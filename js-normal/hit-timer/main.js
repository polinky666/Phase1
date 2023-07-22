let sec
let intarvalID

const startBtn = document.getElementById('startTimer')
const confirmBtn = document.getElementById('confirmTime')


const cntUp = () => {
    sec++
    console.log(sec)
    if (sec > 39) {
        alert('Time Over')
        clearInterval(intarvalID)
        sec = 0
    }
}

const start = () => {
    sec = 0
    clearInterval(intarvalID)
    intarvalID = setInterval(cntUp, 1000)
}

const check = () => {
    if (sec === 20) {
        alert('正解')
        clearInterval(intarvalID)
    } else if (sec < 20) {
        alert(`まだ${sec}秒`)
    } else {
        alert(`もう${sec}秒`)
        clearInterval(intarvalID)
    }
}

startBtn.addEventListener('click', start)
confirmBtn.addEventListener('click', check)

//追加チャレンジ


let intarvalID2
let startTime
let progTime

const startBtn2 = document.getElementById('startTimer2')
const confirmBtn2 = document.getElementById('confirmTime2')


const cntUp2 = () => {
    let now = new Date()
    progTime = Math.floor((now.getTime() - startTime.getTime()) / 1000)
    console.log(progTime)
    if (progTime > 39) {
        alert('Time Over')
        clearInterval(intarvalID2)
        progTime = 0
    }
}

const start2 = () => {
    startTime = new Date()
    clearInterval(intarvalID2)
    intarvalID2 = setInterval(cntUp2, 1000)
}

const check2 = () => {
    if (startTime === undefined) {
        return
    }
    let now = new Date()
    let prog = Math.floor((now.getTime() - startTime.getTime()) / 1000)
    if (prog === 20) {
        alert('正解')
        clearInterval(intarvalID2)
    } else if (prog < 20) {
        alert(`まだ${prog}秒`)
    } else {
        alert(`もう${prog}秒`)
        clearInterval(intarvalID2)
    }
}

startBtn2.addEventListener('click', start2)
confirmBtn2.addEventListener('click', check2)