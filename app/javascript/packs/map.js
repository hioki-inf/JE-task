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
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}
initMap();

// 住所
$(document).on('click', "#jpostal-trigger", function() {
  console.log('click');
  console.log($('#postcode'));
  console.log(
    $('#postcode').jpostal(
      {
      postcode : ['#postcode'],
      address : {
        '#prefectures'  : '%3'
      }
    })
  );
  
  $('#postcode').jpostal(
    {
    postcode : ['#postcode'],
    address : {
      '#prefectures'  : '%3'
      // '#address2'  : '%4',
      // '#address3'  : '%5',
      // '#address1_kana'  : '%8',
      // '#address2_kana'  : '%9',
      // '#address3_kana'  : '%10'
    }
  });
});

console.log('test');