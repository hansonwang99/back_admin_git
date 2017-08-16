import fetch from '../utils/fetch'

export function loginByEmail (email, password) {
  const data = {
    email,
    password
  }
  return fetch({
    url: 'https://easy-mock.com/mock/598eb2fea1d30433d85f00f1/codesheep/login/loginbyemail',
    method: 'post',
    data
  })
}

export function logout () {
  return fetch({
    url: '/login/logout',
    method: 'post'
  })
}

export function getInfo (token) {
  return fetch({
    url: 'https://easy-mock.com/mock/598eb2fea1d30433d85f00f1/codesheep/user/info',
    method: 'get',
    params: { token }
  })
}

