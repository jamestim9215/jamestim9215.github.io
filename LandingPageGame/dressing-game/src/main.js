import { createApp } from 'vue'
import { createI18n } from "vue-i18n";
import './style.css'
import App from './App.vue'

import zh_tw from "@/assets/local/zh-tw.json";

let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);

const lang = urlParams.get("lang") || "global";


const langs = import.meta.glob("@/assets/local/*.json")




async function loadTranslations() {
  let messages = {};
  await Promise.all(
    Object.keys(langs).map(async path => {
      const module = await langs[path]();
      const newLang = path.replace("/src/assets/local/", "").replace(".json", "");
      messages[newLang] = module.default;
    })
  );
  
  const i18n = createI18n({
    legacy: false,
    locale: lang=='global'?'en-us':lang,
    fallbackLocale: lang=='global'?'en-us':lang,
    messages: messages
  });

  console.log(i18n.global.locale);

  createApp(App).use(i18n).mount('#app')
}

loadTranslations();


