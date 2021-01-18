import axios, { AxiosResponse } from 'axios'

const getUserIdUrl = '/auth/user_id'
const loginUrl = '/auth'

interface LoginData {
  email: string
  password: string
}

class AuthService {
  client = axios.create({
    baseURL: process.env['REACT_APP_API_BASE_URL'],
    headers: {
      'Content-Type': 'application/json',
    },
    responseType: 'json',
    withCredentials: true,
  })

  getUserId = (): Promise<AxiosResponse> => {
    return this.client.get(getUserIdUrl)
  }

  login = (data: LoginData): Promise<AxiosResponse> => {
    return this.client.post(loginUrl, data)
  }
}

export default new AuthService()
