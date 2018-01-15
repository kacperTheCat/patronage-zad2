import setCounterOfTo from "./movies-counter.js";
import moviesStorage from "./movies-storage.js";

const MoviesStorage = new moviesStorage() //instancjonowanie
//klasy MoviesStorage
const myMovies = MoviesStorage.get()
const myMovie = MoviesStorage.get(13)

const addData = MoviesStorage.set(5, {data: "new datas"});
const removeMovie = MoviesStorage.remove(2)
console.log(myMovies)//tymczasowy spread
console.log(myMovie)// zwracanie filmu o podanym id
// console.log(addMovie)
console.log(addData)
console.log(removeMovie)

export default MoviesStorage