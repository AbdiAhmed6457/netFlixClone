import React, { useEffect,useState } from 'react'
import "./Banner.css";
import axios from './axios'; 
import requests from "./requests"
function Banner() {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(
                request?.data.results[
                    Math.floor(Math.random() * request.data.results.length)
                ]
    );
            return request;
        }
            fetchData();
        
    }, [])

    function truncate(str,n){
        return str?.length > n ? str.substr(0,n-1) + "..." : str;
    }
  return (
   <header className = "cover"
 style={{
    backgroundSize: "cover",
    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
    backgroundPosition: "center center",
 }}
 >
 <div className="banner_contents">
    <h1 className='banner_title'>
       {movie?.title || movie?.name || movie.original_name}
    </h1>
    <div className = "banner_buttons">
        <button className='banner_button'>play</button>
        <button className='banner_button'>my list</button>
    </div>
    <div className='banner_descriptions'>
        <h1>{truncate(movie?.overview, 150 )}</h1>
    </div>
 </div>
 <div className='banner_fadeBotton'/>

</header>
  )
}

export default Banner