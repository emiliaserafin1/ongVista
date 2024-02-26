import { API } from '../constants/api';
import ApiService from './ApiService';
import AuthService from './AuthService';

export default {
  async getAll() {
    const res = await fetch(API + 'User', {
      headers: {
        Authorization: 'Bearer ' + AuthService.token,
      },
    });
    const data = await res.json();
    return data;
  },
  
  async getUserById(id) {
    const res = await fetch(API + 'User/' + id, {
      headers: {
        'Content-type': 'application/json',
        Authorization: 'Bearer ' + AuthService.token,
      },
    });
    return await res.json();
  },

    async createUser(user) {
    const res = await fetch(API + 'User', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + AuthService.token, 
      },
      body: JSON.stringify(user),
    });
    return res.ok;
  },
  
  async editUser(user) {
    if (!user.id) return false;
    const res = await fetch(API + 'User/' + user.id, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
        Authorization: 'Bearer ' + AuthService.token,
      },
      body: JSON.stringify(user),
    });
    return res.ok;
  },

  async deleteUser(id) {
    const res = await fetch(API + 'User/' + id, {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + AuthService.token,
      },
    });
    return res.ok;
  },
  
  async registerForActivity(activityId) {
    const res = await fetch(API + 'User/register/' + activityId, {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + AuthService.token,
      },
    });
    return res.ok;
  },

  async getUserActivities(userId) {
    const res = await fetch(API + 'User/activities/' + userId, {
      headers: {
        Authorization: 'Bearer ' + AuthService.token,
      },
      });
  }
}
