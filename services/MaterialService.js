import { API } from '../constants/api';

export default {
  getAllMaterials() {
    const { token } = useAuth();
    return $fetch(API + 'Material', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token,
      },
    });
  },
  
  async getMaterialById(id) {
    const { token } = useAuth();
    const res = await $fetch(API + 'Material/' + id, {
      headers: {
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + token,
      },
    });
    return res;
  },

  async createMaterial(activity, image) {
    const { token } = useAuth();
    const res = await $fetch(API + 'Material', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      },
      body: activity,
    });
    return res;
  }
};