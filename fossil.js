document.getElementById('certificate-button').addEventListener('click', () => {
  document.getElementById('certificate-overlay').classList.add('show');
  document.body.classList.add('blur');
});
document.getElementById('close-certificate-overlay').addEventListener('click', () => {
  document.getElementById('certificate-overlay').classList.remove('show');
  document.body.classList.remove('blur');
});
document.getElementById('ammonite-button').addEventListener('click', () => {
  document.getElementById('ammonite-overlay').classList.add('show');
  document.body.classList.add('blur');
});
document.getElementById('close-ammonite-overlay').addEventListener('click', () => {
  document.getElementById('ammonite-overlay').classList.remove('show');
  document.body.classList.remove('blur');
});
document.getElementById('snake-button').addEventListener('click', () => {
  document.getElementById('snake-overlay').classList.add('show');
  document.body.classList.add('blur');
});
document.getElementById('close-snake-overlay').addEventListener('click', () => {
  document.getElementById('snake-overlay').classList.remove('show');
  document.body.classList.remove('blur');
});
document.getElementById('credits-button').addEventListener('click', () => {
  document.getElementById('credits-overlay').classList.add('show');
  document.body.classList.add('blur');
});
document.getElementById('close-credits-overlay').addEventListener('click', () => {
  document.getElementById('credits-overlay').classList.remove('show');
  document.body.classList.remove('blur');
});