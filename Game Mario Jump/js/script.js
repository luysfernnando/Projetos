const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const gameover = document.querySelector('.gameover');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    console.log('loop');

    const pipePosition = pipe.offsetLeft;
    const marioPosition =  +window.getComputedStyle(mario).bottom.replace('px', '');

    //VERIFICA SE O MARIO ENCOSTOU NO CANO
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        
        //TRAVA A ANIMAÇÃO DO CANO
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        //TRAVA A ANIMAÇÃO DO MARIO
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        //MUDA A IMG DO MARIO PARA A DE GAME-OVER
        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        //EXIBE O LOGO DE GAME-OVER
        gameover.src = './images/game-over-logo.png';

        //PARA O LOOP
        clearInterval(loop);

    }
    
}, 10)

document.addEventListener('keydown', jump);