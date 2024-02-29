<template>
  <div class="login-container">
    <h2>¡Bienvenido/a!</h2>
    <form @submit.prevent="login" class="login-form">
      <label for="email">Email</label>
      <input type="text" id="email" v-model="loginData.Email" required />
      <label for="password">Contraseña</label>
      <input type="password" id="password" v-model="loginData.Password" required />
      <p v-if="loginError">El email o la contraseña son incorrectos</p>
      <button type="submit">Iniciar sesión</button>
      <p>¿No tienes cuenta? - <router-link to="registrar">Registrate</router-link></p>
    </form>
  </div>
</template>

<script>

export default {
  data() {
    return {
      loginData: {
        Email: "",
        Password: ""
      },
      loginError: false
    };
  },
  methods: {
    async login() {
      try {
        const { login } = useAuth()
        const res = await login(this.loginData);
        if (res) {
          this.$router.push('actividades');
        } else {
          this.loginError = true;
        }
      } catch (error) {
        console.error('Error en el inicio de sesión:', error);
        this.loginError = true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.login-container {
  color: #fff;
  margin-top: 15px;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #221086;
  border-radius: 5px;
  background-color: #115b97;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.login-form {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 8px;
}

input {
  padding: 8px;
  margin-bottom: 12px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

button {
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: medium;
}

button:hover {
  background-color: #0056b3;
}

h2 {
text-align: center;
align-items: center;
margin-left: 2 2 2 2;
color: #fff;
}

p {
color: #fff;
margin-top: 0;
align-items: center;
text-align: left;
font-family: 'Arial Narrow', Arial, sans-serif;
font-size: 15px;
}

p1 {
color: #fff;
margin-top: 10px;
align-items: center;
text-align: left;
font-family: 'Arial Narrow', Arial, sans-serif;
font-size: 15px;
text-align: center;
}
</style>