(function() {
  let pScore = 0;
  let cScore = 0;

  // Start the Game
  (function() {
    const playBtn = document.querySelector('.intro button');
    const introScreen = document.querySelector('.intro');
    const match = document.querySelector('.match');

    playBtn.addEventListener('click', () => {
      introScreen.classList.add('fadeOut');
      match.classList.add('fadeIn');
    });
  })();

  // Play Match
  (function() {
    const options = document.querySelectorAll('.options button');
    const playerHand = document.querySelector('.player-hand');
    const computerHand = document.querySelector('.computer-hand');

    // Computer Options
    const computerOptions = ['rock', 'paper', 'scissors'];

    options.forEach(option => {
      option.addEventListener('click', function() {
        // Computer Choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        // Change image
        playerHand.src = `./assets/${this.textContent}.png`;
        computerHand.src = `./assets/${computerChoice}.png`;

        // Compare Hands
        compareHands(this.textContent, computerChoice);
      });
    });
  })();

  const compareHands = (playerChoice, computerChoice) => {
    // Update Text
    const winner = document.querySelector('.winner');
    const playerScore = document.querySelector('.player-score p');
    const computerScore = document.querySelector('.computer-score p');

    if (playerChoice === computerChoice) {
      winner.textContent = 'It is a tie';
      return;
    }

    let isPlayerWin =
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper');

    winner.textContent = `${isPlayerWin ? 'Player' : 'Computer'} Wins!`;

    // Update Score
    if (isPlayerWin) {
      playerScore.textContent = ++pScore;
    } else {
      computerScore.textContent = ++cScore;
    }

    return;
  };
})();
