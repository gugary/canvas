function gg(cid){
    var canvas=document.getElementById(cid);
    var cc=canvas.getContext('2d'); 
    var a=0.588,b=0.951,c=0.809,d=0.309;
    var x=[ 0, -a,  b, -b, a];
    var y=[-1,  c, -d, -d, c];
    function even(n){
	return n%2==0;
    }
    function star(z){
	cc.translate(z,y0);
	cc.beginPath();
	cc.moveTo(r*x[0],r*y[0]);
	for(var j=1;j<=4;j++){
	    cc.lineTo(r*x[j],r*y[j]);
	}
	cc.closePath();
	cc.fillStyle="white";
	cc.fill();
	cc.translate(-z,-y0);
    }
    var r=10;
    var x0=200,y0=100,dx=5*r,dy=2*r;
    var w=30*r;   
    var h=22*r;
    var x1=x0-dx,y1=y0-dy/2;
    for(var s=1;s<=13;s++){
	if (even(s)){
	    cc.fillStyle="white";
	}
	else{
	    cc.fillStyle="#CC0F0F";
	}
	cc.fillRect(x1,y1,2.5*w,h/7);
	y1+=h/7;
    }
    y1=y0-dy/2;
    cc.fillStyle="darkblue";
    cc.fillRect(x1,y1,w,h);
    cc.strokeRect(x1,y1,2.5*w,13*h/7);
    for(var row=1;row<=9;row++){
	if(even(row)){
	    x0+=dx/2;
	    y0+=dy;
	    for(var k=0;k<5;k++){
		star(x0+k*dx);
	    }
	}
	else{
	    x0-=dx/2;
	    y0+=dy;
	    for(var j=0;j<6;j++){
		star(x0+dx*j);
	    }
	} 
    }
}
