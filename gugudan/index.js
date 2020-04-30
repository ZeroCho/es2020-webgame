const r = document.querySelector('#result')

document.querySelector('#click').addEventListener('click', () => {
    const a = document.querySelector('#first').value
    const b = document.querySelector('#second').value
    if (a) { 
        if (b) {
            const c = a * b 
            r.textContent = c
        } else {
            r.textContent = '두 번째 값 입력해'
        }
    } else {
        r.textContent = '첫 번째 값 입력해'
    }
})
