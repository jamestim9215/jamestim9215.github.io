
const isLogin = () => {
  return localStorage.getItem('MLToken') ? true : false;
}

const logout = () => {
  localStorage.removeItem('MLToken') ;
  location.href = '/';
}

const login = (type,redirect) => {
  console.log(type,redirect);

  localStorage.setItem('MLToken',"token") 
 
  if(redirect){
    location.href =  location.href.split("/login")[0]+redirect;
  }else{
    location.href = '/';
  }
  // router.push('/');
  // location.href = '/';

}

const PageLoadingOn = () => {
  document.querySelector(".loading-div").classList.add("active");
  document.querySelector(".loading-div").classList.add("show");
  document.querySelector(".loading-div").classList.add("page-loading");
}

const PageLoadingOff = () => {
  document.querySelector(".loading-div").classList.remove("show");;
    setTimeout(() => {
      document.querySelector(".loading-div").classList.remove("active");
      document.querySelector(".loading-div").classList.remove("page-loading")
    }, 1000);
}

const DataLoadingOn = () => {
  document.querySelector(".loading-div").classList.add("active");
  document.querySelector(".loading-div").classList.add("show");
  document.querySelector(".loading-div").classList.add("data-loading");
}

const DataLoadingOff = () => {
  document.querySelector(".loading-div").classList.remove("show");;
    setTimeout(() => {
      document.querySelector(".loading-div").classList.remove("active");
      document.querySelector(".loading-div").classList.remove("data-loading")
    }, 1000);
}

export { 
  isLogin,
  logout,
  login,
  PageLoadingOn,
  PageLoadingOff,
  DataLoadingOn,
  DataLoadingOff
};