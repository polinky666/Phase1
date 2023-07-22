const word1 = '斎藤さんだぞぉぉぉぉぉ';
const word2 = 'ぺっぺっぺー';

const jadge = () => 5 > (Math.random() * 10)
const word = (b) => b ? word1 : word2

const setBtn = function () {
    const saito = jadge()
    window.confirm(word(saito)) ? alert(word(saito)) : alert(word(!saito))

    /*
    if (foo < 5) {
        const result = window.confirm(word1);
        if (result) {
            alert(word1);
        } else {
            alert(word2);
        }
    } else {
        const result = window.confirm(word2);
        if (result) {
            alert(word2);
        } else {
            alert(word1);
        }
    }
    */
};