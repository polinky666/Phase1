const view = document.getElementById('view');
const hitNum = document.getElementById('hitNum');
const garagara = document.getElementById('garagara');

garagara.disabled = true;

const bGroup = Array.from({ length: 15 }, (_, index) => index + 1);
const iGroup = Array.from({ length: 15 }, (_, index) => index + 16);
const nGroup = Array.from({ length: 15 }, (_, index) => index + 31);
const gGroup = Array.from({ length: 15 }, (_, index) => index + 46);
const oGroup = Array.from({ length: 15 }, (_, index) => index + 61);
const garagarapon = Array.from({ length: 75 }, (_, index) => index + 1);

let bCopy, iCopy, nCopy, gCopy, oCopy, garapon, card, bingo, drawBalls

const init = () => {
    //配列を初期化してコピー
    card = new Array();
    bingo = new Array();
    bCopy = new Array();
    iCopy = new Array();
    nCopy = new Array();
    gCopy = new Array();
    oCopy = new Array();
    garapon = new Array();
    drawBalls = [0]
    bCopy = bGroup.concat();
    iCopy = iGroup.concat();
    nCopy = nGroup.concat();
    gCopy = gGroup.concat();
    oCopy = oGroup.concat();
    garapon = garagarapon.concat();
    //table要素をクリア
    view.innerHTML = '';
}

const randomPop = (arr) => {
    //配列からランダムに要素を取り出す
    const rand = Math.floor(Math.random() * arr.length);
    const val = arr.splice(rand, 1);
    return val[0];
}

const setArr = (arr, isN = false) => {
    //groupからランダムに選んだ数値で配列を作成
    const numbers = new Array();
    for (let i = 0; i < 5; i++) {
        if (i === 2 && isN) {
            //nの3には0(Free)を挿入
            numbers.push(0);
        } else {
            numbers.push(randomPop(arr));
        }
    }
    return numbers;
}


const makeCard = () => {
    //カードを作成
    card.push(setArr(bCopy));
    card.push(setArr(iCopy));
    card.push(setArr(nCopy, true));
    card.push(setArr(gCopy));
    card.push(setArr(oCopy));
}

const transMatrix = (arr) => {
    return arr[0].map((_, index) => arr.map(row => row[index]));
} //元の配列の縦横を反転

const bingoSet = (arr) => {
    let bingoArr = new Array();
    let lineArr = new Array(); //横用
    let slashArr = new Array(); //斜め用1
    let backSlashArr = new Array(); //斜め用2
    for (let i = 0; i < arr.length; i++) {
        slashArr.push(arr[i][4 - i]);
        backSlashArr.push(arr[i][i]);
    }
    lineArr = transMatrix(arr);
    bingoArr = arr.concat(lineArr); //縦はそのまま横と結合
    bingoArr.push(slashArr);
    bingoArr.push(backSlashArr); //斜めを追加
    return bingoArr
}

const drawCard = (arr, fragment) => {
    const thead = document.createElement('thead')
    const tbody = document.createElement('tbody')
    const tr0 = document.createElement('tr');
    for (const bingo of 'BINGO') {
        let headStr = document.createElement('td');
        headStr.textContent = bingo;
        tr0.appendChild(headStr);
    }
    thead.appendChild(tr0)
    fragment.appendChild(thead)
    for (let i = 0; i < arr.length; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < arr[i].length; j++) {
            let numTd = document.createElement('td');
            numTd.textContent = arr[j][i] || 'free';
            numTd.className = arr[j][i];
            tr.appendChild(numTd);
        }
        tbody.appendChild(tr);
    }
    fragment.appendChild(tbody);
}

const panch = (num) => { //当たった数字の色を変える
    let hits = document.getElementsByClassName(num);
    if (hits[0]) {
        //console.log(hits[0])
        hits[0].className = 'hit-num'
    }
}

const check = (arr1, arr2) => {
    let count = 0;
    for (let num of arr1) {
        arr2.includes(num) && count++;
    }
    return count;
}

const judge = () => {
    let isReach = false;
    let isBingo = false;
    for (let set of bingo) {
        switch (check(set, drawBalls)) {
            case 5:
                alert('BINGO!');
                isBingo = true;
                garagara.disabled = true;
                break;
            case 4:
                isReach = true;
                break;
        }
    }
    isReach && !isBingo && alert('リーチ');
}

hitNum.addEventListener('click', () => {
    init() //初期化
    const frag = document.createDocumentFragment(); //Fragment
    makeCard(); //カードを生成
    bingo = bingoSet(card); //ビンゴの組み合わせ取得
    drawCard(card, frag); //描画用の要素をFragmentに追加
    console.log(bingo); //確認用
    view.appendChild(frag); //tableに要素を追加
    panch(drawBalls);
    garagara.disabled = false;
})

garagara.addEventListener('click', () => {
    let drawNum = randomPop(garapon)
    alert(drawNum)
    drawBalls.push(drawNum);
    panch(drawNum);
    judge()
})