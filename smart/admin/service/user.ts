import request from './request'

const UserApi = {
  login: (params) => {
    return request.post('/auth/login', params)
  },

  userInit: () => {
    return request.get('/auth/userInit')
  },
}

export default UserApi
