import request from '@/utils/request'

export function getInfo() {
  return request({
    url: '/api/auth/getuser?token=' + localStorage.token,
    method: 'post'
  })
}
export function postlogin(data) {
  return request({
    url: '/api/auth/login',
    method: 'post',
    data
  })
}
export function getlogout() {
  return request({
    url: '/api/auth/logout',
    method: 'post'
  })
}