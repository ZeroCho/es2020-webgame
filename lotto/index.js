const candidate = Array(45).fill().map((v, i) => i + 1);
const shuffle = [];
while (candidate.length > 0) {
  const random = Math.floor(Math.random() * candidate.length);
  const spliceArray = candidate.splice(random, 1);
  const value = spliceArray[0];
  shuffle.push(value);
}
console.log(shuffle);
const winBalls = shuffle.slice(0, 6).sort((p, c) => p - c);
const bonus = shuffle[6];
console.log(winBalls);
console.log(bonus);

function colorize(number, tag) {
  if (number <= 10) {
    tag.style.backgroundColor = 'red';
    tag.style.color = 'white';
  } else if (number <= 20) {
    tag.style.backgroundColor = 'orange';
  } else if (number <= 30) {
    tag.style.backgroundColor = 'yellow';
  } else if (number <= 40) {
    tag.style.backgroundColor = 'blue';
    tag.style.color = 'white';
  } else {
    tag.style.backgroundColor = 'green';
    tag.style.color = 'white';
  }
}

const resultTag = document.querySelector('#result');
// for (let i = 0; i < 6; i++) { // 클로저 문제는 let 나오면서 X
//   setTimeout(() => {
//     const ball = document.createElement('div');
//     ball.className = 'ball';
//     colorize(winBalls[i], ball);
//     ball.textContent = winBalls[i];
//     resultTag.appendChild(ball);
//   }, 1000 * (i + 1))
// }
winBalls.forEach((number, index) => {
  setTimeout(() => {
    const ball = document.createElement('div');
    ball.className = 'ball';
    colorize(number, ball);
    ball.textContent = number;
    resultTag.appendChild(ball);
  }, 1000 * (index + 1));
});

const bonusTag = document.querySelector('#bonus');
setTimeout(() => {
  const bonusBall = document.createElement('div');
  bonusBall.className = 'ball';
  colorize(bonus, bonusBall);
  bonusBall.textContent = bonus;
  bonusTag.appendChild(bonusBall);
}, 7000);
