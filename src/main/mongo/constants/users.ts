export const UserChannels = {
    LOGIN_CHANNEL: 'LOGIN_CHANNEL',
    PROFILE_CHANNEL: 'PROFILE_CHANNEL'
}

export const UserEvents = {
    LOGIN_ATTEMPT: '::LOGIN_ATTEMPT',
    LOGIN_SUCCESS: '::LOGIN_SUCCESS',
    LOGIN_FAILURE: '::LOGIN_FAILURE'
}

export interface User {
    username: string;
    password: string;
}