import { createI18n } from 'vue-i18n';

const langs = import.meta.glob("@/assets/local/*.json");

// 等待所有语言文件加载完成的异步函数
async function loadLanguages() {
  const loadedLanguages = {};

  const importPromises = Object.keys(langs).map(async (path) => {
    const langCode = path.match(/\.\/(\w+)\.json$/)[1];
    const langModule = await langs[path]();
    loadedLanguages[langCode] = langModule.default;
  });

  await Promise.all(importPromises);

  return loadedLanguages;
}

async function setupI18n() {
  const loadedLanguages = await loadLanguages();

  const i18n = createI18n({
    legacy: false,
    locale: "global",
    fallbackLocale: "global",
    messages: loadedLanguages,
  });

  return i18n;
}

// 在适当的时机调用 setupI18n 函数
const i18n = setupI18n();

export default i18n;