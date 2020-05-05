const input = document.querySelector('#input');
const check = document.querySelector('#check');
const logs = document.querySelector('#logs');

let numbers = []
for (let n = 0; n <= 9; n += 1) {
    numbers.push(n)
}
let answer = []

for (let n = 0; n <= 3; n += 1) {
    const index = Math.floor(Math.random() * numbers.length) // 0 ~ 9 정수
    answer.push(numbers[index])
    numbers.splice(index, 1)
}
console.log(answer)
// '3046',   '4316'

let count = 0
check.addEventListener('click', () => {
    const value = input.value // 문자열 ex) '3046' true    truthy
    // 0, '', NaN, false, null, undefined  -> falsy value
    if (value && value.length === 4) { // 앰퍼센드 AND 연산자 / 보호연산자
        if (answer.join('') === value) {
            logs.textContent = 'HR'
        } else {
            console.log('다르다');
            let strike = 0;
            let ball = 0;
            for (const [aIndex, aNumber] of answer.entries()) {
                for (const [iIndex, iString] of input.value.split('').entries()) {
                    if (aNumber === Number(iString)) {
                        if (aIndex === iIndex) {
                            strike += 1
                        } else {
                            ball += 1
                        }
                    }
                }
            }
            logs.append(`${input.value}: ${strike} strike ${ball} ball`, document.createElement('br'))
            if (count > 10) {
                logs.appendChild(document.createTextNode(`Game Over: ${answer.join('')}`))
            } else {
                count += 1
            }
        }
    }
});
