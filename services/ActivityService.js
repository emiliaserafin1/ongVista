import { API } from '../constants/api';
import ApiService from './ApiService';
import AuthService from './AuthService';

export default {
  async getAll() {
    const res = await fetch(API + 'Activity', {
      headers: {
        Authorization: 'Bearer ' + AuthService.token,
      },
    });
    const data = await res.json();
    return data;
  },
  
  async getActivityById(id) {
    const res = await fetch(API + 'Activity/' + id, {
      headers: {
        'Content-type': 'application/json',
        Authorization: 'Bearer ' + AuthService.token,
      },
    });
    return await res.json();
  },

  async createActivity(activity, image) {
    const res = await fetch(API + 'Activity', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + AuthService.token, 
      },
      body: JSON.stringify(activity),
    });
    return res.ok;
  },
  
  async editActivity(activity) {
    if (!activity.id) return false;
    const res = await fetch(API + 'Activity/' + activity.id, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
        Authorization: 'Bearer ' + AuthService.token,
      },
      body: JSON.stringify(activity),
    });
    return res.ok;
  },

  async deleteActivity(id) {
    const res = await fetch(API + 'Activity/' + id, {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + AuthService.token,
      },
    });
    return res.ok;
  },

  async getActivityVolunteers(id){
    const res = await fetch(API + 'Activity/' + id + '/volunteers', {
      headers: {
        Authorization: 'Bearer ' + AuthService.token,
      },
    });
    return await res.json();
  },

  async getActivityMaterials(id){
    const res = await fetch(API + 'Activity/' + id + '/materials', {
      headers: {
        Authorization: 'Bearer ' + AuthService.token,
      },
    });
    return await res.json();
  }
};