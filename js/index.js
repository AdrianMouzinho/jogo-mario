const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');

const jump = () => {
  mario.classList.add('mario-jump');

  setTimeout(() => {
    mario.classList.remove('mario-jump');
  }, 500);
}

const loop = () => {
  const pipeLeft = pipe.offsetLeft;
  const pipeHeight = pipe.height;
  const marioBottom = window.getComputedStyle(mario).bottom.replace('px', '');
  const cloudsLeft = clouds.offsetLeft;


  if(pipeLeft <= 140 && pipeLeft > 0 && marioBottom <= pipeHeight) {

    pipe.style.animation = 'none';
    pipe.style.left = `${pipeLeft}px`;
    
    mario.style.animation = 'none';
    mario.style.bottom = `${marioBottom}px`;
    mario.src = './images/morreu.png';
    mario.style.width = '60px';
    mario.style.marginLeft = '80px';
    
    clouds.style.animation = 'none';
    clouds.style.left = `${cloudsLeft}px`;

    clearInterval(loop);

  }
}

setInterval(loop, 10);

document.addEventListener('keydown', jump);