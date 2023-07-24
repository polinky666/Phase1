let passWord = 'aaaaa'

const nowPassword = document.getElementById('nowPassword')
nowPassword.textContent = passWord
const confirmPassword = document.getElementById('confirmPassword')
const newPassword = document.getElementById('newPassword')
const setPassword = document.getElementById('setPassword')

const validation = (passStr) => {
    if (!passStr.match(/^\d{3}-?\d{4}$/g)) {
        return 'パスワードは###-####形式にして下さい'
    } else if (passStr.match(/(.)\1/)) {
        return '連続して同じ数字は使えません'
    } else if (passStr.match(/123/g)) {
        return '123を含むパスワードは登録できません'
    }
    return false
}

setPassword.addEventListener('click', () => {
    if (passWord !== confirmPassword.value) {
        alert('パスワードが違います')
    } else if (passWord === newPassword.value) {
        alert('同じパスワードは使えません')
    } else if (newPassword.value.length < 8) {
        alert('パスワードは8文字以上にして下さい')
    } else {
        let newPass = newPassword.value
        let valid = validation(newPass)
        if (valid) {
            alert(valid)
        } else {
            passWord = newPassword.value

            alert(`パスワードは"${passWord}"に変更されました`)
            nowPassword.textContent = passWord
        }
    }

})