import Node from './node.js'
export default class BTree{

	constructor(draw){
		this.root = null;
		this.draw = draw;
	}

	isEmpty(){
		return this.root == null;
	}

	insertData(val){
		this.InsertData(val,this.root,0,0);
	}

	InsertData(val, node, direccion, profundidad){
		if(node === null){
			node = new Node(val);
			this.draw.drawNode(direccion, profundidad);
		}
		else {
			if (val < node.val){
				this.InsertData(val, node.getLeft(),--direccion, ++profundidad);
			}
			else {
				this.InsertData(val, node.getRigth(),++direccion, ++profundidad);
			}
		}
	}
}
