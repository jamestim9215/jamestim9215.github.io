import axios from "axios";

let apiUrl = "";

if(import.meta.env.DEV){
  apiUrl = "/dev/";
}else{
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
    }, 100);
    return Promise.reject(error);
  }
);
//返回攔截
apiRequest.interceptors.response.use(
  function (response) {
    document.querySelector(".loading-div").classList.remove("show");
    setTimeout(() => {
      document.querySelector(".loading-div").classList.remove("active");
    }, 100);
    // console.log(response.data.StatusCode);
    // if (response.data.StatusCode === 1000) {
      return response;
    // }
    // return codeMap(response);
  },
  function (error) {
    document.querySelector(".loading-div").classList.remove("show");
    setTimeout(() => {
      document.querySelector(".loading-div").classList.remove("active");
    }, 100);
    return Promise.reject(error);
  }
);

// config 
export const getConfig = () => apiRequest.get("/get_config");

// project
export const createProject = (data) => apiRequest.post("/projects", data);
export const searchProject = (data) => apiRequest.get("/projects", {params: data });
export const updateProject = (data) => apiRequest.put("/projects", data);
export const deleteProject = (data) => apiRequest.delete("/project", {params: data});

// category
export const createCategory = (data) => apiRequest.post("/categories", data);
export const searchCategory = (data) => apiRequest.get("/categories_with_tags", {params: data });
export const updateCategory = (data) => apiRequest.put("/categories", data);
export const deleteCategory = (data) => apiRequest.delete("/category", {params: data});

// tags
export const createTag = (data) => apiRequest.post("/tags", data);
export const searchTag = (data) => apiRequest.get("/tags", {params: data });
export const updateTag = (data) => apiRequest.put("/tags", data);
export const deleteTag = (data) => apiRequest.delete("/tag", {params: data});

// sources
export const createSource = (data) => apiRequest.post("/sources", data);
export const searchSource = (data) => apiRequest.get("/sources", {params: data });
export const updateSource = (data) => apiRequest.put("/sources", data);
export const deleteSource = (data) => apiRequest.delete("/source", {params: data});

// content
export const createContent = (data) => apiRequest.post("/contents", data);
export const searchContent = (data) => apiRequest.get("/content", {params: data });
export const updateContent = (data) => apiRequest.put("/contents", data);
export const deleteContent = (data) => apiRequest.delete("/content", {params: data});
export const uploadFiles = (data) => apiRequest.post("/upload", data, { headers: { "Content-Type": "multipart/form-data" } });


///similarity_search
export const similaritySearch = (data,getData) => apiRequest.post("/similarity_search", data, {params: getData });


// 後端map表
function codeMap(response) {
  let code = response.data.StatusCode;
  // if(response.data.Message) code = response.data.Message
  switch (code) {
    // case 2000:
    //   response.data.Message = "傳入資料為空";
    //   break;
    default:
      break;
  }
  return response;
}
