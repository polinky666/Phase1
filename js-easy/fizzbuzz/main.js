let i = 0;

const showNum = document.getElementById('showNum');
showNum.innerHTML = i;

const fizzBtn = function () {
    i += 1;
    if (i % 3 === 0) {
        showNum.innerHTML = 'fizz';
    } else {
        alert('ぶっぶー');
        location.reload();
    }
};

const buzzBtn = function () {
    i += 1;
    if (i % 5 === 0) {
        showNum.innerHTML = 'buzz';
    } else {
        alert('ぶっぶー');
        location.reload();
    }
};

const fizzbuzzBtn = function () {
    i += 1;
    if ((i % 3 === 0) & (i % 5 === 0)) {
        showNum.innerHTML = 'fizzbuzz';
    } else {
        alert('ぶっぶー');
        location.reload();
    }
};

const numBtn = function () {
    i += 1;
    if (i % 3 === 0 || i % 5 === 0) {
        alert('ぶっぶー');
        location.reload();
    }
    showNum.innerHTML = i;
};


let v = 0;
const rewriteNum = document.getElementById('rewriteNum');
rewriteNum.innerHTML = v;

const rewriteCntUp = function () {
    v += 1;
    if (v % 3 === 0 && v % 5 === 0) {
        rewriteNum.innerHTML = 'fizzbuzz';
    } else if (v % 3 === 0) {
        rewriteNum.innerHTML = 'fizz';
    } else if (v % 5 === 0) {
        rewriteNum.innerHTML = 'buzz';
    } else {
        rewriteNum.innerHTML = v;
    }
};