import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utilis/constants";
import { addTrendingMovies } from "../utilis/movieSlice";
import { useEffect } from "react";

const useTrendingMovies = () => {
  const dispatch = useDispatch();

  const getTrendingMovies = async () => {
    try {
      // Construct the URL with API key and other parameters
      const apiUrl = 'https://api.themoviedb.org/3/movie/top_rated?page=1' + API_OPTIONS;

      // Use fetch with the constructed URL
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const json = await response.json();
      console.log(json);
      dispatch(addTrendingMovies(json.results));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getTrendingMovies();
  }, []);
};

export default useTrendingMovies;

