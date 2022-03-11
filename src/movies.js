// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
// --- CATALÀ ---
// Retorna un array amb tots els directors.
// BONUS: Sembla que molts directors han fet diverses pel·lícules. Com podríem "netejar" aquest
// array per eliminar els duplicats?

function getAllDirectors(movies) {
  //we utilize map to get a new array as a return
  return movies.map((movie) => movie.director);
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
// --- CATALÀ ---
// Steven Spielberg. És el millor? - Quantes pelis de drama ha dirigit Steven Spielberg?
function howManyMovies(movies) {
  return movies.filter((movie) => {
    return (
      movie.genre.includes('Drama') && movie.director === 'Steven Spielberg'
    );
  }).length;
}
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
// --- CATALÀ ---
// La mitjana de puntuació. Extreu la mitjana de totes les puntuacions de les pel·lícules,
// amb dos decimals.
function scoresAverage(movies) {
  sumadeTot = movies.reduce((acc, movie) => {
    return movie.score + acc;
  }, 0);
  return sumadeTot / Number(movies.length.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
// --- CATALÀ ---
// Pel·lícules de drama. Extreu la mitjana de les Películes de drama.
function dramaMoviesScore(movies) {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
// --- CATALÀ ---
// Ordenar per any. Order per ordre ascendent (creixent) les pel·lícules.
function orderByYear(movies) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
// --- CATALÀ ---
// Ordre alfabètic - Ordena per títol i extreu un array amb només els 20 primers títols.
function orderAlphabetically(movies) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
// --- CATALÀ ---
// BONUS: Format de temps. Canvia la duració de les pel·lícules de hores a minuts.
function turnHoursToMinutes(movies) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
// --- CATALÀ ---
// BONUS: Millor mitjana per any.
function bestYearAvg(movies) {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
