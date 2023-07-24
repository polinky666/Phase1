let numeron = new Array
let count = 0

const unique = (arr) => {
    const set = new Set(arr)
    return arr.length === set.size
} //配列の要素に重複がないかチェック

const getArr = (num) => {
    if (num < 100 || num > 1000) {
        return false
    } else {
        let pre = new Array(3)
        pre[0] = Math.floor(num / 100)
        pre[1] = Math.floor(num % 100 / 10)
        pre[2] = num % 10
        return unique(pre) ? pre : false
    }
}//三桁の数字から配列を返す、不正な数字はfalseを返す

const judge = (arr1, arr2) => {
    let e = 0
    let b = 0
    for (let i = 0; i < 3; i++) {
        arr1.includes(arr2[i]) && b++
        arr1[i] === arr2[i] && e++
    }
    return { eat: e, bite: b - e }
}

const makeNumeron = () => {
    do {
        numeron = getArr(Math.floor(Math.random() * 1000))
    } while (!numeron); //重複のない配列を生成
    console.log(numeron) //確認用
}

const answerNum = document.getElementById('answerNum')
const numCheck = document.getElementById('numCheck')
const remainTurn = document.getElementById('remainTurn')

makeNumeron()

numCheck.addEventListener('click', () => {
    let ans = getArr(answerNum.value)
    if (ans) {
        //判定
        count++
        let result = judge(numeron, ans)
        alert(`${result.eat}EAT ${result.bite}BITE`)
        if (result.eat === 3) {
            alert('正解おめでとう！')
        } else {
            if (count === 10) {
                alert('残念、また挑戦してね')
                makeNumeron()
                answerNum.value = ''
            }
        }
    } else {
        alert('不正な数字です\n・三桁の数字を指定して下さい\n・各桁が重複した数字は使えません')
    }
})
