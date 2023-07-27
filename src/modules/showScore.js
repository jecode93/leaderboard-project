const showScore = (record) => {
  const li = document.createElement('li');
  const name = document.createElement('span');
  const score = document.createElement('span');

  name.textContent = record.user;
  name.textContent += ': ';
  name.classList.add('player');
  score.textContent = record.score;
  score.classList.add('player-score');
  li.classList.add('score-item');
  li.appendChild(name);
  li.appendChild(score);

  return li;
};

export default showScore;