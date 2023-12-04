import './App.css';
import React, { Component }  from 'react';
import Row from "./Row";
import requests from "./requests";
import Banner from './Banner';
import Nav from './Nav'

function App() {
  return (
    <div className="App">
        <Nav/>
        <Banner/>
        <Row title = "NETFLIX ORIGINALS"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow/>
        <Row title = "trending now"
         fetchUrl={requests.fetchTrending}/>
        <Row title = "top rates"
        fetchUrl={requests.fetchTopRateMovies}/>
         <Row title = "Action movies"
        fetchUrl={requests.fetchActionMovies}/>
         <Row title = "Comedy movies"
        fetchUrl={requests.fetchComedyMovies}/>
         <Row title = "Horror movies"
        fetchUrl={requests.fetchHorrorMovies}/>
         <Row title = "Romance movies"
        fetchUrl={requests.fetchRomanceMovies}/>
         <Row title = "Documentaries movies"
        fetchUrl={requests.fetchDocumentaries}/>
    </div>
    
  );
}

export default App;
