// import GoogleMapsApi定義
(g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})
        ({key: process.env.GOOGLE_MAP_API_KEY, v: "weekly"});
import $ from 'jquery';
import 'jquery-jpostal-ja'
        
let map;

// GoogleMapsApiサンプル
async function initMap() {
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 35.65958547, lng: 139.69872498 },
    zoom: 16,
  });
}
initMap();

// 郵便番号から住所入力
$(window).ready(function() {
  $('#postcode').jpostal(
    {
    postcode : ['#postcode'],
    address : {
      '#prefectures'  : '%3',
      '#address1'  : '%4',
      '#address2'  : '%5%6%7'
    }
  });
});

// 入力した住所の位置を表示
$(document).on('click', "#map-jump", function() {
  let geocoder = new google.maps.Geocoder();
  let address = $('.jump-target').toArray().reduce((acc, curr) => acc + curr.value, '');
  
  geocoder.geocode( { 'address': address}, function(results, status) {
    if (status == 'OK') {
      map.setCenter(results[0].geometry.location);
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
});