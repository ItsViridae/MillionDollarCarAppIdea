const baseURL = 'https://localhost:44356/api'
const API_ENDPOINTS = Object.freeze({
    ///frozen object does -> if const is set an object, it can be changed! type safety used here
    postAuthentication: `${baseURL}/Authentication`,
    postCustomer: `${baseURL}/Customer`,

})
export default API_ENDPOINTS