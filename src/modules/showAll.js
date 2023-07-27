import showScore from './showScore.js';

const showAll = (list) => {
  const scoreList = document.querySelector('.scores-items');
  scoreList.innerHTML = '';
  list = list.sort((x, y) => x.score - y.score);
  list.forEach((record) => {
    const newScore = showScore(record);
    scoreList.prepend(newScore);
  });
};

export default showAll;