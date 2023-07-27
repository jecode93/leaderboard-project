const saveData = () => {
  const name = document.getElementById('name');
  const score = document.getElementById('score');
  const dataInput = {
    name: name.value,
    score: score.value,
  };
  localStorage.setItem('madridGame', JSON.stringify(dataInput));
};

const getData = () => {
  const name = document.getElementById('name');
  const score = document.getElementById('score');
  name.value = JSON.parse(localStorage.getItem('madridGame').name) || '';
  score.value = JSON.parse(localStorage.getItem('madridGame').score) || '';
};

export { saveData, getData };