<template>
  <div class="box-container">
    <div class="login-container">
      <h2>¡Bienvenido/a!</h2>
      <p class="sub-title">Ingrese al sistema</p>
      <form @submit.prevent="login" class="login-form">
        <label for="email">Email</label>
        <input type="text" id="email" v-model="loginData.Email" required />
        <label for="password">Contraseña</label>
        <input type="password" id="password" v-model="loginData.Password" required />
        <p v-if="loginError">El email o la contraseña son incorrectos</p>
        <button type="submit">Iniciar sesión</button>
        <p class="p-register">¿No tienes cuenta? - <router-link to="registrar"><span class="p-register-span">Registrate</span></router-link></p>
      </form>
    </div>
  </div>
</template>

<script>
definePageMeta({
  layout: "login",
})
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
  },

};
</script>

<style scoped>
.box-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #231837;
}
.login-container {
  color: #ffffff;
  background-color: #3a2d50;
  border-radius: 25px;
  height: 500px;
  width: 600px;
}
h2 {
  padding-top: 50px;
  font-size: 32px;
  margin-bottom: 30px;
  text-align: center;
}
.sub-title {
  text-align: center;
  color: #b1b1b1;
  font-size: 18px;
  letter-spacing: 1px;
  margin-bottom: 20px;
}
.login-form {
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 75px;
}

label {
  font-size: 14px;
  margin-bottom: 8px;
}

input {
  font-size: 16px;
  background: none;
  border: none;
  border-bottom: 1px solid #ccc;
  color: #f0f0f0;
  margin-bottom: 30px;
}

input:focus{
  outline: none;
  background-color: transparent;
}

button {
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: medium;
  margin: 35px 0 35px 0 ;
}

button:hover {
  background: none;
  transition: .3s;
  border: 1px solid #231837;
}

.p-register {
  text-align: center;
  font-size: 14px;
  letter-spacing: 1px;
}

.p-register-span {
  color: #007bff;
}

@media screen and (max-width: 780px) {
  .login-container{
    transition: .3s;
    background-color: #231837;
  }
}
</style>