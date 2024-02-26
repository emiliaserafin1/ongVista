<template>
    <div class="registro-container">
      <h2>¡Crear tu cuenta!</h2>
      <form @submit.prevent="register" class="registro-form">
        <label for="email">Email</label>
        <input type="text" id="email" v-model="registerData.Email" required />
        
        <label for="name">Nombre</label>
        <input type="text" id="name" v-model="registerData.Name" required />
        
        <label for="surname">Apellido</label>
        <input type="text" id="lastName" v-model="registerData.LastName" required>
        
        <label for="password">Contraseña</label>
        <input type="password" id="password" v-model="registerData.Password" required />
        <p v-if="passwordError">Debe contener al menos 8 caracteres</p>
        
        <label for="confirmPassword">Confirmar Contraseña</label>
        <input type="password" id="confirmPassword" v-model="confirmPassword" required />
        <p v-if="registerData.Password !== confirmPassword">Las contraseñas no coinciden</p>
        
        <label for="address">Direccion</label>
        <input type="text" id="address" v-model="registerData.Address" required />
        
        <label for="phone">Telefono</label>
        <input type="text" id="phone" v-model="registerData.Phone" required />
        
        <label for="dni">DNI</label>
        <input type="text" id="dni" v-model="registerData.DNI" required />
        
        <label for="birthdate">Fecha de nacimiento</label>
        <input type="date" id="birthdate" v-model="registerData.BirthDate" required />
        <p v-if="registerError">Debe completar todos los campos</p>
        
        <button type="submit">Registrate</button>
        <p>¿Ya tienes cuenta? - <router-link to="login">Inicia sesion</router-link></p>
      </form>
    </div>
</template>
  
<script>

    import AuthService from '~/services/AuthService'
    export default {
        data() {
        return {
            registerData: {
            Name: "",
            LastName: "",
            Email: "",
            Password: "",
            Address: "",
            Phone: "",
            DNI: "",
            BirthDate: "",
            },
            confirmPassword: "",
            passwordError: false,
            registerError: false
        };
    },
    methods: {
      async register() {
        if (this.registerData.Password.length < 8) {
          this.passwordError = true;
          return;
        }
        
        if (this.registerData.Password !== this.confirmPassword) {
          this.passwordError = false;
          return;
        }
  
        try {
          await AuthService.register(this.registerData);
          this.$router.push('login');
        } catch (error) {
          console.error('Error en el registro:', error);
          this.registerError = true;
        }
      }
    }
  };
</script>
  
<style lang="scss" scoped>
.registro-container {
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

.registro-form {
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
color: #fff;
text-align: center;
align-items: center;
margin-left: 2 2 2 2;
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