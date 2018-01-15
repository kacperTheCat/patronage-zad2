const moviesArr = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    year: 1994,
    genre: "drama",
    summary:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    seen: "T"
  },
  {
    id: 2,
    title: "The Godfather",
    year: 1972,
    genre: "crime",
    summary:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    seen: "T"
  },
  {
    id: 3,
    title: "The Dark Knight",
    year: 2008,
    genre: "action",
    summary:
      "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham, the Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    seen: "T"
  },
  {
    id: 5,
    title: "12 Angry Men",
    year: 1957,
    genre: "drama",
    summary:
      "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
    seen: "F"
  },
  {
    id: 8,
    title: "Schindler's List",
    year: 1993,
    genre: "biography",
    summary:
      "In German-occupied Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazi Germans.",
    seen: "F"
  },
  {
    id: 13,
    title: "Pulp Fiction",
    year: 1994,
    genre: "crime",
    summary:
      "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    seen: "T"
  },
  {
    id: 21,
    title: "The Good, the Bad and the Ugly",
    year: 1966,
    genre: "western",
    summary:
      "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
    seen: "F"
  }
];

export default class MoviesStorage {
  constructor() {

      this.movies = JSON.parse(localStorage.movies);
    if (localStorage.movies && Array.isArray(localStorage.movies)) {
      JSON.parse(localStorage.movies);
    } else {
      localStorage.movies = JSON.stringify(moviesArr); //object -> string
    }
  }

  get(id) {
    if (arguments.length == 0) {
      let movieList = this.movies.map((m) => `<li>
      title: ${m.title} <br>
      year: ${m.year} <br>
      genre: ${m.genre} <br>
      summary: ${m.summary}
      <br>
      seen
      <input id=${m.id} onChange="addSeen(this)" type='checkbox' ${(m.seen === "T") ? "checked" : "F"}></input>
   </li>
   `);

        return movieList;
    }

      else if (arguments.length == 1) {
      const movie = this.movies.find(movie => movie.id === id);

      return movie;

    }
  }

  set(id, data) {
    if (typeof data === "undefined") data = id;

    if (arguments.length == 1) {
      let newMovie = data;
      this.movies.push(newMovie);
      localStorage.setItem("movies", JSON.stringify(this.movies));

      return this.movies;

    } else if (arguments.length == 2) {
      let movie = this.movies.find(movie => movie.id === id);
      let newData = { data };
      Object.assign(movie, data);//zamienić na spread
      return movie;
    }
  }

  remove(id) {
    const movieIndex = this.movies.findIndex(movie => movie.id === id);
    const newMovies = [
      ...this.movies.slice(0, movieIndex),
      ...this.movies.slice(movieIndex + 1)
    ];

    return newMovies; //usuwa film o podanym id

  }
}
