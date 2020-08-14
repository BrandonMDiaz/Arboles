//Implementacion de nodo para arbol binario
export default class Node {

	constructor(v = null){
		this.val = v;
		this.nodeR = null;
		this.nodeL = null;		
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
