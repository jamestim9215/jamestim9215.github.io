import { computed } from 'vue'

import { defineStore } from 'pinia'
import projectData from "@/assets/json/project.json"

const projectListData = projectData.map((item) => {
  console.log(`../assets/images/project/${item.img}`);
  
  return{
    ...item,
    img: new URL(`../assets/images/project/${item.img}`, import.meta.url).href
  }
})

export const useStore = defineStore('main', () => {
  // State
  const menuList = [
    {
      id: "menu_00",
      en_name: "Home",
      zhTW_name: "首頁",
      link: "/",
    },
    {
      id: "menu_01",
      en_name: "About me",
      zhTW_name: "關於我",
      link: "/about"
    },
    {
      id: "menu_02",
      en_name: "Resume",
      zhTW_name: "履歷",
      link: "/resume"
    },
    {
      id: "menu_03",
      en_name: "Project",
      zhTW_name: "專案",
      link: "/project"
    },
    {
      id: "menu_04",
      en_name: "Game",
      zhTW_name: "遊戲",
      link: "/game"
    }
  ]
  const projectList = projectListData

  // Getters
  const getMenuList = computed(() => menuList.filter(menu => menu.id))
  const getProjectList = computed(() => projectList.filter(project => project.name))

  // Actions (add if needed)

  return {
    menuList,
    projectList,
    getMenuList,
    getProjectList
  }
})
