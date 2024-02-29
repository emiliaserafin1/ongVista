import { API } from '../constants/api';

export default {
  async getAll() {
    const { token } = useAuth();
    const res = await $fetch(API + 'User', {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
    const data = await res.json();
    return data;
  },
  
  async getUserById(id) {
    const { token } = useAuth();
    const res = await $fetch(API + 'User/' + id, {
      headers: {
        'Content-type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    });
    return await res.json();
  },

  async createUser(user) {
    const { token } = useAuth();
    const res = await $fetch(API + 'User', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token, 
      },
      body: JSON.stringify(user),
    });
    return res.ok;
  },
  
  async editUser(user) {
    if (!user.id) return false;
    const { token } = useAuth();
    const res = await $fetch(API + 'User/' + user.id, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify(user),
    });
    return res.ok;
  },

  async deleteUser(id) {
    const { token } = useAuth();
    const res = await $fetch(API + 'User/' + id, {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
    return res.ok;
  },
  
  async registerForActivity(activityId) {
    const { token } = useAuth();
    const res = await $fetch(API + 'User/registerForActivity/' + activityId, {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
    return res.ok;
  },

  async getUserActivities(userId) {
    const { token } = useAuth();
    const res = await $fetch(API + 'User/activities/' + userId, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
    const data = await res.json();
    return data;
  }
};
