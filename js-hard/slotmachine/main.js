const nowTime = document.getElementById('nowTime')
const nowTime2 = document.getElementById('nowTime2')
const nowTime3 = document.getElementById('nowTime3')
const nowTime4 = document.getElementById('nowTime4')
const nowTime5 = document.getElementById('nowTime5')
const nowTime6 = document.getElementById('nowTime6')
const nowTime7 = document.getElementById('nowTime7')
const nowTime8 = document.getElementById('nowTime8')
const nowTime9 = document.getElementById('nowTime9')

const setTime1 = document.getElementById('setTime1')
const setTime2 = document.getElementById('setTime2')
const setTime3 = document.getElementById('setTime3')
//ストップボタン
const startTimer = document.getElementById('startTimer')
//スタートボタン

let checked = 0 //押したボタンをカウント

let num1 = 0
let num2 = 0
let num3 = 0

let reel1 = new Array
let reel2 = new Array
let reel3 = new Array

for (let i = 0; i < 10; i++) {
    reel1.push(Math.floor(Math.random() * 10))
    reel2.push(Math.floor(Math.random() * 10))
    reel3.push(Math.floor(Math.random() * 10))
}//ランダムのリールを生成



nowTime.textContent = reel1[0]
nowTime2.textContent = reel2[0]
nowTime3.textContent = reel3[0]
nowTime4.textContent = reel1[9]
nowTime5.textContent = reel2[9]
nowTime6.textContent = reel3[9]
nowTime7.textContent = reel1[1]
nowTime8.textContent = reel2[1]
nowTime9.textContent = reel3[1]

setTime1.disabled = true
setTime2.disabled = true
setTime3.disabled = true

let timer1, timer2, timer3

startTimer.addEventListener('click', () => {
    startTimer.disabled = true
    setTime1.disabled = false
    setTime2.disabled = false
    setTime3.disabled = false
    timer1 = setInterval(() => {
        nowTime.textContent = reel1[++num1 % 10]
        nowTime4.textContent = reel1[(num1 + 1) % 10]
        nowTime7.textContent = reel1[(num1 - 1) % 10]
    }, 100)
    timer2 = setInterval(() => {
        nowTime2.textContent = reel2[++num2 % 10]
        nowTime5.textContent = reel2[(num2 + 1) % 10]
        nowTime8.textContent = reel2[(num2 - 1) % 10]
    }, 100)
    timer3 = setInterval(() => {
        nowTime3.textContent = reel3[++num3 % 10]
        nowTime6.textContent = reel3[(num3 + 1) % 10]
        nowTime9.textContent = reel3[(num3 - 1) % 10]
    }, 100)
})

setTime1.addEventListener('click', () => {
    clearInterval(timer1)
    setTime1.disabled = true
    checked++
    check()
})
setTime2.addEventListener('click', () => {
    clearInterval(timer2)
    setTime2.disabled = true
    checked++
    check()
})
setTime3.addEventListener('click', () => {
    clearInterval(timer3)
    setTime3.disabled = true
    checked++
    check()
})

const check = () => {
    if (checked === 3) {
        //判定
        alert(resultText(jadge()))
        startTimer.disabled = false
        checked = 0
    }
}

const lineJadge = (number1, number2, number3) => {
    if (number1.textContent === number2.textContent && number2.textContent === number3.textContent) {
        return 1
    }
    return 0
}

const jadge = () => {
    let matches = 0
    matches = matches + lineJadge(nowTime, nowTime2, nowTime3)
    matches = matches + lineJadge(nowTime4, nowTime5, nowTime6)
    matches = matches + lineJadge(nowTime7, nowTime8, nowTime9)
    matches = matches + lineJadge(nowTime4, nowTime2, nowTime9)
    matches = matches + lineJadge(nowTime7, nowTime2, nowTime6)
    return matches
}

const resultText = (matchNum) => {
    if (matchNum === 0) {
        return '残念もう一度'
    } else {
        return 'おめでとう！'
    }
}


/*仮完成
const nowTime = document.getElementById('nowTime')
const nowTime2 = document.getElementById('nowTime2')
const nowTime3 = document.getElementById('nowTime3')
const nowTime4 = document.getElementById('nowTime4')
const nowTime5 = document.getElementById('nowTime5')
const nowTime6 = document.getElementById('nowTime6')
const nowTime7 = document.getElementById('nowTime7')
const nowTime8 = document.getElementById('nowTime8')
const nowTime9 = document.getElementById('nowTime9')

const setTime1 = document.getElementById('setTime1')
const setTime2 = document.getElementById('setTime2')
const setTime3 = document.getElementById('setTime3')

const startTimer = document.getElementById('startTimer')

let checked = 0

let num1 = 0
let num2 = 0
let num3 = 0

nowTime.textContent = 0
nowTime2.textContent = 0
nowTime3.textContent = 0
nowTime4.textContent = 1
nowTime5.textContent = 1
nowTime6.textContent = 1
nowTime7.textContent = 9
nowTime8.textContent = 9
nowTime9.textContent = 9

setTime1.disabled = true
setTime2.disabled = true
setTime3.disabled = true

let timer1, timer2, timer3

startTimer.addEventListener('click', () => {
    startTimer.disabled = true
    setTime1.disabled = false
    setTime2.disabled = false
    setTime3.disabled = false
    timer1 = setInterval(() => {
        nowTime.textContent = ++num1 % 10
        nowTime4.textContent = (num1 + 1) % 10
        nowTime7.textContent = (num1 - 1) % 10
    }, 100)
    timer2 = setInterval(() => {
        nowTime2.textContent = ++num2 % 10
        nowTime5.textContent = (num2 + 1) % 10
        nowTime8.textContent = (num2 - 1) % 10
    }, 100)
    timer3 = setInterval(() => {
        nowTime3.textContent = ++num3 % 10
        nowTime6.textContent = (num3 + 1) % 10
        nowTime9.textContent = (num3 - 1) % 10
    }, 100)
})

setTime1.addEventListener('click', () => {
    clearInterval(timer1)
    setTime1.disabled = true
    checked++
    check()
})
setTime2.addEventListener('click', () => {
    clearInterval(timer2)
    setTime2.disabled = true
    checked++
    check()
})
setTime3.addEventListener('click', () => {
    clearInterval(timer3)
    setTime3.disabled = true
    checked++
    check()
})

const check = () => {
    if (checked === 3) {
        //判定

        alert(resultText(jadge()))
        startTimer.disabled = false
        checked = 0
    }
}

const lineJadge = (reel1, reel2, reel3) => {
    if (reel1.textContent === reel2.textContent && reel2.textContent === reel3.textContent) {
        return 1
    }
    return 0
}

const jadge = () => {
    let matches = 0
    matches = matches + lineJadge(nowTime, nowTime2, nowTime3)
    matches = matches + lineJadge(nowTime4, nowTime5, nowTime6)
    matches = matches + lineJadge(nowTime7, nowTime8, nowTime9)
    matches = matches + lineJadge(nowTime4, nowTime2, nowTime9)
    matches = matches + lineJadge(nowTime7, nowTime2, nowTime6)
    return matches
}

const resultText = (matchNum) => {
    if (matchNum === 0) {
        return '残念もう一度'
    } else {
        return 'おめでとう！'
    }
}
*/