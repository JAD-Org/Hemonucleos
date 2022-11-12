import axios from 'axios'

export function useAxios(baseUrl) {
  return axios.create({
    baseURL: baseUrl,
  })
}
