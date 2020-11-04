var scores, currentScore, active;
init();

document.querySelector('.btn').addEventListener('click', function(){
    var dice = Math.floor(Math.random() *6) + 1; // For random number 

    var DiceDom = document.querySelector('.dice');
    DiceDom.style.display = 'block';
    DiceDom.src = 'dice-' + dice + '.png';

    if(dice !== 1){
        currentScore += dice;
        document.querySelector('#score-' + active).textContent = currentScore;
    }
    else{
        nextPlayer();
    }


});

    document.querySelector('.btn1').addEventListener('click', function(){
        scores[active] += currentScore;
        document.querySelector('#pscore-' + active).textContent = scores[active];

        if(scores[active] >= 10){
            document.querySelector('.name-' + active ).classList.add('winner');
            document.querySelector('.name-' + active ).textContent = 'WINNER!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.btn').classList.add('disabled');
        }
        else{
            nextPlayer();

        }

        nextPlayer()
    });
    document.querySelector('.new-mode').addEventListener('click', init);

function nextPlayer(){
    active === 0 ? active = 1 : active = 0;
        currentScore = 0;

        document.getElementById('score-0').textContent = '0';
        document.getElementById('score-1').textContent = '0';
        
        document.querySelector('.player1').classList.toggle('active');
        document.querySelector('.player2').classList.toggle('active');

        document.querySelector('.dice').style.display = 'none';
        
};

function init(){
    scores = [0,0];
    currentScore = 0;
    active = 0;
    
    document.querySelector('.dice').style.display = 'none';
    
    document.getElementById('pscore-0').textContent = '0';
    document.getElementById('pscore-1').textContent = '0';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.querySelector('.name-0' ).textContent = 'player1';
    document.querySelector('.name-1' ).textContent = 'player2';
    document.querySelector('.name-0').classList.remove('winner');
    document.querySelector('.name-1').classList.remove('winner');
    document.querySelector('.btn').classList.remove ('disabled');
}


   

