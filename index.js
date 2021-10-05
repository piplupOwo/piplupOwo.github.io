
var hiddenImagesElement = document.getElementById("hiddenImages"); 
for (i=1; i<=11; i++){
    var frameNumber = i*2;
    if (frameNumber < 10){
        frameNumber = "0" + frameNumber;
    }
    var imgString = "<img src='scythehits/00" + frameNumber + ".png'>";
    hiddenImagesElement.innerHTML += imgString;


}

    var cd = false;

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    var attackElement = document.getElementById("attackButton");
    attackElement.addEventListener("click", attackFunction);

    function myTimeout(timeSleep, frameNumber, playerElement){
    setTimeout(function(){
        playerElement.style.backgroundImage = "url('scythehits/00" + frameNumber + ".png')";
        }, timeSleep);
    }

    function attackFunction(){

        if (cd){
            return;
        }

        cd = true;
        console.log("attack!!");
        var ehpBarElement = document.getElementById("enemyHP");
        var eHPElement = document.getElementById("EHP");

        var eHPString = eHPElement.innerHTML;
        var currentEHP = eHPString.split("/")[0];
        var maxEHP = eHPString.split("/")[1];

        console.log(currentEHP);
        console.log(maxEHP);

        var hit1 = getRndInteger(0,46);
        var hit2 = getRndInteger(0,23);
        var hit3 = getRndInteger(0,11);

        currentEHP -= hit1 + hit2 + hit3;

        if (currentEHP <= 0){
            currentEHP = 0;
        }

       

        var eHPPercent = ((currentEHP / maxEHP)*100).toFixed(0);
        

        var hitsplatsElement = document.getElementById("hitsplats");
        hitsplatsElement.innerHTML = "<p class='hit1'>" + hit1 + "</p>" + "<p class='hit2'>" + hit2 + "</p>" + "<p class='hit3'>" + hit3 + "</p>";
        
        console.log("change attack");
        var playerElement = document.getElementById("player");
        for (i=1; i<=11; i++){
            var frameNumber = i*2;
            if (frameNumber < 10){
                frameNumber = "0" + frameNumber;
            }
            //console.log("url('scythehits/00" + frameNumber + ".png')")
            myTimeout(150*i, frameNumber, playerElement);




        }
        //document.getElementById("player").style.backgroundImage = 'url("attack.gif")';
        
        setTimeout(function(){
        document.getElementById("hitsplats").style.visibility = "visible";
        ehpBarElement.style.width = eHPPercent + "%";
        eHPElement.innerHTML = currentEHP + "/" + maxEHP;
    }, 800);
        

        setTimeout(function(){
            document.getElementById("player").style.backgroundImage = 'url("scythehits/0002.png")';
        },1500);
        
        setTimeout(function(){cd = false;}, 3000);
        
        setTimeout(function(){
        document.getElementById("hitsplats").style.visibility = "hidden";}, 2000);
        
    }
