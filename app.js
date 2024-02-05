'use strict';
{
    
    const hands = [
        'rock',
        'scissors',
        'paper',
    ];

    function cpuHand(hand) {
        let pElement = document.querySelector('p');
        let result = document.querySelector('#result');
        let r_math = Math.floor(Math.random()*hands.length);
        let enemyHands = hands[r_math];
        pElement.textContent = enemyHands;
        if ( hand === enemyHands ) {
            result.textContent = 'draw';
        } else if ( hand === 'scissors' && enemyHands === 'paper' ) {
            result.textContent = 'win';
        } else if ( hand === 'paper' && enemyHands === 'rock' ) {
            result.textContent = 'win';
        } else if ( hand === 'rock' && enemyHands === 'scissors' ) {
            result.textContent = 'win';
        } else {
            result.textContent = 'lose';
        }

    }
    const rockHand = document.querySelector('#hands .rock-hand');
    rockHand.addEventListener('click', function() {
        cpuHand(hands[0]);
    },false);
    const scissorsHand = document.querySelector('#hands .scissors-hand');
    scissorsHand.addEventListener('click', function() {
        cpuHand(hands[1]);
    },false);
    const paperHand = document.querySelector('#hands .paper-hand');
    paperHand.addEventListener('click', function() {
        cpuHand(hands[2]);
    },false);
    
}