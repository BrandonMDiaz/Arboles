import BTree from "./arbol/tree.js";
import Draw from "./draw.js";

randomTree();
function randomTree(){
	console.log('hola')
	let draw = new Draw(document.getElementById("myCanvas"));
	let tree = new BTree(draw);
	let val = 0;
	for(let i = 0; i < 50; i++){
		val = Math.random();
		tree.insertData(val);
	}
}


