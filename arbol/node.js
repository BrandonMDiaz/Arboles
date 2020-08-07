//Implementacion de nodo para arbol binario
export class Node {

	constructor(){
		this.val = null;
		this.nodeR = null;
		this.nodeL = null;
	}
	constructor(v){
		this.val = v;		
	}

	getData(){
		return this.val;
	}

	getRigth(){
		return this.nodeR;
	}

	getLeft(){
		return this.nodeL;
	}

	setRigth(node){
		this.nodeR = node;
	}

	setLeft(node){
		this.nodeL = node;
	}

}
