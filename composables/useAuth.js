import { useAuthUser } from "./useAuthUser";
import { API } from "~/constants/api";
export const useAuth = () => {
    const authUser = useAuthUser()
    let token = null;
    if (process.client && localStorage.getItem('token')) {
        token = localStorage.getItem('token');
    }
    const setUser = (user) => {
        authUser.value = user
    }
    const login = async (loginData) => {
        try {
            const data = await $fetch(`${API}authentication/authenticate`, {
                method: 'POST',
                body: loginData,
            })
            localStorage.setItem('token', data)
            setUser(data.user)
            return data
        } catch (err) {
            return null
        }
    }
    return {
        login,
        token
    }
}
