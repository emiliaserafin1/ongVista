<template>
  <div class="box-container">
    <div class="registro-container">
      <h2>¡Crea tu cuenta!</h2>
      <form @submit.prevent="register" class="registro-form">

        <div class="box-inp-doble">
          
         <div class="w-50">
          <label for="name">Nombre</label>
          <input type="text" id="name" v-model="registerData.Name" required />
         </div>

          <div class="w-50">
            <label for="surname">Apellido</label>
            <input type="text" id="lastName" v-model="registerData.LastName" required>
          </div>
        </div>        
        
        <div class="box-inp-single">
          <div class="w-100">
            <label for="email">Email</label>
            <input type="text" id="email" v-model="registerData.Email" required />
          </div> 
        </div>

        <div class="box-inp-doble">
          
          <div class="w-50">
            <label for="password">Contraseña</label>
            <input type="password" id="password" v-model="registerData.Password" required />
            <p v-if="passwordError">Debe contener al menos 8 caracteres</p>
          </div>

           <div class="w-50">
            <label for="confirmPassword">Confirmar Contraseña</label>
            <input type="password" id="confirmPassword" v-model="confirmPassword" required />
            <p v-if="registerData.Password !== confirmPassword">Las contraseñas no coinciden</p>
           </div>
         </div> 

         <div class="box-inp-single">
          <div class="w-100">
            <label for="birthdate">Fecha de nacimiento</label>
            <input type="date" id="birthdate" v-model="registerData.BirthDate" required />
          </div> 
        </div>

         <div class="box-inp-doble">
          
          <div class="w-50">
            <label for="address">Direccion</label>
            <input type="text" id="address" v-model="registerData.Address" required />
          </div>

           <div class="w-50">
            <label for="phone">Telefono</label>
            <input type="text" id="phone" v-model="registerData.Phone" required />
           </div>
         </div> 
  
         <div class="box-inp-single">
          <div class="w-100">
            <label for="dni">DNI</label>
            <input type="text" id="dni" v-model="registerData.DNI" required />
          </div> 
        </div>
        
        <div class="box-inp-single">
          <div class="w-100">
            <p v-if="registerError">Debes completar todos los campos</p>
          </div> 
        </div>

        <div class="box-inp-single">
          <div class="w-100">
            <button type="submit">Registrate</button>
            <p class="p-register">¿Ya tienes cuenta? - <router-link to="login"><span class="p-register-span">Inicia sesion</span></router-link></p>
          </div> 
        </div>
        
        
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
.box-container {
  max-width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #231837;
}
.registro-container {
  color: #ffffff;
  background-color: #3a2d50;
  border-radius: 25px;
  height: 80%;
  width: 50%;
}
h2 {
padding-top: 4%;
font-size: 32px;
margin-bottom: 60px;
text-align: center;
}
.box-inp-doble{
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
}

.box-inp-single{
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
}

.w-50{
  width: 50%;
  display: flex;
  flex-flow:column;
  justify-content: center;
}
.w-50 label {
  text-align: start;
}
.w-100{
  width: 100%;
  display: flex;
  flex-flow:column;
  justify-content: center;
}
.registro-form {
  display: flex;
  flex-direction: column;
}

label {
text-align: start;
margin-bottom: 5px;
}

input {
  background: none;
  border: none;
  border-bottom: 1px solid #ccc;
  color: #f0f0f0;
  margin-bottom: 20px;
  width: 100%;
}

button {
  padding: 10px;
  background-color: #0092DD;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: medium;
  margin: 0 0 35px 0 ;
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
  padding-bottom: 10px;
}

.p-register-span {
color: #007bff;
}

@media (max-width: 768px) {
  .registro-container{
    transition: .3s;
    background-color: #231837;
    width: 80%;
  }
}
</style>