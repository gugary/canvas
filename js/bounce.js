function gg(cid){
    function clear(x,y,r) {
	cc.beginPath();
	cc.arc(x,y,r,0,2*pi);
        cc.fillStyle='white';
        cc.fill();
    }    
    function yinyang(R){
	var r=R/2,tr=R/10;
	cc.beginPath();
	cc.arc(0,0,R,pi,0);
	cc.arc(r,0,r,0,pi);
	cc.arc(-r,0,r,0,pi,true);
	cc.fillStyle='black';
	cc.fill();
	cc.beginPath();
	cc.arc(-r,0,tr,0,2*pi);
	cc.fill();
	cc.beginPath();
	cc.arc(r,0,tr,0,2*pi);
	cc.fillStyle="white";
	cc.fill();
	cc.beginPath();
	cc.arc(0,0,R,0,2*pi);
	cc.stroke();
    }
    function random(n){
	return Math.round(n*Math.random());
    }
    function rand(){
	var s=random(100)%2==0?1:-1;
	return s*(2+random(3));
    }
    function raf(){
	return requestAnimationFrame;
    }
    function getf(){
	return function(dx,dy){
	    function animate() {
		clear(x,y,r+2);
		bounce();
		cc.save();
		cc.translate(x,y);
		cc.rotate(alpha);
		yinyang(r);
		cc.restore();
		alpha+=da;
		var f=raf();
		f(animate);
	    }
	    function bounce() {
		x+=dx;
		if(x>W1){
		    x=W1;dx*=-1;
		}else if(x<R0){
		    x=R0;dx*=-1;
		}
		y+=dy;
		if(y>H1){
		    y=H1;dy*=-1;
		}else if(y<R0){
		    y=R0;dy*=-1;
		}
	    }
	    var x=random(W),y=random(H);
	    var alpha=0,da=delta*(x%2==0?1:-1);
	    animate();
	};
    }    
    var canvas=document.getElementById(cid);
    var cc=canvas.getContext('2d');
    var pi=Math.PI,delta=pi/60;
    var W=canvas.width,H=canvas.height;
    var img=new Image();
    img.src="img/pi.png";
    var w,h,r,R0,W1,H1;
    img.onload=function(){
	w=.1*img.width,h=.1*img.height,r=.5*Math.sqrt(w*w+h*h);
	R0=r+1,W1=W-R0,H1=H-R0;
	for(var j=0;j<25;j++){
	    getf()(rand(),rand());
	}
    };
}
