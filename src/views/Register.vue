<template>
   <div class="main-wrap">
      <div class="container">

         <form class="form" @submit.prevent="submitRegisterForm">
            <h2>Sign up</h2>
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
                  type="text" 
                  v-model.trim="name" 
                  placeholder="Name" 
                  maxlength="30"
                  :class="{active: !nameIsValid}">

               <span class="form-warning" v-if="!nameIsValid">
                  Enter a valid name field.
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
               <button type="submit">Sign up</button>
               <span class="form-error" v-if="error">{{ error }}</span>
               <span class="form-success" v-if="success">{{ success }}</span>
               <p>
                  Already have an account?  
                  <router-link to="/login">Sign in now.</router-link>
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
         name: '',
         passwordIsShown: false,
         emailIsValid: true,
         passwordIsValid: true,
         nameIsValid: true,
         error: null,
         success: null
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

         if (this.name === '') {
            this.nameIsValid = false
         }
      },
      async submitRegisterForm() {
         this.validateForm()
         
         if (this.emailIsValid && this.passwordIsValid && this.nameIsValid) {
            try {
               const formData = { 
                  email: this.email, 
                  password: this.password,
                  name: this.name 
               }
               await this.$store.dispatch('signup', formData)

               if (this.error) {
                  this.error = null
               }

               this.success = 'Your account has been successfully created.'

               setTimeout(() => this.$router.replace('/movies'), 1500)

            } catch (err) {
               this.error = err.message || 'Failed to authenticate.'
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
      name(newValue) {
         if (newValue.length < 6) {
            this.nameIsValid = false
         } else {
            this.nameIsValid = true
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