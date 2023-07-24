const dateSet = document.getElementById('dateSet') //日付
const dateSearch = document.getElementById('dateSearch') //ボタン
const dayText = document.createElement('p')
const body = document.querySelector('body') //親ノード取得

let target
let timer //タイマー設定

dateSearch.addEventListener('click', () => {
    if (dateSet.value) {
        target = moment(dateSet.value)
        count()
        body.appendChild(dayText)
        timer = setInterval('count()', 1000)
    }
    alert('日付を選択して下さい')
})
dateSet.addEventListener('change', () => {
    target = moment(dateSet.value)
    count()
})



const count = () => {
    const date = moment();
    const second = target.diff(date, 'second') % 60;
    const minute = target.diff(date, 'minute') % 60;
    const hour = target.diff(date, 'hour') % 24;
    const day = target.diff(date, 'days')

    dayText.textContent = `${dateSet.value}まで後${day}日${hour}時間${minute}分${second}秒`
};



/*
const doraemon = document.createElement('p')
const body = document.querySelector('body')

let timer

const birthdayDoremon = moment('2112-09-03 12:00')

const count = () => {
    const date = moment()
    const second = birthdayDoremon.diff(date, 'second') % 60
    const minute = birthdayDoremon.diff(date, 'minute') % 60
    const hour = birthdayDoremon.diff(date, 'hour') % 24
    const day = birthdayDoremon.diff(date, 'days')

    doraemon.textContent = `ドラえもんが生まれるまで後${day}日${hour}時間${minute}分${second}秒`
};

count()
body.appendChild(doraemon)

timer = setInterval('count()', 1000)
*/