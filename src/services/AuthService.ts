import { AxiosResponse } from 'axios'
import client from 'services/BaseClient'

const getUserIdUrl = '/auth/user_id'
const loginUrl = '/auth'

interface LoginData {
  email: string
  password: string
}

class AuthService {
  getUserId = (): Promise<AxiosResponse> => {
    return client.get(getUserIdUrl)
  }

  login = (data: LoginData): Promise<AxiosResponse> => {
    return client.post(loginUrl, data)
  }
}

export default new AuthService()
