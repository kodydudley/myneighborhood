const base = window.location.host.includes('localhost') ? '//localhost:3000/' : '/'

// @ts-ignore
export const api = axios.create({
  baseURL: base + 'api/',
  timeout: 10000,
  withCredentials: true
})
