/* 
This game consists of 2 players and starts with Player 1.
During the player's turn, the dice can be rolled as many times as desired until a 1 is rolled or the score is held.
If you roll a 1, you lose the round score and it is the next player's turn. 
Otherwise, the scoe you held will be added to the total score.
The first player to reach a total score of 100 points wins.
*/

var scores, roundScore, activePlayer, gamePlaying;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;
gamePlaying = true;

document.querySelector('.dice').style.display = 'none';
document.getElementById('score-0').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-1').textContent = 0;

document.querySelector('.btn-roll').addEventListener('click', function() {
       if (gamePlaying = true) {
            // 1.Generating a random number when the dice is rolled
        var dice = Math.floor(Math.random() * 6) + 1;

        // 2.Display the result 
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        // 3. Updating the round score if the number rolled is NOT 1
        if (dice !== 1) {
            roundScore += dice;
            document.getElementById('current-' + activePlayer).textContent = roundScore;
        } else {
            // Next player
            nextPlayer();
        }
       }
})

document.querySelector('.btn-hold').addEventListener('click', function(){
    if (gamePlaying = true) {
        // 1.Updating the total score
        scores[activePlayer] += roundScore;

        // 2.Updating the UI
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
        document.getElementById('current-' + activePlayer).textContent = 0;

        // 3. What happens if a player wins the game
        if (scores[activePlayer] >= 20) {
            document.getElementById('name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            // Next player
            nextPlayer();
        }
    }
})

function nextPlayer() {
    activePlayer === 0? activePlayer = 1: activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', function() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
})




