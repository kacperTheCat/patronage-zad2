import setCounterOfTo from "./movies-counter.js";
import moviesStorage from "./movies-storage.js";

const MoviesStorage = new moviesStorage(); //instancjonowanie klasy MoviesStorage
const my_movie = MoviesStorage.get(13); 
const remove_movie = MoviesStorage.remove(2)
console.log(my_movie)// zwracanie filmu o podanym id 
// setCounterOfTo();//test modułów 
console.log(remove_movie)