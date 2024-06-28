import axios from 'axios'

//axios.defaults.baseURL = "http://localhost:8080"
axios.defaults.baseURL = "https://lionseyebackend.azurewebsites.net";
axios.defaults.headers.post["content-type"] = "application/json"

export const getAuthToken = () => {
    console.log(window.localStorage.getItem("auth_token"))
    return window.localStorage.getItem("auth_token")
}
const setAuthHeaderFromLocalStorage = () => {
  const serializedState = localStorage.getItem('userData');
  if (serializedState !== null) {
    const userData = JSON.parse(serializedState);
    if (userData.token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`;
    }
  }
};

export const setAuthHeader = (token) =>{
    console.log(window.localStorage.getItem("auth_token"))
    if (token !== null) {
         window.localStorage.setItem("auth_token", token);

       } else {
         window.localStorage.removeItem("auth_token");
       }
}

export const request = (method, url, data,headers) => {
    return axios({
        method: method,
        headers: headers,
        url: url,
        data: data
    })
}
// Call this function to set the auth header on app start
setAuthHeaderFromLocalStorage();