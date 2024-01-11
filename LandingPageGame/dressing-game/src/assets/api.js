import axios from "axios";

let apiUrl = "";
apiUrl = import.meta.env.VITE_APP_BASE_API;

var location = window.location.href;
if (location.match(/-dev/)) {
  apiUrl = "https://aorusv2-southeastasia-web-staging.azurewebsites.net";
} else if (location.match(/-staging/)) {
  apiUrl = "https://aorusv2-southeastasia-web-staging.azurewebsites.net";
} else if (location.match(/www.aorus.com/)) {
  apiUrl = "https://www.aorus.com";
} else {
  apiUrl = import.meta.env.VITE_APP_BASE_API;
}

// api
const apiRequest = axios.create({
  baseURL: `${apiUrl}`,
});

//解決api緩存
apiRequest.defaults.headers.common.Pragma = "no-cache";

//請求攔截
apiRequest.interceptors.request.use(
  function (config) {
    document.querySelector(".loading-div").classList.add("active");
    document.querySelector(".loading-div").classList.add("show");
    return config;
  },
  function (error) {
    document.querySelector(".loading-div").classList.remove("show");
    setTimeout(() => {
      document.querySelector(".loading-div").classList.remove("active");
    }, 1000);
    return Promise.reject(error);
  }
);
//返回攔截
apiRequest.interceptors.response.use(
  function (response) {
    document.querySelector(".loading-div").classList.remove("show");
    setTimeout(() => {
      document.querySelector(".loading-div").classList.remove("active");
    }, 1000);
    // console.log(response.data.StatusCode);
    if (response.data.StatusCode === 1000) {
      return response;
    }
    return codeMap(response);
  },
  function (error) {
    document.querySelector(".loading-div").classList.remove("show");
    setTimeout(() => {
      document.querySelector(".loading-div").classList.remove("active");
    }, 1000);
    return Promise.reject(error);
  }
);

export const ChibiEventUploadFile = (data) =>
  apiRequest.post("/api/Event/ChibiEventUploadFile", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });

// 後端map表
function codeMap(response) {
  let code = response.data.StatusCode;
  // if(response.data.Message) code = response.data.Message
  switch (code) {
    default:
      break;
  }
  return response;
}
