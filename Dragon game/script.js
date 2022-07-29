score=0;
cross=true;
bgAud=new Audio('defaultAudio.mpeg');
end=new Audio('aypaay.mpeg');
var vary=setInterval(() => {
    bgAud.play()
}, 1);
var cond=true;
// var vary=setInterval(bgAud.play(),10);
document.addEventListener('keydown',(e)=>{
    console.log(e.key,e.code);
    if(e.key=="ArrowUp"){
        dino=document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino');
        }, 700);
    }
    if(e.key=="ArrowRight"){
        dino=document.querySelector('.dino');
        dinox=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left=dinox+112+"px";
    }  
    if(e.key=="ArrowLeft"){
        dino=document.querySelector('.dino');
        dinox=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left=dinox-112+"px";
    }

})
setInterval(() => {
    dino=document.querySelector('.dino');
    obstacle=document.querySelector('.obstacle');
    gameOver=document.querySelector('.gameOver');
    dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));
    ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));
    offsetX=Math.abs(dx-ox);
    offsetY=Math.abs(dy-oy);
    console.log(offsetX,offsetY);
    if(offsetX<90&&offsetY<40&&cond){
        gameOver.style.visibility='visible';
        obstacle.classList.remove('obstacleAni');
        bgAud.pause();
        end.play();
        clearInterval(vary);
        cond=false;
        // setTimeout(() => {
        //     end.play();
        // }, 10000);

        
    }
    else if(offsetX<145&&cross&&cond){
        score+=1;
        updateScore(score);
        cross=false;
        setTimeout(() => {
            cross = true;
        }, 1000);
    }

}, 10);
function updateScore(score){
    scoreCont.innerHTML="Your Score: "+score;
}