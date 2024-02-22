<template>
    <div class="registro-container">
         <h2>¡Crear tu cuenta!</h2>
         <form @submit.prevent="login" class="registro-form">
           <label for="email">Email</label>
           <input type="text" id="email" v-model="email" required />
           <label for="name">Nombre</label>
           <input type="text" id="name" v-model="name" required />
           <label for="surname">Apellido</label>
           <input type="text" id="surname" v-model="surname" required>
           <label for="password">Contraseña</label>
           <input type="password" id="password" v-model="password" required />
           <p>Debe contener al menos 8 caracteres</p>
           <label for="password">Contraseña</label>
           <input type="password" id="password" v-model="password" required />
           <p>Las contraseñas no coinciden</p>
           <p>Debe completar todos los campos</p>
           <button type="submit" @click="registrate">Registrate</button>
           <p1>¿Ya tienes cuenta? - Inicia sesion</p1>
         </form>
       </div>
   </template>

   <script>
   import login from '@/layouts/login.vue';
     export default {
       data() {
         return {
           email: "",
           name: "",
           surname: "",
           password: "",
           password: "",
         };
       },
       methods: {
         login() {
           // Lógica de autenticación
           console.log("Email:", this.email);
           console.log("Contrasena:", this.password);
         },
       },
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