
import {useRouter} from 'vue-router';

const router = useRouter();

const isLogin = () => {
  return localStorage.getItem('MLToken') ? true : false;
}

const logout = () => {
  localStorage.removeItem('MLToken') ;
  location.href = '/';
}

const login = (type) => {
  console.log(type);
  localStorage.setItem('MLToken',"token") 
  // router.push('/');
  location.href = '/';

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

export { 
  isLogin,
  logout,
  login,
  PageLoadingOn,
  PageLoadingOff
};