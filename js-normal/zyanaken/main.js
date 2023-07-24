const gameStart = document.getElementById('gameStart')
const cpHand = document.getElementById('cpHand')
cpHand.textContent = '相手の手'
const log = document.getElementById('log')
log.textContent = '結果:'

const hand = ['グー', 'チョキ', 'パー']
const result = ['勝ち', 'あいこ', '負け']
const outCome = [
    [1, 0, 2],
    [2, 1, 0],
    [0, 2, 1],
]

gameStart.addEventListener('click', () => {
    const me = document.getElementById('myHand').value
    const cp = Math.floor(Math.random() * 3)
    cpHand.textContent = '相手の手:' + hand[cp]
    log.textContent = '結果:' + result[outCome[me][cp]];
})

//チャレンジ問題
const player = document.getElementById('player')
const setHand = document.getElementById('setHand')
const playerHand = document.getElementById('playerHand')
const player1Hand = document.getElementById('player1Hand')
const player2Hand = document.getElementById('player2Hand')
const gameStart2 = document.getElementById('gameStart2')
const log2 = document.getElementById('log2')

const result2 = ['Player1の勝ち', 'あいこ', 'Player2の勝ち']

let currentPlayer = 0
let hands = new Array(2)
gameStart2.disabled = true

setHand.addEventListener('click', () => {
    hands[currentPlayer] = playerHand.value
    switch (currentPlayer) {
        case 0: {
            player1Hand.textContent = 'player1:セット完了'
            player.textContent = 'player2'
            currentPlayer++
            break;
        }
        case 1: {
            player2Hand.textContent = 'player2:セット完了'
            setHand.disabled = true
            player.textContent = '両者セット完了'
            gameStart2.disabled = false
            currentPlayer--
            break;
        }
    }
})

gameStart2.addEventListener('click', () => {
    gameStart2.disabled = true
    player1Hand.textContent = 'player1:' + hand[hands[0]]
    player2Hand.textContent = 'player2:' + hand[hands[1]]
    log2.textContent = '結果:' + result2[outCome[hands[0]][hands[1]]]
    player.textContent = 'player1'
    setHand.disabled = false
})


/*模範解答
const cpHand = document.getElementById('cpHand');
cpHand.textContent = '相手の手';
const log = document.getElementById('log');
log.textContent = '結果：';

const gameStart = document.getElementById('gameStart');

gameStart.addEventListener('click', function () {
    const myNum = document.getElementById('myHand').value;
    const cpNum = Math.floor(Math.random() * 3);

    if (cpNum === 0) {
        cpHand.textContent = '相手の手：グー';
    } else if (cpNum == 1) {
        cpHand.textContent = '相手の手：チョキ';
    } else if (cpNum == 2) {
        cpHand.textContent = '相手の手：パー';
    }

    switch (myNum) {
        case '0': {
            if (cpNum === 0) {
                log.textContent = '結果：引き分け';
            } else if (cpNum === 1) {
                log.textContent = '結果：勝ち';
            } else if (cpNum === 2) {
                log.textContent = '結果：負け';
            }
            break;
        }
        case '1': {
            if (cpNum === 0) {
                log.textContent = '結果：負け';
            } else if (cpNum === 1) {
                log.textContent = '結果：引き分け';
            } else if (cpNum === 2) {
                log.textContent = '結果：勝ち';
            }
            break;
        }
        case '2': {
            if (cpNum === 0) {
                log.textContent = '結果：勝ち';
            } else if (cpNum === 1) {
                log.textContent = '結果：負け';
            } else if (cpNum === 2) {
                log.textContent = '結果：引き分け';
            }
            break;
        }
    }
});

チャレンジ問題
const setHand = document.getElementById('setHand');
const nowTurn = document.getElementById('player');
const player1Hand = document.getElementById('player1Hand');
const player2Hand = document.getElementById('player2Hand');

let turn = 0;
let player1Num;
let player2Num;

setHand.addEventListener('click', function() {
  if (turn === 0) {
    player1Num = document.getElementById('playerHand').value;
    player1Hand.textContent = 'player1:セット完了';
    nowTurn.textContent = 'player2';
  } else {
    player2Num = document.getElementById('playerHand').value;
    player2Hand.textContent = 'player2:セット完了';
    nowTurn.textContent = '両者セット完了';
  }
  turn += 1;
});

const gameStart = document.getElementById('gameStart');
const log = document.getElementById('log');
log.textContent = '結果：';

gameStart.addEventListener('click', function() {
  if (turn !== 2) {
    alert('2回以上押さないでください。');
    return;
  }
  switch (player1Num) {
    case '0': {
      if (player2Num === '0') {
        log.textContent = '結果：引き分け';
      } else if (player2Num === '1') {
        log.textContent = '結果：勝ち';
      } else if (player2Num === '2') {
        log.textContent = '結果：負け';
      }
      break;
    }
    case '1': {
      if (player2Num === '0') {
        log.textContent = '結果：負け';
      } else if (player2Num === '1') {
        log.textContent = '結果：引き分け';
      } else if (player2Num === '2') {
        log.textContent = '結果：勝ち';
      }
      break;
    }
    case '2': {
      if (player2Num === '0') {
        log.textContent = '結果：勝ち';
      } else if (player2Num === '1') {
        log.textContent = '結果：負け';
      } else if (player2Num === '2') {
        log.textContent = '結果：引き分け';
      }
      break;
    }
  }
  turn = 0;
  nowTurn.textContent = 'player1';
  player1Hand.textContent = 'player1:';
  player2Hand.textContent = 'player2:';
});

*/




