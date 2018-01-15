import moviesStorage from "./movies-storage.js"
import MoviesStorage from "./index.js"

const form = document.querySelector("form");
const checkbox = document.querySelector(".add-movie__seen")


document.querySelector("form").onsubmit = function(form) {


//  let value  = document.querySelector(".add-movie__seen").value



  
  const checkbox = document.querySelector(".add-movie__seen")
  const  checkboxValue = checkbox.checked ? 'T' : 'F'
  

  const  newMovie = {

    
    title: document.querySelector(".add-movie__title").value,
    year: document.querySelector(".add-movie__year").value,
    genre: document.querySelector(".add-movie__genre").value,
    summary: document.querySelector(".add-movie__summary").value,
    id: document.querySelector(".add-movie__id").value,
    seen: checkboxValue

  };
if()
  MoviesStorage.set(newMovie);
  MoviesStorage.get(); // testowo
  
  console.log(checkboxValue)
  return false;
};
