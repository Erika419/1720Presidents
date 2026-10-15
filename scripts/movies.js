//grab the presidents data from the file
import { movies } from "../data/movies.mjs";
console.log(movies);

//reference ID's from the file
const displayMovies = document.querySelector("#showMovies");

//path to movie photos
const pathStart = "http://resources.dgmuvu.com/movies/"

//response to btn-all being clicked
document.querySelector('#btn-all').addEventListener('click', (el) => {
    showFilteredMovies(movies)
    console.log(el.target.id)
    updateSubNav(el.target.id)
});

//response to btn-adventure being clicked
document.querySelector('#btn-adventure').addEventListener('click', (el) => {
    
    /*this loops through all the movies, runs the filter on it to check if 
    movie.genre = adventure. If it does, it only shows the action movies */
    const  filteredMovies = movies.filter((movie) => movie.genre.includes("Adventure"));
    showFilteredMovies(filteredMovies)
    updateSubNav(el.target.id)
    
});

//response to btn-science being clicked
document.querySelector('#btn-science').addEventListener('click', (el) => {
    
    /*this loops through all the movies, runs the filter on it to check if 
    movie.genre = adventure. If it does, it only shows the action movies */
    const  filteredMovies = movies.filter((movie) => movie.genre.includes("Science-Fiction"));
    showFilteredMovies(filteredMovies)
    updateSubNav(el.target.id)
});

//response to btn-romance being clicked
document.querySelector('#btn-romance').addEventListener('click', (el) => {
    
    /*this loops through all the movies, runs the filter on it to check if 
    movie.genre = adventure. If it does, it only shows the action movies */
    const  filteredMovies = movies.filter((movie) => movie.genre.includes("Romance"));
    showFilteredMovies(filteredMovies)
    updateSubNav(el.target.id)
});



//WAYFINDING on Buttons
function updateSubNav(buttonID) {
    //remove active class from all buttons
    const allButtons= document.querySelectorAll('.genreNav button')
    console.log(allButtons)
    allButtons.forEach((btn) => (btn.className=""));

    //add the active class to the current button
    document.querySelector(`#${buttonID}`).className= "current"
}

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
        movieImage.src= pathStart + movie.image;
        movieImage.src = movie.image;
        movieImage.alt = movie.title;
        movieImage.loading = "lazy";
        movieImage.width = 400;
        movieImage.height = 200;

        // Create the movie card
        const movieCard = document.createElement("section");
        movieCard.classList.add(...movie.genre.split(", "));

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