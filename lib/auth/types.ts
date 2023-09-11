export type Login = {
    email: string
    password: string
    user_role: string
}

export type ResponseLogin = {
    id_token: string
    access_token: string
    refresh_token: string
    user_role: string
}

export type Register = {
    email: string
    password: string
    user_role: string
}

export type ResponseRegister = {
    message: string
}