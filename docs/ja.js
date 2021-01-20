function fadeOutEffect() {
    var fadeTarget = document.getElementById("target");
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.01;
        } else {
            clearInterval(fadeEffect);
        }
    }, 20);
    fadeTarget.style.zIndex = "-1";

var list = document.getElementsByClassName('coochie')

    for(var a=0; a < list.length; a++){
    list[a].removeAttribute('hidden');
    }
}
function openZoom() {
    var list = document.getElementsByClassName('hoochiecoochie')

        for(var a=0; a < list.length; a++){
        list[a].removeAttribute('hidden');
    }
    document.getElementById('classnsass').setAttribute('hidden', true)
    document.getElementById('target').play();
    setTimeout(function(){
        document.getElementById('lol').play();
        setTimeout(function(){
            document.getElementById('ha').play();
    }, 2000);
}, 2000);
    
}
document.getElementById('target').addEventListener('ended',fadeOutEffect,false);




