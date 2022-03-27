if(window.DeviceMotionEvent) {
    //speed settings
    var speed = 15; 
    //end speed settings
    var x, y, z, lastX, lastY, lastZ;
    x = y = z = lastX = lastY = lastZ = 0;

    window.addEventListener('devicemotion', function(event){
        var acceleration = event.accelerationIncludingGravity;
        x = acceleration.x;
        y = acceleration.y;
        let myPic = new Array("pictures/one.png",
        "pictures/two.png",
        "pictures/three.png",
        "pictures/four.png",
        "pictures/five.png",
        "pictures/six.png");
        if(Math.abs(x-lastX) > speed || Math.abs(y-lastY) > speed) {
            document.querySelector('#pic2').style.display='flex';
            window.navigator.vibrate(200);
            var randomNum1= Math.floor(Math.random()*myPic.length);
            var randomNum2= Math.floor(Math.random()*myPic.length);
            document.getElementById("pic1").src=myPic[randomNum1];
            document.getElementById("pic2").src=myPic[randomNum2];
        }
        window.navigator.vibrate(0);
        lastX = x;
        lastY = y;
    }, false);
}
