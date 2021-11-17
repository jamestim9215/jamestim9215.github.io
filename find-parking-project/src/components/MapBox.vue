<template>
  <div id="map"></div>
</template>

<script>
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";

import parkingInfo from "@/assets/json/parkingInfo.json";
import axios from 'axios';

export default {
  props: {
    carType: Number,
    getLngLat: Boolean,
    city: String,
    cityArea: String,
    mapStylesSelected: String
  },
  data() {
    return {
      map: null,
      accessToken:
        "pk.eyJ1IjoiamFtZXN0aW05MjE1IiwiYSI6ImNrdmo2Y2I4aDVmejEzMm1zbThsdGdoajAifQ.UfBJAI7fFsv2wcAEBo6WUA",
      bounds: [
        [119.3620389067818, 21.83282743468497],
        [122.07013958372167, 25.34391086143183],
      ],
      center: [121.5173399, 25.0475613],
      currentMarkers: [],
      userCoordinates: [null, null],

      lngLatMaker: null,

      parkingInfo: null,
      googleDataList: []
    };
  },
  mounted() {
    this.mapBoxInitial();
    
  },
  watch: {
    carType() {
      this.setMaker();
    },
    city:{
      handler:function(oldValue,newValue){
        if(oldValue != newValue) this.setMaker();
      }
    },
    cityArea: {
      handler:function(oldValue,newValue){
        if(oldValue != newValue) this.setMaker();
      }
    },
    getLngLat() {
      if (this.lngLatMaker !== null) {
        this.lngLatMaker.remove();
        const coordinates = document.getElementById("coordinates");
        coordinates.style.display = "none";
      }
      if (this.getLngLat == true) {
        this.setLngLatMaker();
      }
    },
    mapStylesSelected:{
      handler:function(oldValue,newValue){
        if(oldValue != newValue) this.map.setStyle(this.mapStylesSelected);
      }
    }
  },
  methods: {
    isMatchCarType(type, list) {
      var isMatch = false;
      for (var key in list) {
        if (list[key] == type) {
          isMatch = true;
          break;
        }
      }
      return isMatch;
    },
    isMatchArea(address) {
      var isMatch = false;
      if (address.match(this.city) && address.match(this.cityArea)) {
        isMatch = true;
      }
      return isMatch;
    },
    isMatchLngLat(coordinates) {
      // console.log("["+this.map.getBounds()._sw.lng+" , "+coordinates[0]+" , "+this.map.getBounds()._ne.lng+"]");
      // console.log("["+this.map.getBounds()._sw.lat+" , "+coordinates[1]+" , "+this.map.getBounds()._ne.lat+"]");
      var isMatch = false;
      if (this.map.transform) {
        if (
          this.map.getBounds()._sw.lng < coordinates[0] &&
          this.map.getBounds()._ne.lng > coordinates[0] &&
          this.map.getBounds()._sw.lat < coordinates[1] &&
          this.map.getBounds()._ne.lat > coordinates[1]
        ) {
          isMatch = true;
        }
      }
      return isMatch;
    },
    getGoogleData(){
        var url = "https://script.google.com/macros/s/AKfycbyF5N0MMaikCNTLiQFS5s73my7lGBhPPadY8B0YfVyrp6hhR-ZZEmzvjq87xwDpzEnOwg/exec";
        var _this = this;
        axios.get(url)
        .then(function (response) {
            var data = response.data;
            for(var i=1; i<data.length;i++){
                var carType = [];
                if(data[i][9].match(/汽車/)) carType.push(1);
                if(data[i][9].match(/大型重機/)) carType.push(2);
                if(data[i][9].match(/普通重機/)) carType.push(3);
                var coordinates = data[i][8].split(",");
                for(var key in coordinates){
                    coordinates[key] = parseFloat(coordinates[key]);
                }

                var _data = {
                    "imgUrl": data[i][5],
                    "properties": {
                        "title": data[i][3],
                        "info": data[i][4]?data[i][4]:'-',
                        "times": data[i][6]?data[i][6]:'-',
                        "address": data[i][7],
                        "iconSize": [
                            50,
                            50
                        ],
                        "carInfo": {
                            "car": {
                                "halfAnHour": data[i][10]?data[i][10].toString():'-',
                                "anHour": data[i][11]?data[i][11].toString():'-',
                                "dayMax": data[i][12]?data[i][12].toString():'-',
                                "oneTime": data[i][13]?data[i][13].toString():'-',
                                "other": data[i][14]?data[i][14].toString():'-',
                            },
                            "superBike": {
                                "halfAnHour": data[i][15]?data[i][15].toString():'-',
                                "anHour": data[i][16]?data[i][16].toString():'-',
                                "dayMax": data[i][17]?data[i][17].toString():'-',
                                "oneTime": data[i][18]?data[i][18].toString():'-',
                                "other": data[i][19]?data[i][19].toString():'-',
                            },
                            "scooter": {
                                "halfAnHour": data[i][20]?data[i][20].toString():'-',
                                "anHour": data[i][21]?data[i][21].toString():'-',
                                "dayMax": data[i][22]?data[i][22].toString():'-',
                                "oneTime": data[i][23]?data[i][23].toString():'-',
                                "other": data[i][24]?data[i][14].toString():'-',
                            }
                        },
                        "carType" : carType
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": coordinates
                        
                    }
                }
                if(data[i][1]==1) _this.googleDataList.push(_data);
            }
            var downloadData = {
                "type": "",
                "features": _this.googleDataList
            }
            _this.parkingInfo = downloadData;
            _this.setMakerInit();

            _this.setUserArea();
      

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
       
    },
    setUserArea(){
      var _this = this;
      var lngLat = _this.center[0] + ',' + _this.center[1];
      
      axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/'+lngLat+'.json?access_token='+_this.accessToken)
      .then(function (response) {
        console.log(response.data);
        _this.$emit("userCityArea", response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    setMakerInit(){
      // this.map.on("resize", () => {
      //   this.setMaker();
      // });
      this.map.on("dragend", () => {
        this.setMaker();
      });
      this.map.on("zoomend", () => {
        this.setMaker();
      });

      this.setMaker();

      console.log("Map Init!!");
      // setTimeout(() => {
        document.getElementById("loading-cover").classList.add("active");
        setTimeout(() => {
          document.getElementById("loading-cover").remove();
        }, 1000);
      // }, 1500);
    },
    setMap(){
      this.map = new mapboxgl.Map({
        container: "map", // container ID
        style: this.mapStylesSelected, // style URL
        center: this.center, // starting position [lng, lat]
        // center: [121.54339, 24.978672],
        // zoom: 16, // starting zoom
        zoom: 14, // starting zoom
        // bearing: 0,
        // pitch: 60,
        trackResize: true,
        maxBounds: this.bounds,
      });

      // use google sheet data
      // this.getGoogleData();

      // use local json file
      this.parkingInfo = parkingInfo;
      this.setMakerInit();
      this.setUserArea();

      this.map.addControl(
        new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true,
          },
          trackUserLocation: true,
          showUserHeading: true,
        })
      );
    },
    mapBoxInitial() {
      this.parkingInfo = parkingInfo;
      mapboxgl.accessToken = this.accessToken;

        // console.log("codeName = " + navigator.appCodeName);
        // console.log("MinorVersion= " + navigator.appMinorVersion);
        // console.log("Name = " + navigator.appName);
        // console.log("Version = " + navigator.appVersion);
        // console.log("UserAgent = " + navigator.userAgent);
        // console.log("vendor = " + navigator.vendor);
        // console.log("platform = " + navigator.platform);
        // console.log("language = " + navigator.language);
        // console.log("javaEnabled = " + navigator.javaEnabled());

        console.log(navigator.geolocation);

      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(this.successCallback,this.errorCallback);
      }else{
        console.log("NONE");
      }
    },
    successCallback(position){
      this.userCoordinates[0] = position.coords.longitude;
      this.userCoordinates[1] = position.coords.latitude;
      this.center[0] = this.userCoordinates[0];
      this.center[1] = this.userCoordinates[1];

      this.setMap();
    },
    errorCallback(error) {
      var errorTypes={
            0:"不明原因錯誤",
            1:"請提供您的定位資訊", //使用者拒絕提供位置資訊
            2:"無法取得位置資訊",
            3:"位置查詢逾時"
      };
      console.log(errorTypes[error.code]);
      // alert(errorTypes[error.code]);
      this.setMap();
      //alert(error.message);  //測試時用
    },
    setMaker() {
      if (this.currentMarkers !== null) {
        for (var i = this.currentMarkers.length - 1; i >= 0; i--) {
          this.currentMarkers[i].remove();
        }
      }
      // Add markers to the map.
      for (const marker of this.parkingInfo.features) {
        if (
          this.isMatchCarType(this.carType, marker.properties.carType) &&
          this.isMatchArea(marker.properties.address) &&
          this.isMatchLngLat(marker.geometry.coordinates)
        ) {
          // Create a DOM element for each marker.
          const el = document.createElement("div");
          // const width = marker.properties.iconSize[0];
          // const height = marker.properties.iconSize[1];
          el.className = "marker";
          // el.style.width = `${width}px`;
          // el.style.height = `${height}px`;
          // el.style.visibility = '';

          const tag = document.createElement("div");
          tag.className = "tag";
          el.append(tag);
          if(marker.imgUrl!='' && marker.imgUrl!=null){
            const img = document.createElement("img");
            img.className = "img";
            img.src = `${marker.imgUrl}`;
            el.append(img);
          }
          

          el.addEventListener("click", () => {
            this.map.flyTo({
              // These options control the ending camera position: centered at
              // the target, at zoom level 9, and north up.
              center: marker.geometry.coordinates,
              zoom: 18,
              bearing: 0,

              // These options control the flight curve, making it move
              // slowly and zoom out almost completely before starting
              // to pan.
              speed: 1, // make the flying slow
              curve: 1, // change the speed at which it zooms out

              // This can be any easing function: it takes a number between
              // 0 and 1 and returns another number between 0 and 1.
              easing: (t) => t,

              // this animation is considered essential with respect to prefers-reduced-motion
              essential: true,
            });
            var data = marker.properties;
            this.$emit("parkingInfo", data);
            // window.alert(marker.properties.info);
          });

          const popup = new mapboxgl.Popup({ offset: 25 }).setText(
            marker.properties.title
          );

          // Add markers to the map.
          var oneMarker = new mapboxgl.Marker(el)
            .setLngLat(marker.geometry.coordinates)
            .setPopup(popup) // sets a popup on this marker
            .addTo(this.map);
          this.currentMarkers.push(oneMarker);
        }
      }
    },
    onDragEnd() {
      const coordinates = document.getElementById("coordinates");
      const lngLat = this.lngLatMaker.getLngLat();
      coordinates.style.display = "block";
      coordinates.innerHTML = `[Longitude, Latitude]<br />[${lngLat.lng}, ${lngLat.lat}]`;
    },
    setLngLatMaker() {
      this.lngLatMaker = new mapboxgl.Marker({
        draggable: true,
        color: "#2ee7d6",
      })
        .setLngLat(this.map.getCenter())
        .addTo(this.map);

      this.onDragEnd();

      this.lngLatMaker.on("dragend", this.onDragEnd);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
