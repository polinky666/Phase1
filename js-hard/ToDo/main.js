const todo = document.getElementById('todo')
const addBtn = document.getElementsByClassName('add-btn')
const addtext = document.getElementById('add-area')

addBtn[0].addEventListener('click', () => {
    if (addtext.value === '') {
        alert('空欄です')
    } else {
        const newList = document.createElement('li')
        newList.textContent = addtext.value
        const clearBtn = document.createElement('button')
        clearBtn.textContent = '完了'
        clearBtn.addEventListener('click', () => {
            clearBtn.parentElement.remove()
        })
        newList.appendChild(clearBtn)
        todo.appendChild(newList)
        addtext.value = ''
    }
})
