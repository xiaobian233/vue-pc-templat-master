import { post, get } from './http.js'
export default {
  //登录
  async login(params) {
    return await post('/login', params)
  },
  
}