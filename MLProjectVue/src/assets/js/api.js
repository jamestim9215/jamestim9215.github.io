import axios from "axios";
import { getToken } from "./token";
import { DataLoadingOn,DataLoadingOff } from '@/assets/js/common.js';

let apiUrl = "";
apiUrl = import.meta.env.VITE_APP_BASE_API;

var location = window.location.href;
if (location.match(/-dev/)) {
  apiUrl = "https://material-platformapi.azurewebsites.net";
} else {
  apiUrl = import.meta.env.VITE_APP_BASE_API;
}


// api
const apiRequest = axios.create({
  baseURL: `${apiUrl}`,
  headers: {
    // 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    // Accept: 'application/json'
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
  }
});

//解決api緩存
apiRequest.defaults.headers.common.Pragma = "no-cache";

//請求攔截
apiRequest.interceptors.request.use(
  async config => {
    
    const token = localStorage.getItem('token') || await getToken();
    // Do something before request is sent
    config.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
    
    return config;
  },
  function (config) {
    DataLoadingOn();
    return config;
  },
  function (error) {

    DataLoadingOff();
    return Promise.reject(error);
  }
);
//返回攔截
apiRequest.interceptors.response.use(
  function (response) {
    
    DataLoadingOff();
    // console.log(response.data.StatusCode);
    if (response.data.StatusCode === 1000) {
      return response;
    }
    return codeMap(response);
  },
  function (error) {

    if (error.response.status === 401) {
      localStorage.removeItem('token');
      window.location.reload();
    }
    
    DataLoadingOff();
    return Promise.reject(error);
  }
);

export const GetArticle = async (data) => apiRequest.post("/api/Article/GetArticle", data );


function codeMap(response) {
  let code = response.data.StatusCode;
  switch (code) {
    
    default:
      break;
  }
  return response;
}
