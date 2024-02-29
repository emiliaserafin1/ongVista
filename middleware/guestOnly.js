import { useAuthUser } from "~/composables/useAuthUser"
export default defineNuxtRouteMiddleware(async (_to, _from) => {
    const user = useAuthUser()
  
    if (user.value) {
      if (process.server)
        return navigateTo({ name: 'login' })
  
      return abortNavigation()
    }
  })