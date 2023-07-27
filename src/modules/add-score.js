import refresh from './refresh.js';
import url from './url.js';

const addScore = async (user, score) => {
  const add = {user, score}

  await fetch(url, {
    method: 'POST',
    body: JSON.stringify(add),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  await refresh();

  document.getElementById('name').value = '';
  document.getElementById('score').value = '';
}

export default addScore;