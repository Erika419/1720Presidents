//grab the presidents data from the file
import { movies } from "../data/movies.mjs";

//reference ID's from the file
const displayMovies = document.querySelector("#allmovies");

movies.forEach((movie) => {

    // Create the movie title
    const movieTitle = document.createElement("h2");
    movieTitle.textContent = movie.title;

    // Create the movie studio
    const movieStudio = document.createElement("p");
    movieStudio.textContent = `Studio: ${movie.studio}`;

    // Create the release date
    const movieRelease = document.createElement("p");
    movieRelease.textContent = `Release Date: ${movie.release}`;

    // Create the movie genre
    const movieGenre = document.createElement("p");
    movieGenre.textContent = `Genre: ${movie.genre}`;

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
    movieCard.appendChild(movieImage);
    movieCard.appendChild(movieStudio);
    movieCard.appendChild(movieGenre);
    movieCard.appendChild(movieRelease);

    // Add the movie card to the webpage
    displayMovies.appendChild(movieCard);
});