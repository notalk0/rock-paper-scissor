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
    let playerChoice = 'rock';
    let computerChoice = 'rock';

    const options = document.querySelectorAll('.options button');
    const hands = document.querySelectorAll('.hands img');

    hands.forEach(hand => {
      hand.addEventListener('animationstart', function() {
        updateImg('rock', 'rock');
      });

      hand.addEventListener('animationend', function() {
        hand.style.animation = '';
      });
    });

    options.forEach(option => {
      option.addEventListener('click', function() {
        playerChoice = this.textContent;
        computerChoice = computerMakeChoice();
        addAnimation();

        setTimeout(() => {
          updateImg(playerChoice, computerChoice);
          compareHands(playerChoice, computerChoice);
        }, 2000);
      });
    });
  })();

  const computerMakeChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)]; // 0, 1, 2
  };

  const updateImg = (player, computer) => {
    const playerHand = document.querySelector('.player-hand');
    const computerHand = document.querySelector('.computer-hand');

    playerHand.src = `./assets/${player}.png`;
    computerHand.src = `./assets/${computer}.png`;
  };

  const addAnimation = () => {
    const playerHand = document.querySelector('.player-hand');
    const computerHand = document.querySelector('.computer-hand');

    playerHand.style.animation = 'shakePlayer 2s ease';
    computerHand.style.animation = 'shakeComputer 2s ease';
  };

  const updateText = code => {
    const winner = document.querySelector('.winner');
    const playerScore = document.querySelector('.player-score p');
    const computerScore = document.querySelector('.computer-score p');

    if (code === 0) {
      winner.textContent = 'It is a tie';
    } else if (code === 1) {
      winner.textContent = 'Player wins!';
      playerScore.textContent = ++pScore;
    } else if (code === -1) {
      winner.textContent = 'Computer wins!';
      computerScore.textContent = ++cScore;
    }
  };

  const compareHands = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
      updateText(0);
      return;
    }

    // Check who win
    let isPlayerWin =
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper');

    if (isPlayerWin) {
      updateText(1);
    } else {
      updateText(-1);
    }

    return;
  };
})();
