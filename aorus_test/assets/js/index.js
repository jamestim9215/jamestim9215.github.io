// Vue.config.devtools = true;
Vue.use(window.VueAwesomeSwiper);
var app = new Vue({
    el: '#app',
    components: {
        'header-div' : httpVueLoader(HeaderTemplate),
        'banner-div' : httpVueLoader(BannerTemplate),
        'product-line-div' : httpVueLoader(IndexProductLineTemplate),
        'explore-div' : httpVueLoader(IndexExploreTemplate),

        'esport-div' : httpVueLoader(IndexESportTemplate),
        'joinus-div' : httpVueLoader(IndexJoinMemberTemplate),


        'footer-div' : httpVueLoader(FooterTemplate),
        'copyright-lang-div' : httpVueLoader(CopyrightAndLangTemplate),
    },
    data() {
      return {
        bgChange: false,
        banners:[
          {
            imageUrl: 'assets/images/banner/F_20200225151530ooGJ9q.JPG',
            title: 'Wallpaper',
            subTitle : 'AORUS ROBOT',
            btnText : 'Download',
            btnLink: 'https://tw.aorus.com/wallpaper.php?Dfile=upload/Downloads/Album/F_20200225151530ooGJ9q.JPG',
            fullLink: '',
            contentAlign: 'right', // left center right
            contentValign: 'top', // top middle bottom
            textAlign: 'right',
          },
          {
            imageUrl: 'assets/images/banner/B550-banner-1920x766.jpg',
            title: 'RISE UP',
            subTitle : 'AORUS B550 GAMING MOTHERBOARDS',
            btnText : 'SEE MORE',
            btnLink: 'https://www.aorus.com',
            fullLink: '',
            contentAlign: 'left',
            contentValign: 'middle',
            textAlign: 'left', 
          },
          {
            imageUrl: 'assets/images/banner/F_20200616172719eCVRE3.jpg',
            title: '',
            subTitle : '',
            btnText : '',
            btnLink: '',
            fullLink: 'https://www.aorus.com',
            contentAlign: 'right',
            contentValign: 'bottom',
            textAlign: 'left',
          },
          {
            imageUrl: 'assets/images/banner/ROBOT_2-final-3840x2160px.jpg',
            title: 'Wallpaper',
            subTitle : 'The King\'s Arrival',
            btnText : 'Download',
            btnLink: 'https://tw.aorus.com/wallpaper.php?Dfile=upload/Downloads/Album/F_20200226141137mCo1Ad.JPG',
            fullLink: '',
            contentAlign: 'left',
            contentValign: 'bottom',
            textAlign: 'left',
          },
          {
            imageUrl: 'assets/images/banner/F_20200629182419hk8gK7.JPG',
            title: '',
            subTitle : '',
            btnText : '',
            btnLink: '',
            fullLink: '',
            contentAlign: 'right',
            contentValign: 'bottom',
            textAlign: 'center',
          },
          {
            imageUrl: 'assets/images/banner/Aorus 4K wallpaper_APR_3840x2160_fa.jpg',
            title: '',
            subTitle : '',
            btnText : '',
            btnLink: '',
            fullLink: '',
            contentAlign: 'center',
            contentValign: 'middle',
            textAlign: 'center',
          },
          {
            imageUrl: 'assets/images/banner/AORUS 4K wallpaper-FEB-3840x2160.jpg',
            title: '',
            subTitle : '',
            btnText : '',
            btnLink: '',
            fullLink: '',
            contentAlign: 'center',
            contentValign: 'middle',
            textAlign: 'center', 
          },
        ],
      }
    },
    created () {
      window.addEventListener('scroll', this.handleScroll);
    },
    mounted:function(){
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll (event) {
        var explore_H = document.getElementById('explore').offsetTop;
        var explore_innerH = document.getElementById('explore').clientHeight/3 * 2;
        var window_H = window.innerHeight;
        if(window.scrollY > (explore_H - window_H + explore_innerH)){
          this.bgChange = true;
        }else{
          this.bgChange = false;
        }

        var  element = document.getElementsByClassName('animate_class');
        for(var i=0 ; i<element.length; i++){
          var animateName = element[i].dataset.animate;
          var delay = element[i].dataset.animatedelay;
          if(element[i].getBoundingClientRect().top < window.innerHeight ){
            if(element[i].classList.contains('animate__animated')==false){
              element[i].classList.add('animate__animated',animateName);
              element[i].style.animationDelay = delay+'s';
            }
          }else{
            if(element[i].classList.contains('animate__animated')){
              element[i].classList.remove('animate__animated',animateName);
              // element[i].style.setProperty('--animate-delay', '1s');
            }
          }
        }

          
      }


    }
})