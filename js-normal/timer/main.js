const inputTime = document.getElementById('inputTime')
const setTimeBtn = document.getElementById('setTime')
const startTimerBtn = document.getElementById('startTimer')
const stopTimerBtn = document.getElementById('stopTimer')
const nowTime = document.getElementById('nowTime')

let remainTime = 0
let timer

const setTime = () => {
    console.log(inputTime.value)
    remainTime = Number(inputTime.value)
    console.log('Set Time:' + remainTime)
}


const startTimer = () => {
    if (remainTime <= 0) {
        alert('時間をセットして下さい:' + remainTime)
        return
    }
    timer = setInterval(cntTime, 1000);
    console.log('Stop:' + remainTime)
}

const stopTimer = () => {
    clearInterval(timer)
}


const cntTime = () => {
    remainTime--
    nowTime.textContent = nowTimeText(remainTime)
    if (remainTime <= 0) {
        alert('STOP')
        clearInterval(timer)
    }
}

const nowTimeText = (num) => {
    return Math.floor(num / 3600) + '時間' + Math.floor((num % 3600) / 60) + '分' + (num % 60) + '秒'
}


setTimeBtn.addEventListener('click', setTime)
startTimerBtn.addEventListener('click', startTimer)
stopTimerBtn.addEventListener('click', stopTimer)