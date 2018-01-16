import setCounterOfTo from "./movies-counter.js"
import moviesStorage from "./movies-storage.js"

const MoviesStorage = new moviesStorage() //instancjonowanie
//klasy MoviesStorage

const myMovies = MoviesStorage.get()
const myMovie = MoviesStorage.get(13)
const addMovie = MoviesStorage.set({title: 'example movie',year: 2000, gerne: 'drama', summary: 'blabla', seen: "T", id: "1234567"})
const addData =  MoviesStorage.set(5, {data: "new datas"})
const removeMovie = MoviesStorage.remove(2)

const totalMovies = document.querySelectorAll('.moviesCounter')
const movieList = document.querySelector('#moviesList')
const movies = JSON.parse(localStorage.movies)
const total = movies.length
let seenCount = 0;

const totalseen = document.querySelector("#moviesCounterSeen")
movies.map((m) => {
    (m.seen === "T") ? seenCount++ : null
  });
  
 const addSeen = function(t) {
    if (t === undefined) return;
    if (t.checked) seenCount++;
    else seenCount--;
    totalMovies[1].innerHTML = seenCount;
  }

const addtotal = function(){
    if(movieList === null){
        return false
    }
    else{
        movieList.innerHTML = MoviesStorage.get();
    }
}

addtotal()

setCounterOfTo(totalMovies[0], total)
setCounterOfTo(totalMovies[1], seenCount)


export default MoviesStorage