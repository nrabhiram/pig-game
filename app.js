/* 
This game consists of 2 players and starts with Player 1.
During the player's turn, the dice can be rolled as many times as desired until a 1 is rolled or the score is held.
If you roll a 1, you lose the round score and it is the next player's turn. 
Otherwise, the scoe you held will be added to the total score.
The first player to reach a total score of 100 points wins.
*/

var scores, roundScore, activePlayer, dice;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;
dice = Math.floor(Math.random() * 6) + 1;

document.querySelector('.dice').style.display = 'none';
document.getElementById('score-0').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-1').textContent = 0;

