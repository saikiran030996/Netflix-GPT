  import { useDispatch} from "react-redux";
  import { API_OPTIONS } from "../utilis/constants";
  import { addNowPlayingMovies } from "../utilis/movieSlice";
  import { useEffect } from "react";
  
  // fetch data from TMDB API and update store 


  const useNowPlayingMovies = () =>{
  
  const dispatch = useDispatch();
  const getNowPlayingMoives = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1",API_OPTIONS);

    const json = await data.json();
    // console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  };
  useEffect(() => {
    getNowPlayingMoives();
  },[]) }


  export default useNowPlayingMovies;