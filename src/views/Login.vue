<template>
   <div class="main-wrap">
      <div class="container">

         <form class="form" @submit.prevent="submitLoginForm">
            <h2>Sign in</h2>
            <div class="form-control">
               <input 
                  type="email" 
                  v-model.trim="email" 
                  placeholder="Email" 
                  maxlength="30"
                  :class="{active: !emailIsValid}">
               <span class="form-warning" v-if="!emailIsValid">
                  Please enter a valid email.
               </span>
            </div>

            <div class="form-control">
               <input 
                  :type="inputType" 
                  v-model.trim="password" 
                  placeholder="Password" 
                  maxlength="30"
                  :class="{active: !passwordIsValid}">

               <span class="form-warning" v-if="!passwordIsValid">
                  Your password must contain at least 6 characters.
               </span>
               <div @click="togglePasswordType">{{ statusText }}</div>   
            </div>

            <div class="form-control">
               <button type="submit">Sign in</button>
               <span class="form-error" v-if="error">{{ error }}</span>
               <p>
                  New to Netflix?   
                  <router-link to="/register">Sign up now.</router-link>
               </p>
            </div>
         </form>

      </div>
   </div>
</template>

<script>
export default {
   data() {
      return {
         email: '',
         password: '',
         passwordIsShown: false,
         emailIsValid: true,
         passwordIsValid: true,
         error: null
      }
   },
   computed: {
      inputType() {
         return this.passwordIsShown ? 'text' : 'password'
      },
      statusText() {
         return this.passwordIsShown ? 'hide' : 'show'
      }
   },
   methods: {
      togglePasswordType() {
         this.passwordIsShown = !this.passwordIsShown
      },
      validateForm() {
         if (this.email === '') {
            this.emailIsValid = false
         }

         if (this.password === '') {
            this.passwordIsValid = false
         }
      },
      async submitLoginForm() {
         this.validateForm()

         if (this.emailIsValid && this.passwordIsValid) {
            try {
               const formData = { 
                  email: this.email, 
                  password: this.password 
               }

               await this.$store.dispatch('login', formData) 

               if (this.error) {
                  this.error = null
               }

               this.$router.replace('/movies')
            
            } catch (err) {
               this.error = err.message || 'Failed to authenticate'
            }
         }
      }
   },
   watch: {
      email(newValue) {
         if (newValue.length < 6) {
            this.emailIsValid = false
         } else {
            this.emailIsValid = true
         }
      },
      password(newValue) {
         if (newValue.length < 6) {
            this.passwordIsValid = false
         } else {
            this.passwordIsValid = true
         }
      }
   }
}
</script>

<style lang="scss">
@import '../sass/form-styles';
</style>