function gg(cid){
    function random(n){
	return Math.round(n*Math.random());
    }
    function randomRgb(){
	var c="rgb(";
	c += random(255);
	c += ",";
	c += random(255);
	c += ",";
	c += random(255);
	c += ")";
	return c;
    }
    function randomFilled(x,y){
	var radius=random(50);
	cc.beginPath();
	cc.arc(x,y,radius,0,2*pi);
	cc.fillStyle=randomRgb();
	cc.fill();
    }
    function randomCircle(x,y){
	var radius=random(100);
	cc.beginPath();
	cc.arc(x,y,radius,0,2*pi);
	cc.strokeStyle=randomRgb();
	cc.stroke();
    }
    function randomPoint(w,h){
	return {x:random(w),y:random(h)};
    }
    function randomFilledTriangle(p){ 
	var dx=random(100),dy=random(80);
	if(dx%2==0)dx*= -1;
	if(dy%2==0)dy*= -1;
	cc.beginPath();
	cc.moveTo(p.x,p.y);
	cc.lineTo(p.x,p.y+dy);
	cc.lineTo(p.x+dx,p.y);
	cc.lineTo(p.x,p.y);
	cc.fillStyle=randomRgb();
	cc.fill();
    }
    function raf(){
	return requestAnimationFrame;
    }
    function loop(){
	cc.clearRect(0,0,cw,ch);
	for(var j=0;j<500;j++){
	    var p=randomPoint(cw,ch);
	    if(j%5==0){
		randomFilled(p.x,p.y);
	    }
	    else if(j%21==0){
		randomFilledTriangle(p);
	    }
	    else{
		randomCircle(p.x,p.y);
	    }
	}
	setTimeout(function(){var f=raf();f(loop);},1000);
    }
    var canvas=document.getElementById(cid);
    var cc=canvas.getContext('2d');
    var cw=canvas.width, ch=canvas.height;
    var pi=Math.PI;
    loop();
} 

