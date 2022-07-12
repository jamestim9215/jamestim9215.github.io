import { createStore } from 'vuex'
import projectData from "@/assets/json/project.json"

var projectListData = projectData.map((item)=>{
  return {
    ...item,
    "img": require("@/assets/images/project/"+item.img)
  }
})

export default createStore({
  state: {
    menuList: [
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
    ],
    projectList: projectListData
  },
  getters: {
    getMenuList (state) {
      return state.menuList.filter(menuList => menuList.id)
    },
    getProjectList (state) {
      return state.projectList.filter(projectList => projectList.name)
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
