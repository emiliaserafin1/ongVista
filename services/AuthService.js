import { API } from '~/constants/api';

export default {
  token: null,

  async login(loginData) {
    try {
      const res = await fetch(`${API}authentication/authenticate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (!res.ok) return false;

      const tokenReceived = await res.text();
      localStorage.setItem('token', tokenReceived);
      this.token = tokenReceived;
      return true;
    } catch {
      return false;
    }
  },

  async register(registerData) {
    try {
      const res = await fetch(`${API}User`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registerData),
      });

      if (!res.ok) throw new Error('Error en el registro.');

      return res;
    } catch (error) {
      console.error('Error en el registro:', error);
      throw error;
    }
  },

  logOut() {
    this.token = null;
    localStorage.removeItem('token');
    this.$router.push('/login');
  },

  getToken() {
    return localStorage.getItem('token');
  }
};
