const POSTER_URL = 'https://image.tmdb.org/t/p/original/'
const API_KEY = 'd051c01aadbfe2f927c7a3cf42bec05a'

export default class MovieService {

   async getMovies(url) {
      const res = await fetch(url);

      const resData = await res.json()

      const movies = this.transformMovies(resData)

      return movies
   }

   transformMovies(data) {
      let movies = data.results
      let res = []

      for (let i = 5; i < 11; i++) {
         res.push(movies[i])
      }

      res = res.map(item => {
         return {
            lang: item.original_language,
            title: item.title,
            overview: item.overview,
            posterPath: POSTER_URL + item.poster_path,
            releaseDate: item.release_date,
            voteAverage: item.vote_average,
            voteCount: item.vote_count
         }
      });

      return res
   }

   async getMovieByName(name) {
      const queryName = transformName(name)

      const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${queryName}`)

      const resData = await res.json()

      const movie = this.transformMovie(resData)

      return movie
   }

   transformMovie(data) {
      const movie = data.results[0]

      return {
         lang: movie.original_language,
         title: movie.title,
         overview: movie.overview,
         posterPath: POSTER_URL + movie.poster_path,
         releaseDate: movie.release_date,
         voteAverage: movie.vote_average,
         voteCount: movie.vote_count
      }
   }
}

function transformName(name) {
   const res = name.split(' ')

   return res.join('+')
}