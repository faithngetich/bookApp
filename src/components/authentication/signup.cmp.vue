<template>
  <form @submit.prevent="register">
    <h1>Sign Up</h1>

    <fieldset>
      <label for="mail">Email:</label>
      <input type="email" id="mail" name="user_email" v-model="form.email">

      <label for="password">Password:</label>
      <input type="password" id="password" name="user_password" v-model="form.password">

    </fieldset>
    <button type="submit">Sign Up</button>
  </form>
</template>

<script>
  export default {
  	data() {
  		return {
  			form: {
  				email: '',
          password: '',
        }
      };
    },

    methods: {
  		async register() {
        await this.$store.dispatch('actionRegisterUser', this.form);
        // todo get the know user object
        // if the object is not empty
        // redirect the user to the next page
        // if it is empty do nothing
      },
    },
  }
</script>
