//grab the presidents data from the file
import { movies } from "../data/movies.mjs";
console.log(movies);

//reference ID's from the file
const displayMovies = document.querySelector("#showMovies");

//Filters the movies

//response to btn-all being clicked
document.querySelector('#btn-all').addEventListener('click', () => {
    showFilteredMovies(movies)
})

//response to btn-action being clicked
document.querySelector('#btn-adventure').addEventListener('click', () => {
    /*this loops through all the movies, runs the filter on it to check if 
    movie.genre = adventure. If it does, it only shows the action movies */
    
    const  filteredMovies = movies.filter((movie) => movie.genre === "Adventure")
    filteredMovies(movies)
})

//shows all movies
function showFilteredMovies(filteredMovies) {
    /*this wipes out anything on the page
    so if you click a button multiple times,
    it doesn't recreate the list over and over again*/
    displayMovies.innerHTML = ""

    filteredMovies.forEach((movie) => {

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
};

// images user first sees when they visit site
showFilteredMovies(movies)