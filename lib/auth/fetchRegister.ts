import API from '@lib/api/Api'
import { Register, ResponseRegister } from './types'

export const fetchRegister = async (options: Register): Promise<ResponseRegister> => {
    return API.post<ResponseRegister>('/sign_up/', options)
        .then((response) => {
            console.log('REGISTER_SUCCESS', response?.data)
            return response?.data
        })
        .catch((error) => {
            console.log('REGISTER_ERROR', error?.data)
            throw new Error(error)
        })
}