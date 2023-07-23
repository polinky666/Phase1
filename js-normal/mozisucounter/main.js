const input = document.getElementById('sampleForm')
const textCounter = document.getElementById('textCounter')
const resetBtn = document.getElementById('resetBtn')
let textCnt = input.value.length

const max = 400

const count = (num) => `あと${num}文字`

textCounter.textContent = count(max - textCnt)

input.addEventListener('keyup', () => {
    textCnt = input.value.length
    textCounter.textContent = count(max - textCnt)
})

resetBtn.addEventListener('click', () => {
    textCnt = input.value.length
    textCounter.textContent = count(max)
})

//追加チャレンジ

const iniDelBtn = document.getElementById('iniDel')
const endDelBtn = document.getElementById('endDel')

iniDelBtn.addEventListener('click', function () {
    input.value = input.value.slice(1)
    textCnt = input.value.length
    textCounter.textContent = count(max - textCnt)
})

endDelBtn.addEventListener('click', function () {
    input.value = input.value.slice(0, -1);
    textCnt = input.value.length
    textCounter.textContent = count(max - textCnt)
})