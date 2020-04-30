const btn = document.querySelector('#button')
// document.querySelector(아이디)는 그 아이디의 태그를 가져온다.

btn.addEventListener('click', () => {
    let wordTag = document.querySelector('#word')
    let word = wordTag.textContent
    // .은 ~의를 의미하는 것 같다.
    let inputTag = document.querySelector('#input')
    let errorTag = document.querySelector('#error')
    let input = inputTag.value
    if (word[word.length - 1] === input[0]) {
        wordTag.textContent = input
        errorTag.textContent = ''
        inputTag.value = ''
        inputTag.focus()
    } else {
        errorTag.textContent = '땡'
        inputTag.value = ''
        inputTag.focus()
    }
})
