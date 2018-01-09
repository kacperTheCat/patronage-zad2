import setCounterOfTo from "./movies-counter.js";
import moviesStorage from "./movies-storage.js";

const MoviesStorage = new moviesStorage(); //instancjonowanie klasy MoviesStorage
const my_movies = MoviesStorage.get(2);
console.log(my_movies);
setCounterOfTo();
