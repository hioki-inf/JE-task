// なぜか下2行を書くjsファイルに書かないと動作しない、application.jsでも不可
import $ from 'jquery';
import 'slick-carousel';

$(function() {
    $('.slide-show').slick();
});
// console.log($('#file1'));
// console.log($);
// console.log($.fn.slick);