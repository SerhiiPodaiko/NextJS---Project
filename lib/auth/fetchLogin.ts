import { setCookie } from 'cookies-next'

import API from '@lib/api/Api'

import { Login, ResponseLogin } from './types'

export const fetchLogin = async (options: Login): Promise<ResponseLogin> => {
    return API.post<ResponseLogin>(`/sign_in/`, options)
        .then((response) => {
            setCookie('accessToken', response?.data?.access_token)
            setCookie('refreshToken', response?.data?.refresh_token)
            setCookie('id_token', response?.data?.id_token)
            setCookie('user_role', response?.data?.user_role)

            console.log('LOGIN_SUCCESS', response)

            return response?.data
        })
        .catch((error) => {
            console.log('LOGIN_ERROR', error?.response?.data)
            throw new Error(error)
        })
}