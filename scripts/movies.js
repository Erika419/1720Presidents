//grab the presidents data from the file
import { movies } from "../data/movies.mjs";
console.log(movies);

//reference ID's from the file
const displayMovies = document.querySelector("#showMovies");

movies.forEach((movie) => {

    // Create the movie title
    const movieTitle = document.createElement("h2");
    movieTitle.innerText = movie.title;

    // Create the movie studio
    const movieStudio = document.createElement("p");
    movieStudio.innerText = `Studio: ${movie.studio}`;

    // Create the release date
    const movieRelease = document.createElement("p");
    movieRelease.innerText = `Release Date: ${movie.release}`;

    // Create the movie genre
    const movieGenre = document.createElement("p");
    movieGenre.innerText = `Genre: ${movie.genre}`;

    // Create the movie image
    const movieImage = document.createElement("img");
    movieImage.src = movie.image;
    movieImage.alt = movie.title;
    movieImage.loading = "lazy";
    movieImage.width = 300;

    // Create the movie card
    const movieCard = document.createElement("section");

    // Add everything to the movie card
    movieCard.appendChild(movieTitle);
    movieCard.appendChild(movieStudio);
    movieCard.appendChild(movieRelease);
    movieCard.appendChild(movieGenre);
    movieCard.appendChild(movieImage);
    
    // Add the movie card to the webpage
    displayMovies.appendChild(movieCard);
});