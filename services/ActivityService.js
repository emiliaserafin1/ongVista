import { API } from '../constants/api';

export default {
  getAllActivities() {
    const { token } = useAuth();
    return $fetch(API + 'Activity', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token,
      },
    });
  },
  
  async getActivityById(id) {
    const { token } = useAuth();
    const res = await $fetch(API + 'Activity/' + id, {
      headers: {
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + token,
      },
    });
    return res;
  },

  async createActivity(activity, image) {
    const { token } = useAuth();
    const res = await $fetch(API + 'Activity', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      },
      body: activity,
    });
    return true;
  },
  
  async editActivity(activity) {
    const { token } = useAuth();
    if (!activity.id) return false;
    const res = await $fetch(API + 'Activity/' + activity.id, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + token,
      },
      body: activity,
    });
    return true;
  },

  async deleteActivity(id) {
    const { token } = useAuth();
    const res = await $fetch(API + 'Activity/' + id, {
      method: 'DELETE',
      headers: {
        'Authorization': 'Bearer ' + token,
      }
    });
    return res.ok;
  },

  async getActivityVolunteers(id){
    const { token } = useAuth();
    const res = await $fetch(API + 'Activity/' + id + '/volunteers', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + token,
      },
    });
    return res;
  },

  async getActivityMaterials(id){
    const { token } = useAuth();
    const res = await $fetch(API + 'Activity/' + id + '/materials', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + token,
      },
    });
    return res;
  }
};
