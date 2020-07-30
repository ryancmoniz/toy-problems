let canTwoMoviesFillFlight = (movieLengths, flightLength) => {
  const moviesSeen = new Set();

  for (let i = 0; i < movieLengths.length; i++) {
    const firstMovieLength = movieLengths[i];
    const desiredSecondMovieLength = flightLength - firstMovieLength;

    if (moviesSeen.has(desiredSecondMovieLength)) {
      return true;
    }
    moviesSeen.add(firstMovieLength);
  }

  return false;
};
