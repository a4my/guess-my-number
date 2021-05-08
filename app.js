let secretNumber = Math.trunc(Math.random() * 20) + 1;
// const secretNumber = 3

let score = 20
let highScore = 0

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value)
  console.log(guess)

  if(!guess) {
    document.querySelector('.message').textContent = '⛔ No number!'
  } else if(guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct number, champ!!'
    document.querySelector('body').style.backgroundColor = '#60b347'
    document.querySelector('.number').style.width = '30rem'
    document.querySelector('.number').textContent = secretNumber

    if(score > highScore) {
      highScore = score
      document.querySelector('.highscore').textContent = highScore
    }

  } else if(guess > secretNumber) {
      if(score > 1) {
        document.querySelector('.message').textContent = '➕ Too high!'
        score--
        document.querySelector('.score').textContent = score
      } else {
        document.querySelector('.message').textContent = '💥 You lost, you sucker!'
        document.querySelector('.score').textContent = 0
        document.querySelector('body').style.backgroundColor = '#e74c3c'
        document.querySelector('.number').style.width = '30rem'
        document.querySelector('.number').textContent = secretNumber
      }
  } else if(guess < secretNumber) {
    if(score > 1) {
      document.querySelector('.message').textContent = '➖ Too low!'
      score--
      document.querySelector('.score').textContent = score
    } else {
      document.querySelector('.message').textContent = '💥 You lost, you sucker!'
      document.querySelector('.score').textContent = 0
      document.querySelector('body').style.backgroundColor = '#e74c3c'
      document.querySelector('.number').style.width = '30rem'
      document.querySelector('.number').textContent = secretNumber
    }
  }
})

document.querySelector('.again').addEventListener('click', function() {
  score = 20
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...'
  document.querySelector('.number').textContent = '?'
  document.querySelector('.guess').value = ''
  document.querySelector('.score').textContent = score
  document.querySelector('body').style.backgroundColor = '#222'
  document.querySelector('.number').style.width = '15rem'
})