const cancas = document.getElementById('viewImg')
const btn = document.getElementById('pushBtn')

let sNum = 0

const imgDict = [
    { text: '春へ', img: './img/slide1.png' },
    { text: '夏へ', img: './img/slide2.png' },
    { text: '秋へ', img: './img/slide3.png' },
    { text: '冬へ', img: './img/slide4.png' },
]

cancas.src = imgDict[sNum].img
btn.textContent = imgDict[sNum].text

const changeImg = () => {
    sNum === 3 ? sNum = 0 : sNum++
    cancas.src = imgDict[sNum].img
    btn.textContent = imgDict[sNum].text
}

btn.addEventListener('click', changeImg)


const season = document.getElementById('seasonNum')
const skipBtn = document.getElementById('skipBtn')

const jumpImg = () => {
    sNum = season.value
    cancas.src = imgDict[sNum].img
    btn.textContent = imgDict[sNum].text
}

skipBtn.addEventListener('click', jumpImg)