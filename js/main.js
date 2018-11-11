const header = document.querySelector('.orientation');
const mainScreen = document.querySelector('.main_screen');

function handleOrientation(e) {

  alpha = Math.round(e.alpha);
  beta = Math.round(e.beta);
  gamma = Math.round(e.gamma);

  header.innerHTML = `Alpha: ${alpha} Beta: ${beta} Gamma: ${gamma}`;
  console.log('Orientation changed!', e);

}

window.addEventListener('deviceorientation', handleOrientation);
