const numberOfFilms = +prompt('Skolko filmov vi uze posmotreli?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt ('Odin iz poslednih prosmotrenyh vami filmov?', ''),
      b = prompt ('Na skolko vi ocenite ego?', ''),
      c = prompt ('Odin iz poslednih prosmotrenyh vami filmov?', ''),
      d = prompt ('Na skolko vi ocenite ego?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);