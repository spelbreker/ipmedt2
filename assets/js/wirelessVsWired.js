/**
 * Created by Patrick on 27-10-2015.
 */

$(function () {

    var video=$('#wirelessVideo').get(0);

    video.addEventListener('ended',function(){
        v=video.currentSrc;
        video.src='';
        video.src=v;
    });

});