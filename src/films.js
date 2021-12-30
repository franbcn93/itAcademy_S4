console.log('Inici Sprint 4');
// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = [];
  array.map((each) => result.push(each.director));
  console.log('EXERCICE 1 ->', result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = [];

  result = array.filter((each) => director == each.director);

  console.log('EXERCICE 2 ->', result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function averageScore(array) {
  let score = 0;

  let allScores = array.map((item) => item.score);
  let allItems = allScores.length;

  const reducer = (previousValue, currentValue) => previousValue + currentValue;

  score = allScores.reduce(reducer) / allItems;

  console.log(allScores, allItems, score);

  return score;
}

function moviesAverageOfDirector(array, director) {
  let result = averageScore(getMoviesFromDirector(array, director));

  return result;
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  let result = [...array];
  result = result.map((el) => el.title);
  // First order by title
  result.sort((a, b) => {
    return a < b ? -1 : 1;
  });
  // Just the first 20 Elements
  result.length > 20 ? (result = result.slice(0, 20)) : null;
  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let result = [...array];
  result = result.sort((a, b) => {
    // Comprovem que estigui ordenat per any
    if (a.year > b.year) return 1;
    if (a.year < b.year) return -1;
    // Comprovem que el titol també estigui alfabeticament
    if (a.title > b.title) return 1;
    if (a.title < b.title) return -1;
  });

  return result;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  let result = averageScore(getMoviesFromCategory(array, category));

  return result;
}

function getMoviesFromCategory(array, category) {
  let result = array.filter(
    (movie) =>
      movie.genre.some((element) => element === category) &&
      typeof movie.score !== 'string'
  );
  return result;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  let result = [];

  array.map((el) => {
    let time = el.duration.split('h ');

    let minutes =
      parseInt(time[0]) * 60 +
      (el.duration.indexOf('min') === -1
        ? 0
        : parseInt(time[1].split('min')[0]));
    result.push({ ...el, duration: minutes });
  });
  console.log(result);

  return result;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  let movies = array.filter((film) => film.year == year);

  let result = movies.reduce((a, b) =>
    a.score > b.score ? a : a.score < b.score ? b : b
  );
  return [result];
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}
