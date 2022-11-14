import axios from "axios";

const API_HOST = "https://www.omdbapi.com/?apikey=b502738f";

export const loadMovies = async (searchTerm = "matrix") => {
  const response = await axios.get(`${API_HOST}&s=${searchTerm}`);
  const movies = response.data.Search;

  const filteredMovies = movies
    .filter((movie) => Number(movie.Year) > 2002)
    .map(({ Title, Year }) => `${Title} - ${Year}`);

  console.log({ filteredMovies });

  return filteredMovies;
};
