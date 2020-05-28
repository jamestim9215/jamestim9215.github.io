<template>
  <Page actionBarHidden="true"  statusBarStyle='light' backgroundSpanUnderStatusBar="false">
      <WebView ref="webView" :iosOverflowSafeArea="true" class="webview" @loaded="onWebViewLoaded"/>
  </Page>
</template>

<script>
import { alert } from "tns-core-modules/ui/dialogs";
// import { Page } from 'tns-core-modules/ui/page';

import { WebView } from "tns-core-modules/ui/web-view";
let webViewInterfaceModule = require("nativescript-webview-interface");
import { LocalNotifications } from "nativescript-local-notifications";
import { Color } from "tns-core-modules/color";
import { android, AndroidApplication } from 'tns-core-modules/application'
import { isAndroid } from 'tns-core-modules/platform'


// UIApplication.sharedApplication.statusBarStyle = 1;

export default {
  created() {
    LocalNotifications.addOnMessageReceivedCallback(notificationData => {
      this.message = "Notification received: " + JSON.stringify(notificationData);
    });
    // frameModule.topmost().ios.navBarVisibility = 'never';
  },
  data() {
    return {
      oWebViewInterface: null,
      androidBackTimes: 0,
     
    };
  },
  mounted: function() {
  },
  methods: {
    onWebViewLoaded(webViewObj){
      const webView = webViewObj.object;
      
      if(webView.android) {
        webView.android.getSettings().setDomStorageEnabled(true);
        webView.android.getSettings().setBuiltInZoomControls(false);
        webView.android.getSettings().setDisplayZoomControls(false);
      }else{
        webView.ios.scrollView.minimumZoomScale = 1.0;
        webView.ios.scrollView.maximumZoomScale = 1.0;
        webView.ios.scalesPageToFit = false;
        webView.ios.scrollView.bounces = false;
      }


      var _this = this;
      this.oWebViewInterface = new webViewInterfaceModule.WebViewInterface(webView,'https://jamestim9215.github.io/SalesAPP/index.html');

      this.oWebViewInterface.emit('locolData', '123');

      this.oWebViewInterface.on("anyEvent", function(eventData) {
        _this.onTapScheduleNotification(_this.dataSchedule)
      });      
      if(isAndroid){
        android.on(AndroidApplication.activityBackPressedEvent, function(args){
            _this.androidBackTimes = _this.androidBackTimes + 1;
            if(_this.androidBackTimes >= 2){
              _this.androidBackTimes = 0;
              args.cancel = false;
            }else{
              if(_this.androidBackTimes == 1){
                alert("再滑一下退出");
              }
              args.cancel = true;
            }
        })
      }
    },
    //預約推播通知
    onTapScheduleNotification(data) {
      console.log(data);
      LocalNotifications.schedule([
        {
          id: 1,
          title: "SalesApp 準備改版!!",
          subtitle: "敬請期待!!",
          body:
            "SalesApp 即將於 XX/XX 改版，敬請期待!!",
          bigTextStyle: false, // Allow more than 1 row of the 'body' text on Android, but setting this to true denies showing the 'image'
          color: new Color("green"),
          image:
            "https://logodix.com/logo/923693.png",
          thumbnail:
            "https://logodix.com/logo/923693.png",
          forceShowWhenInForeground: true,
          channel: "vue-channel",
          ticker: "Special ticker text for Vue (Android only)",
          at: new Date(new Date().getTime() + 5 * 1000), // 10 seconds from now
          actions: [
            {
              id: "yes",
              type: "button",
              title: "Yes (and launch app)",
              launch: true
            },
            {
              id: "no",
              type: "button",
              title: "No",
              launch: false
            }
          ]
        }
      ])
      .then(() => {
        alert({
          title: "Notification scheduled",
          message: "ID: 1",
          okButtonText: "OK"
        });
      })
      .catch(error => console.log("doSchedule error: " + error));
    },
    // 取消所有預約推播
    onTapCancelAll() {
      LocalNotifications.cancelAll()
        .then(() => {
          alert({
            title: "All canceled",
            okButtonText: "Awesome!"
          });
        })
        .catch(error => console.log("doCancelAll error: " + error));
    },
  }
};
</script>

<style scoped>
.webview{
  background-color: #000;
}
Page {
  background-color: black;
}
</style>