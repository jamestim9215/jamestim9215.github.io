import axios from "axios";

let apiUrl = "";
apiUrl = import.meta.env.VITE_APP_BASE_API;

var location = window.location.href;
// if (location.match(/-dev/)) {
//   apiUrl = "https://ai-nb-thermal.azurewebsites.net";
// } else {
//   apiUrl = import.meta.env.VITE_APP_BASE_API;
// }

// api
const apiRequest = axios.create({
  baseURL: `${apiUrl}`,
  headers: {
    Authorization: {
      "username":"melung",
      "password":"WyzdgWLWNhpEBwRj6Cja",
      "client_id":"app",
      "client_secret":"7EE73AB3-3BBC-4821-B799-7AB5E97CD371"
    }
  }
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


export const flotherm = (data) => apiRequest.post("/flotherm", data );


// 後端map表
function codeMap(response) {
  let code = response.data.StatusCode;
  // if(response.data.Message) code = response.data.Message
  switch (code) {
    // case 2000:
    //   response.data.Message = "傳入資料為空";
    //   break;
    // case 2001:
    //   response.data.Message = "傳入資料驗證失敗";
    //   break;
    // case 2002:
    //   response.data.Message = "資料查詢失敗";
    //   break;
    // case 2003:
    //   response.data.Message = "資料執行失敗";
    //   break;
    // case 2051:
    //   response.data.Message = "執行過程中發生例外錯誤";
    //   break;
    // case 2052:
    //   response.data.Message = "查無有效資料";
    //   break;
    // case 2053:
    //   response.data.Message = "匯出過程發生異常";
    //   break;
    // case 2054:
    //   response.data.Message = "解析Excel為DataTable失敗";
    //   break;
    // case 2055:
    //   response.data.Message = "解析Excel為ExcelPackage失敗";
    //   break;
    // case 2056:
    //   response.data.Message = "儲存錯誤訊息Excel失敗";
    //   break;
    // case 2057:
    //   response.data.Message = "匯入單身有錯誤訊息";
    //   break;
    // case 2058:
    //   response.data.Message = "匯入的Excel副檔名不為.xlsx";
    //   break;
    // case 2059:
    //   response.data.Message = "匯入失敗";
    //   break;
    // case 2060:
    //   response.data.Message = "查無資料";
    //   break;
    // case 2061:
    //   response.data.Message = "超出可接單(加單)時間";
    //   break;
    // case 2099:
    //   response.data.Message = "請洽管理員";
    //   break;
    default:
      break;
  }
  return response;
}
