import { useAuthStore } from '@store/auth/useAuthStore'

const useRootStore = () => {
    const authStore = useAuthStore()

    return {
        authStore
    }
}

export default useRootStore