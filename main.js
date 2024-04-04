fetch('app.json')
  .then(res => res.json())
  .then(data => {
    data.movies.forEach(movie => {
      console.log(movie.film);
    });
  })
