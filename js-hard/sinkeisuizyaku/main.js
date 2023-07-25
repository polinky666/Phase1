const panel = document.getElementById('panel');
const nextPlayer = document.getElementById('nextPlayer');
const player1Point = document.getElementById('player1Point');
const player2Point = document.getElementById('player2Point');

const cards = [1, 1, 2, 2, 3, 3, 4, 4]
let players = [
    { 'name': 'player1', 'point': 0 },
    { 'name': 'player2', 'point': 0 },
]
let next = 0;
let counter = 0;
let sets = new Array()

const randomPop = (arr) => {
    //配列からランダムに要素を取り出す
    const rand = Math.floor(Math.random() * arr.length);
    const val = arr.splice(rand, 1);
    return val[0];
}

const shuffle = (arr) => {
    let shuffled = new Array();
    const max = arr.length
    for (i = 0; i < max; i++) {
        shuffled.push(randomPop(arr));
    }
    return shuffled;
}


const update = () => {
    nextPlayer.textContent = `次は${players[next].name}の番です`
    player1Point.textContent = `${players[0].name}:${players[0].point}`
    player2Point.textContent = `${players[1].name}:${players[1].point}`
}

const check = (arr) => {
    [a, b] = arr;
    return a.value === b.value;
}


const init = () => {
    panel.innerHTML = '';
    players = [
        { 'name': 'player1', 'point': 0 },
        { 'name': 'player2', 'point': 0 },
    ]
    next = 0;

    counter = 0;
    sets = new Array()
    let cardsCopy = cards.concat();

    update();
    let cardset = shuffle(cardsCopy)

    for (c of cardset) {
        let card = document.createElement('div');
        card.className = 'card back';
        card.value = c;
        card.addEventListener('click', (event) => {
            if (sets[0] !== event.target) {
                event.target.className = 'card';
                event.target.textContent = event.target.value;
                event.target.disabled = true;
                if (!sets[0]) {
                    sets.push(event.target);
                } else {
                    sets.push(event.target);
                    setTimeout(() => {
                        if (check(sets)) {
                            counter++;
                            for (const element of sets) {
                                element.className = 'card finish'
                            }
                            players[next].point++;
                        } else {
                            for (const element of sets) {
                                element.className = 'card back'
                                element.textContent = ''
                            }
                            next ? next-- : next++;
                        }
                        update();
                        sets = [];
                        if (counter === 4) {
                            players[0].point > players[1].point && alert('player1勝利')
                            players[0].point < players[1].point && alert('player2勝利')
                            players[0].point === players[1].point && alert('引き分け')
                            init();
                        }
                    }, 500)
                }
            }
        })
        panel.appendChild(card)
    }
}

init()