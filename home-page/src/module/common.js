// 載入畫面開關
function loadingStart() {
  document.querySelector('.loading-cover').classList.add('d-none')
  document.querySelector('.loading-cover').style.display = "inline"
  setTimeout(()=>{
    document.querySelector('.loading-cover').classList.remove('d-none')
  },500);
}
function loadingOver() {
  
  setTimeout(()=>{
    document.querySelector('.loading-cover').classList.add('d-none')
    setTimeout(()=>{
      document.querySelector('.loading-cover').style.display = "none"
    },500);
  },500);
}
// 判斷使否為手機
function isPhone() {
  if (navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
  ) return true
  return false
}
// 獲取特定cookie
function getCookie(cName) {
  if (document.cookie.length > 0) {
    let cStart = document.cookie.indexOf(cName + "=");
    if (cStart !== -1) {
      cStart = cStart + cName.length + 1;
      let cEnd = document.cookie.indexOf(";", cStart);
      if (cEnd === -1) cEnd = document.cookie.length;
      return unescape(document.cookie.substring(cStart, cEnd));
    }
  }
  return "";
}

function getBrowser() {
  let sys = {};
  let ua = navigator.userAgent.toLowerCase();
  let s = null
  if(ua.match(/edge\/([\d.]+)/)){
    s = ua.match(/edge\/([\d.]+)/)
    sys.edge = s[1]
  } else if(ua.match(/msie ([\d.]+)/)){
    s = ua.match(/msie ([\d.]+)/)
    sys.ie = s[1]
  }
  if (sys.edge) return { broswer: "Edge", version: sys.edge };
  if (sys.ie) return { broswer: "IE", version: sys.ie };
  return { broswer: "", version: "0" };
}

// function formatTime(date,type){
//   var moment = require("moment");
//   let Ndate='';
//   if(type=='date'){
//     Ndate = moment(date).format('YYYY-MM-DD')
//   }else if(type=='time'){
//     Ndate = moment(date).format('HH:mm:ss')
//   }else{
//     Ndate = moment(date).format('YYYY-MM-DD HH:mm:ss')
//   }
//   return Ndate
// }

// function formatTimeToSlash(date,type){
//   var moment = require("moment");
//   let Ndate='';
//   if(type=='date'){
//     Ndate = moment(date).format('YYYY/MM/DD')
//   }else if(type=='time'){
//     Ndate = moment(date).format('HH:mm:ss')
//   }else{
//     Ndate = moment(date).format('YYYY/MM/DD HH:mm:ss')
//   }
//   return Ndate
// }

export {
  loadingStart,
  loadingOver,
  isPhone,
  getCookie,
  getBrowser,
  // formatTime,
  // formatTimeToSlash
}
