function fadeOutEffect() {

    var list = document.getElementsByName('coochie')

    for(var a=0; a < list.length; a++){
    list[a].removeAttribute('hidden');
    }

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
    }, 100);
    setTimeout(() => {
        document.getElementById('elevatormusic').play();
        document.getElementById('elevatormusic').volume = .05;
    }, 5000);
    setTimeout(() => {
        fadeTarget.style.zIndex = "-1";
        document.getElementById("info").removeAttribute('hidden');
    }, 10000);
    
}
function openZoom() {

    var button =  document.getElementById('classnsass');
    button.style.opacity = "0";
    button.style.zIndex = "-3";
    document.getElementById('target').play();
    document.getElementById('aud').play();
    document.getElementById('blk').remove();
    setTimeout(() => {
        document.getElementById('preinfo').remove();
        
    }, 5000)
    

}

function pause() {
    document.getElementById('elevatormusic').pause();
}

document.getElementById('target').addEventListener('ended',fadeOutEffect,false);

