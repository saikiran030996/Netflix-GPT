  import { useDispatch} from "react-redux";
  import { API_OPTIONS } from "../utilis/constants";
  import {addPopularMovies } from "../utilis/movieSlice";
  import { useEffect } from "react";
  
  // fetch data from TMDB API and update store 


  const usePopularMovies = () =>{
  
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=2',API_OPTIONS);

    const json = await data.json();
    // console.log(json.results);
    dispatch(addPopularMovies(json.results));
  };
  useEffect(() => {
    getPopularMovies();
  },[]) }


  export default usePopularMovies;