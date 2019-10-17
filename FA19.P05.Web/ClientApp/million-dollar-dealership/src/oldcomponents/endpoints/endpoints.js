const baseURL = 'https://localhost:44356/api'
const carBaseURL = ' https://www.carqueryapi.com/api/0.3/'
const carCallBack = '?callback=?'
const vehicleURL = '"https://vpic.nhtsa.dot.gov/api"'
const API_ENDPOINTS = Object.freeze({
    ///frozen object does -> if const is set an object, it can be changed! type safety used here
    postAuthentication: `${baseURL}/Authentication`,
    postCustomer: `${baseURL}/Customer`,
    CallPostCarApi: `${carBaseURL}${carCallBack}`,
    CallVehicleApi: `${vehicleURL}/vehicles/GetModelsForMakeId/440?format=json`


})
export default API_ENDPOINTS