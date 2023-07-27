
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
  fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      name: nameOfTheGame,
    }),
    headers: { 
      'Content-type': 'application/json; charset=UTF-8',
    }
  })
  .then((response) => response.json())
  .then((json) => console.log(json));