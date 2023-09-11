import { create } from 'zustand'

import { UseAuthStore } from '@store/auth/types'

export const useAuthStore = create<UseAuthStore>(set => ({
    email: '',
    password: '',
    setEmail: (email: string) => set({ email: email }),
    setPassword: (password: string) => set({ password: password })
}))