const bar = document.querySelector('.menubar');
const openbar = document.querySelector('.menuclick');
const closebar = document.querySelector('.exit');

function open() {
  openbar.style.display = 'block';
  openbar.classList.toggle('open');
  bar.style.visibility = 'hidden';
  closebar.style.visibility = 'visible';
}

function close() {
  openbar.style.display = 'none';
  openbar.classList.remove('open');
  bar.style.visibility = 'visible';
  closebar.style.visibility = 'hidden';
}

bar.addEventListener('click', open);
closebar.addEventListener('click', close);
openbar.addEventListener('click', close);
