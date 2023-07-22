let cntPerson = 0

const cntUp = () => {
    cntPerson++
    check()
}

const reply = () => {
    const str = 'どうぞどうぞ';
    const action = str.repeat(cntPerson);
    alert(action);
    cntPerson = 0;
    check()
};

const cntDown = () => {
    cntPerson--
    if (cntPerson < 0) {
        alert('もう誰もいない、、、');
        cntPerson = 0;

    }
    check()
};

const check = () => {
    cntCheck = document.getElementById('check')
    cntCheck.textContent = cntPerson
}