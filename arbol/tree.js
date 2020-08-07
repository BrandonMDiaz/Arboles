import Node from './node.js'

export class BTree{

	constructor(){
		this.root = null;
	}

	isEmpty(){
		return this.root == null;
	}
	insertData(val){
		insertData(val,this.root);
	}
	insertData(val, node){
		if(node === null){
			node = new Node(val);
		}
		else {
			if (val < node.val){
				insertData(val, node.getLeft());
			}
			else {
				insertData(val, node.getRigth());
			}
		}
	}
}
