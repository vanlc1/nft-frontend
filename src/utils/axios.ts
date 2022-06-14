import baseAxios from 'axios'

export const axios = baseAxios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // add header token
    // get token local

    //config.headers["Au"] = token
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  }
)
