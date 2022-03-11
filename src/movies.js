// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const directorsArr = movies.map(function (eachMovie) {
    return eachMovie.director;
  });
  return directorsArr;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const filteredMovies = movies.filter(function (eachMovie) {
    if (
      eachMovie.director === 'Steven Spielberg' &&
      eachMovie.genre.includes('Drama')
    ) {
      return true;
    }
  });
  return filteredMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (!movies.length) {
    return 0;
  }

  let totalAverage = movies.reduce((a, b) => {
    if (b.score) {
      return a + b.score;
    } else {
      return a;
    }
  }, 0);

  return Number((totalAverage / movies.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  let dramaMoviesArr = movies.filter(function (eachMovie) {
    return eachMovie.genre.includes('Drama');
  });
  return scoresAverage(dramaMoviesArr);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let moviesArr = JSON.parse(JSON.stringify(movies));

  moviesArr.sort((a, b) => {
    if (a.year > b.year) {
      return 1;
    } else if (b.year > a.year) {
      return -1;
    } else {
      if (a.title > b.title) {
        return 1;
      } else if (b.title > a.title) {
        return -1;
      }
      return 0;
    }
  });
  return moviesArr;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const moviesArr = JSON.parse(JSON.stringify(movies));
  const sortedMoviesArr = moviesArr
    .sort((a, b) => {
      if (a.title > b.title) {
        return 1;
      } else if (a.title < b.title) {
        return -1;
      } else {
        return 0;
      }
    })
    .map((eachMovie) => eachMovie.title)
    .slice(0, 20);

  return sortedMoviesArr;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  // function that will take a string and will return the total minutes per hour as a number.
  function convertHours(hourString) {
    let calculateHour = hourString.split('h'); // split to divide the string in two. The first element will be the number as a string.
    return Number(calculateHour[0]) * 60; // return the hours in minutes
  }

  // function that will take a string and will return the minutes as a number.
  function convertMinutes(minuteString) {
    let calculateMinutes = minuteString.split('min'); // split to divide the string in two. The first element will be the number as a string.
    return Number(calculateMinutes[0]); // return the minutes
  }

  // function that will use both functions (convertHours & convertMinutes) to get the total amount of minutes
  function convertDuration(duration) {
    let timePieces = duration.split(' '); // split will divide the duration string into two strings (hours & minutes)

    // reduce to sum hours (in minutes) and minutes
    let minutes = timePieces.reduce((sum, onePiece) => {
      if (onePiece.includes('h')) {
        return sum + convertHours(onePiece);
      }
      return sum + convertMinutes(onePiece);
    }, 0);

    return minutes; // return total minutes
  }

  // map to add the newly found minutes amount as number to a new array
  let moviesHoursToMinArr = movies.map(function (eachMovie) {
    let fixedMovie = JSON.parse(JSON.stringify(eachMovie)); // deep clone to not mutate original
    fixedMovie.duration = convertDuration(fixedMovie.duration); // dot operator to change the value of the duration attribute with the result of calling the function convertDuration
    return fixedMovie;
  });

  return moviesHoursToMinArr; // return the new array
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {
  if (!movies.length) return null; // condition to pass test. 0 is a falsy value, so if the length is 0, then !0 is true.

  let masterObject = {}; // creating a new object with the years as keys and an array of movie objects as value.

  // a forEach that will iterate over movies and will add the atribute of the year
  movies.forEach((eachMovie) => {
    if (!masterObject[eachMovie.year]) {
      masterObject[eachMovie.year] = [eachMovie]; // to create the array with the movie object if the atribute doesn't exist
    } else {
      masterObject[eachMovie.year].push(eachMovie); // to add the movie to the array if the year atribute and the array already exist
    }
  });

  let highest = 0; // variable for the highest average rate
  let theActualYear; // variable for the year of the highest average rate

  // iterating over the masterObject with for in loop. for every year it will use the ratesAverage function created in iteration 3.
  for (let theYear in masterObject) {
    // conditional, if the average of the current iteration is higher than the highest variable, it will update both variables (highest & theActualYear)
    if (ratesAverage(masterObject[theYear]) > highest) {
      highest = ratesAverage(masterObject[theYear]);
      theActualYear = theYear;
    }
  }
  return `The best year was ${theActualYear} with an average rate of ${highest}`; // return the string as template literals
}

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
