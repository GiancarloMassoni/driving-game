var $car = document.querySelector('img');

document.addEventListener('keydown', rotate);

function rotate(event) {
  if (event.keyCode === 38) {
    $car.className = 'rotate-up';
  } else if (event.keyCode === 39) {
    $car.className = 'rotate-right';
  } else if (event.keyCode === 40) {
    $car.className = 'rotate-dwn';
  } else if (event.keyCode === 37) {
    $car.className = 'rotate-left';
  }
}
