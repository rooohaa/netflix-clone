import { createStore } from 'vuex'

export default createStore({
   state: {
      userId: null,
      token: null,
      movies: []
   },
   mutations: {
      setUser(state, payload) {
         state.userId = payload.userId
         state.token = payload.token
      },
      logout(state) {
         state.userId = null
         state.token = null
      },
      addMovie(state, payload) {
         state.movies.push(payload)
      },
      setMovies(state, payload) {
         state.movies = payload
      }
   },
   actions: {
      async login(context, payload) {
         const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCDrtjceFYvpr4xu6GFiiZWlfNbEROtrZc', {
            method: 'POST',
            body: JSON.stringify({
               email: payload.email,
               password: payload.password,
               returnSecureToken: true
            })
         });

         const resData = await res.json()

         if (!res.ok) {
            throw new Error('Invalid password or email address.')
         }

         context.commit('setUser', {
            userId: resData.localId,
            token: resData.idToken
         });  
      },
      async signup(context, payload) {
         const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCDrtjceFYvpr4xu6GFiiZWlfNbEROtrZc', {
            method: 'POST',
            body: JSON.stringify({
               email: payload.email,
               password: payload.password,
               returnSecureToken: true
            })
         });

         const resData = await res.json()
         
         if (!res.ok) {
            throw new Error('This email address is already in use.')
         }

         context.commit('setUser', {
            userId: resData.localId,
            token: resData.idToken
         });         
      },
      logout(context) {
         context.commit('logout')
      },
      async addMovie(context, movie) {
         await fetch(`https://netflix-clone-e9edf-default-rtdb.firebaseio.com/${context.getters.userId}/movies.json`, {
            method: 'POST',
            body: JSON.stringify(movie)
         });
         context.commit('addMovie', movie)
      },
      async getMovies(context) {
         const res = await fetch(`https://netflix-clone-e9edf-default-rtdb.firebaseio.com/${context.getters.userId}/movies.json`);

         const resData = await res.json()
         const movies = []

         for (const key in resData) {
            movies.push({ [key]: resData[key] })
         }
         context.commit('setMovies', movies)
      },
      async removeMovie(context, payload) {
         const userId = context.getters.userId
         const key = Object.keys(payload)[0]
         await fetch(`https://netflix-clone-e9edf-default-rtdb.firebaseio.com/${userId}/movies/${key}.json`, {
               method: 'DELETE'
            });     
      }
   },
   getters: {
      token(state) {
         return state.token
      },
      userId(state) {
         return state.userId
      },
      isAuthenticated(state) {
         return !!state.token
      },
      movies(state) {
         return state.movies
      }
   }
});
