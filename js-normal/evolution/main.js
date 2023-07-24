const showImg = document.getElementById('showImg')
const setBtn = document.getElementById('setBtn')
const resetBtn = document.getElementById('resetBtn')

evoImgs = [
    { img: './img/evolution1.png', text: '原人' },
    { img: './img/evolution2.png', text: '旧人' },
    { img: './img/evolution3.png', text: '新人' },
    { img: './img/evolution4.png', text: '現代人' },
]

const getNum = () => {
    let rndNum = Math.floor(Math.random() * 10)
    return rndNum < 4 ? 1 : rndNum < 7 ? 2 : rndNum < 9 ? 3 : 4
}

const getImg = (num) => {
    const fragment = document.createDocumentFragment();
    let human = new Array(num + 1)
    for (let i = 0; i < num; i++) {
        human[i] = document.createElement('div')
        human[i].innerHTML = `<img src="${evoImgs[i].img}" alt="${evoImgs[i].text}" ><p>${evoImgs[i].text}</p>`
        fragment.appendChild(human[i])
    }
    showImg.appendChild(fragment)
}

setBtn.addEventListener('click', () => {
    showImg.innerHTML = ''
    getImg(getNum())
})

resetBtn.addEventListener('click', () => {
    showImg.innerHTML = ''
})




/* 模範解答
const setBtn = document.getElementById('setBtn');
const reset = document.getElementById('resetBtn');
const showImg = document.getElementById('showImg');

setBtn.addEventListener('click', function() {
  showImg.innerHTML = '';
  const checkEvo = Math.floor(Math.random() * 10);

  const first = document.createElement('div');
  first.innerHTML = "<img src='./img/evolution1.png' alt='原人'  />";
  showImg.appendChild(first);
  const firstWord = document.createElement('p');
  firstWord.innerHTML = '原人';
  first.appendChild(firstWord);

  if (checkEvo >= 4) {
    const second = document.createElement('div');
    second.innerHTML = "<img src='./img/evolution2.png' alt='旧人'  />";
    showImg.appendChild(second);
    const secondWord = document.createElement('p');
    secondWord.innerHTML = '旧人';
    second.appendChild(secondWord);
  }
  if (checkEvo >= 7) {
    const third = document.createElement('div');
    third.innerHTML = "<img src='./img/evolution3.png' alt='新人'/>";
    showImg.appendChild(third);
    const thirdWord = document.createElement('p');
    thirdWord.innerHTML = '新人';
    third.appendChild(thirdWord);
  }
  if (checkEvo >= 9) {
    const fourth = document.createElement('div');
    fourth.innerHTML = "<img src='./img/evolution4.png' alt='現代人'/>";
    showImg.appendChild(fourth);
    const fourthWord = document.createElement('p');
    fourthWord.innerHTML = '現代人';
    fourth.appendChild(fourthWord);
  }
});

reset.addEventListener('click', function() {
  showImg.innerHTML = '';
});
*/