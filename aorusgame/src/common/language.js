
import en_us from '@/assets/locales/en-us.json';
import zh_tw from '@/assets/locales/zh-tw.json';

let local = 'zh-tw';
let langList = ['en-us','zh-tw'];
let langData = null;

const getLangData = (lang) => {
  switch(lang){
    case 'en-us': return en_us;
    case 'zh-tw': return zh_tw;
    default: return en_us;
  }
}

const initLanguage = () => {
  langData = getLangData(local)
  console.log('initLanguage:' ,local);
}

const getLang = () => {
  return local;
}

const getLangList = () => {
  return langList;
}

const changeLang = (lang) => {
  local = lang;
  langData = getLangData(local)
}

const getLangText = (key,value) => {
  return langData[key][value];
}



export{ 
  initLanguage,
  getLang,
  changeLang,
  getLangText
};