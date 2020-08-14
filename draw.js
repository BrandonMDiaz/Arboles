export default class Draw{
	constructor(canvas){
		this.canvas = canvas;
		this.context = this.canvas.getContext("2d");
		this.widthC = this.canvas.width;
		this.heightC = this.canvas.height;
		this.firstLevelLine = 10;
	}
	drawNode(dir,prof){
		let root = false;
		if(prof === 0){
			root = true;
		}
		this.DrawNode(root, dir * this.widthC, this.heightC/prof);
	}

	DrawNode(root,x,y,r = 20,sAngle = 0, eAngle = 2*Math.PI){
		context.beginPath();
		//x = centro del circulo respecto a x 
		//y = centro del circulo respecto a y 
		//r = radio del circulo, 
		//sAngle = donde empieza el angulo en radianes
		//eAngle = donde termina el angulo en radianes
		// arc(x,y,r,sAngle,eAngle);
		context.arc(95, 50, 40, 0, 2 * Math.PI);
		context.stroke();
		if(!root){
			drawLine(x, y, x / this.widthC, this.heightC*y);
		}
	}

	drawLine(x,y,x2,y2){
		context.beginPath()
		context.moveTo(x,y);
		context.lineTo(x2,y2);
		context.stroke();
	}

	resize(){
		this.firstLevelLine = this.firstLevelLine * 2;
	}
}
