import { createStore } from 'vuex'

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
        en_name: "Side Project",
        zhTW_name: "專案",
        link: "/side-project"
      },
    ],
    projectList:[
      {
        tag: ["Work","Web","RWD"],  //game , tool, work
        name: "AORUS Official website",
        img: require("@/assets/images/project/aorus_home.png"),
        link: "https://www.aorus.com/",
        localize: true,
        localizeCount: 100,
        teamMember: 3,
        teamRole: "Front end developer",
        detail: `
          技嘉科技電競品牌AORUS官網，
          擁有100個國家或地區語系，
          世界各地AOURS粉絲可以在這裡，
          找到各種產品與活動的資訊。
        `,
        technology: [
          "Vue",
          "Bootstrap",
          "Dotnet core",
        ]
      },
      {
        tag: ["Work","Game"],  //game , tool, work
        name: "AORUS Gameon",
        img: require("@/assets/images/project/aorus_gameon.png"),
        link: "https://jamestim9215.github.io/Phaser3/aorus_gameon/",
        localize: false,
        localizeCount: 0,
        teamMember: 1,
        teamRole: "Front end developer",
        detail: `
          AORUS舉辦的活動，一個雷電小遊戲，挑戰最高分吧!
        `,
        technology: [
          "JavaScript",
          "Phaser3",
        ]
      },
      {
        tag: ["Side Project","Tool","RWD"],  //game , tool, work
        name: "我到底能停哪?",
        img: require("@/assets/images/project/findparking.png"),
        link: "https://findparkinglot.github.io/",
        localize: false,
        localizeCount: 0,
        teamMember: 1,
        teamRole: "Front end developer",
        detail: `
          我有重機找車位的問題，
          直接做了一個可以裝在手機上，
          並隨時隨地使用個人裝置定位，
          查詢附近的車位。
          使用政府停車格開放資料與親自停過的停車場資料，
          並提供google表單，
          供車友填寫建議與停車資訊。
        `,
        technology: [
          "Vue","Mapbox","PWA",
        ]
      },
      {
        tag: ["Work","Web","RWD"],  //game , tool, work
        name: "AORUS Member system",
        img: require("@/assets/images/project/aorus_member_whyjoin.png"),
        link: "https://member.aorus.com/",
        localize: true,
        localizeCount: 40,
        teamMember: 3,
        teamRole: "Front end developer",
        detail: `
          技嘉科技電競品牌AORUS會員系統，
          提供超過60萬位以上的會員，
          註冊產品、領取點數、兌換獎品、參加活動、蒐集徽章等等。
        `,
        technology: [
          "jQuery",
          "Bootstrap",
          "Laravel",
        ]
      },
      {
        tag: ["Work","Web"],  //game , tool, work
        name: "Portal 內部系統",
        img: require("@/assets/images/project/portal.png"),
        link: "",
        localize: true,
        localizeCount: 2,
        teamMember: 3,
        teamRole: "Front end developer",
        detail: `
          介紹
        `,
        technology: [
          "Vue",
          "Bootstrap",
          "Dotnet core",
        ]
      },
      {
        tag: ["Work","Web"],  //game , tool, work
        name: "GlobalBiz 全球接單系統",
        img: require("@/assets/images/project/globalbiz.png"),
        link: "",
        localize: true,
        localizeCount: 2,
        teamMember: 5,
        teamRole: "Front end developer",
        detail: `
          介紹
        `,
        technology: [
          "Vue",
          "Bootstrap",
          "Dotnet core",
        ]
      },
      {
        tag: ["Work","Web"],  //game , tool, work
        name: "AORUS 300萬粉絲活動",
        img: require("@/assets/images/project/3m_celebration.png"),
        link: "https://global.aorus.com/3m-celebration/",
        localize: true,
        localizeCount: 16,
        teamMember: 3,
        teamRole: "Front end developer",
        detail: `
          技嘉科技電競品牌AORUS舉辦300萬粉絲FB打卡活動，紀錄全球使用者打卡位置，在google地圖上顯示AORUS粉絲專屬地圖。
        `,
        technology: [
          "FB login",
          "User location",
          "Google map"
        ]
      },
    ]
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
