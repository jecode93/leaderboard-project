import './css/global.css';
import './css/styles.css';
import addScore from './modules/add-score';
import refresh from './modules/refresh';
import { saveData } from './modules/saveData.js';

const refreshBtn = document.querySelector('.refresh');
const submitBtn = document.querySelector('.submit');

refreshBtn.addEventListener('click', () => {
  refresh();
});

submitBtn.addEventListener('click', async (event) => {
  event.preventDefault();
  const name = document.getElementById('name');
  const score = document.getElementById('score');
    await addScore(name.value, score.value);
  }
);

// Preserve input in localStorage for user comfort
document.querySelector('#name').onkeyup = saveData;
document.querySelector('#score').onkeyup = saveData;