import moviesStorage from "./movies-storage.js"
import MoviesStorage from "./index.js"
import setCounterOfTo from "./movies-counter.js"


const form = document.querySelector("form");
// const checkbox = document.querySelector(".add-movie__seen");

document.querySelector("form").onsubmit = function(form) {
  const titleVal = document.querySelector(".add-movie__title").value;
  const yearVal = document.querySelector(".add-movie__year").value;
  const genreVal = document.querySelector(".add-movie__genre").value;
  const summaryVal = document.querySelector(".add-movie__summary").value;
  const idVal = document.querySelector(".add-movie__id").value;

  const checkbox = document.querySelector(".add-movie__seen");
  const checkboxValue = checkbox.checked ? "T" : "F";
 
  const newMovie = {
    title: titleVal,
    year: yearVal,
    genre: genreVal,
    summary: summaryVal,
    id: idVal,
    seen: checkboxValue
  };
  
  this.movies = JSON.parse(localStorage.movies);
  let movie = this.movies.map(movie => movie.title);
  let titleArray = [];
  titleArray.push(movie);

  if (titleVal === "" || yearVal === "" || genreVal === "") {
    if (titleVal === "") {
      alert("fill the title");
    } else if (yearVal === "") {
      alert("fill the year");
    } else if (genreVal === "") {
      alert("fill the genre");
    }
  } else if (yearVal <= 1000 || yearVal >= 10000) {
    alert("wrong date");
  } else if (this.movies.some(movie => movie.title === titleVal)) {
    alert("the film with the given title exists");
  } else {
    MoviesStorage.set(newMovie)
    form.reset();
  }

  return false;
};