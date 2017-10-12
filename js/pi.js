function gg(cid){
    function yin_yang(R,alpha){
        var r=R/2,tr=R/10;
	cc.arc(0,0,R,alpha,pi+alpha,true);
	cc.arc(r*Math.cos(pi+alpha),r*Math.sin(pi+alpha),r,pi+alpha,alpha);
	cc.arc(r*Math.cos(alpha),r*Math.sin(alpha),r,pi+alpha,alpha,true);
	cc.fillStyle="black";
        cc.fill();
	cc.beginPath();
	cc.arc(r*Math.cos(pi+alpha),r*Math.sin(pi+alpha),tr,0,2*pi);
        cc.fillStyle="white";
        cc.fill();
	cc.beginPath();
	cc.arc(r*Math.cos(alpha),r*Math.sin(alpha),tr,0,2*pi);
	cc.fillStyle="black";
        cc.fill();
        cc.beginPath();
        cc.arc(0,0,R,0,2*pi);
        cc.stroke();
    }
    function erase(x,y,r){
        cc.beginPath();
        cc.arc(x,y,r+1,0,2*pi);
        cc.fillStyle="white";
        cc.fill();
    }
    function raspberry(w,h,R,delta){
	var x=0,y=0,alpha=0,r=Math.sqrt(w*w+h*h)/2;
	return function(){
 	    erase(x,y,r);
	    alpha+=delta;
	    x=R*Math.cos(alpha);
	    y=R*Math.sin(alpha);
	    cc.drawImage(img,x-w/2,y-h/2,w,h);
	};
    }
    function raf(){
	return requestAnimationFrame;
    }
    function animate(){
        erase(0,0,R);
        yin_yang(R,beta);
        beta+=db;
	for(j in fs) fs[j]();
	var f=raf();
	f(animate);
    }
    var canvas=document.getElementById(cid);
    var cc=canvas.getContext('2d'); 
    var cw= canvas.width,ch=canvas.height;
    var pi=Math.PI;
    var R=100,beta=0,db=-pi/30;
    var img=new Image();
    img.src="img/pi.png";
    var w,h,fs=[];
    img.onload=function(){
        w=img.width/5,h=img.height/5;
	fs.push(raspberry(w,h,180,pi/60));
	fs.push(raspberry(w/2,h/2,250,-pi/30));
	cc.translate(cw/2,ch/2);
	animate();
    };
}
