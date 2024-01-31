import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

import Header from "./Header"
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


const Browse = () => {

  useNowPlayingMovies();


  return (
  <div>
      <Header></Header>
      <MainContainer></MainContainer>
      <SecondaryContainer></SecondaryContainer>
      {/* 
            MainContainer
              -VideoBackground
              -VideoTitle
            SecondaryContainer
              -Movies List * n
                -cards * n

      
      
      
      */}
    </div>
  )
}

export default Browse;