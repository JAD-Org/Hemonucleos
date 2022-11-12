import { useAxios } from './use-axios.js'

export function useHttp(baseURL) {
  const instance = useAxios(baseURL)

  async function get(url, data) {
    const response = await instance.get(url, data)

    return response.data
  }

  async function post(url, data) {
    const response = await instance.post(url, data)

    return response.data
  }

  return {
    get,
    post,
  }
}
