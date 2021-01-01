class Node {
	constructor(value) {
		this.left = null;
		this.right = null;
		this.value = value;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}
	// // ------------------------------- My answer: don't know why un-nested loop is not working...
	// insert(value) {
	// 	const newNode = new Node(value);
	// 	let current = this.root;
	// 	if (!current) {
	// 		this.root = newNode;
	// 		return this;
	// 	}
	// 	while (current) {
	// 		if (value > current.value) {
	// 			// current = current.right;
	// 			// if (!current.right) {
	// 			// 	current.right = newNode;
	// 			// 	return this;
	// 			// }
	// 			current = current.right;
	// 			// if (!cu) this.root.right = newNode; // go right
	// 		} else if (value < current.value) {
	// 			// if (!current.left) {
	// 			// 	current.left = newNode;
	// 			// 	return this;
	// 			// }
	// 			current = current.left;
	// 		} // else if (value === current.value) {
	// 		// 	console.log("Duplicate value...");
	// 		// }
	// 		// Sometimes nested if is better....?!
	// 		if (current === null) {
	// 			current = newNode;
	// 			console.log(current);
	// 			return this;
	// 		} else if (current !== null) {
	// 			console.log("stored node");
	// 		}
	// 	}
	// }

	// ------------------------------- Solution
	insert(value) {
		const newNode = new Node(value);
		if (this.root === null) {
			this.root = newNode;
		} else {
			let currentNode = this.root;
			while (true) {
				// traverse
				if (value < currentNode.value) {
					// Left
					if (!currentNode.left) {
						currentNode.left = newNode;
						return this;
					}
					currentNode = currentNode.left;
				} else {
					// right
					if (!currentNode.right) {
						currentNode.right = newNode;
						return this;
					}
					currentNode = currentNode.right;
				}
			}
		}
	}

	// // ------------------------------- My answer
	// lookup(value) {
	// 	let current = this.root;
	// 	while (current) {
	// 		if (value > current.value) {
	// 			current = current.right;
	// 		} else if (value < current.value) {
	// 			current = current.left;
	// 		}
	// 		if (current.value === value) {
	// 			return "Found";
	// 		} else {
	// 			return "Not Found";
	// 		}
	// 	}
	// }

	// // ------------------------------- Solution
	// return boolean
	lookup(value) {
		if (!this.root) {
			return false;
		}
		let currentNode = this.root;
		while (currentNode) {
			if (value < currentNode.value) {
				currentNode = currentNode.left;
			} else if (value > currentNode.value) {
				currentNode = currentNode.right;
			} else if (currentNode.value === value) {
				// return console.log(currentNode);
				return true;
			}
		}
		return false;
	}
	// // ------------------------------- Solution: a bit werid solution compared to the normal ones in Google., NO my answer.
	// remove
	remove(value) {
		if (!this.root) {
			return false;
		}
		let currentNode = this.root;
		let parentNode = null;
		while (currentNode) {
			if (value < currentNode.value) {
				parentNode = currentNode;
				currentNode = currentNode.left;
			} else if (value > currentNode.value) {
				parentNode = currentNode;
				currentNode = currentNode.right;
			} else if (currentNode.value === value) {
				//We have a match, get to work!

				//Option 1: No right child:
				if (currentNode.right === null) {
					if (parentNode === null) {
						this.root = currentNode.left;
					} else {
						//if parent > current value, make current left child a child of parent
						if (currentNode.value < parentNode.value) {
							parentNode.left = currentNode.left;

							//if parent < current value, make left child a right child of parent
						} else if (currentNode.value > parentNode.value) {
							parentNode.right = currentNode.left;
						}
					}

					//Option 2: Right child which doesnt have a left child
				} else if (currentNode.right.left === null) {
					currentNode.right.left = currentNode.left;
					if (parentNode === null) {
						this.root = currentNode.right;
					} else {
						//if parent > current, make right child of the left the parent
						if (currentNode.value < parentNode.value) {
							parentNode.left = currentNode.right;

							//if parent < current, make right child a right child of the parent
						} else if (currentNode.value > parentNode.value) {
							parentNode.right = currentNode.right;
						}
					}

					//Option 3: Right child that has a left child
				} else {
					//find the Right child's left most child
					let leftmost = currentNode.right.left;
					let leftmostParent = currentNode.right;
					while (leftmost.left !== null) {
						leftmostParent = leftmost;
						leftmost = leftmost.left;
					}

					//Parent's left subtree is now leftmost's right subtree
					leftmostParent.left = leftmost.right;
					leftmost.left = currentNode.left;
					leftmost.right = currentNode.right;

					if (parentNode === null) {
						this.root = leftmost;
					} else {
						if (currentNode.value < parentNode.value) {
							parentNode.left = leftmost;
						} else if (currentNode.value > parentNode.value) {
							parentNode.right = leftmost;
						}
					}
				}
				return true;
			}
		}
	}
}

const tree = new BinarySearchTree();
// console.log(tree);
tree.insert(9);
// console.log(tree);
tree.insert(4);
// console.log(tree);
tree.insert(6);
// console.log(tree);
tree.insert(20);
// console.log(tree);
tree.insert(170);
// console.log(tree);
tree.insert(15);
// console.log(tree);
tree.insert(1);
// console.log(tree);
tree.lookup(9);
// console.log(tree);
tree.remove(170);
JSON.stringify(traverse(tree.root));

// //     9
// //  4     20
// //1  6  15  170

function traverse(node) {
	const tree = { value: node.value };
	tree.left = node.left === null ? null : traverse(node.left);
	tree.right = node.right === null ? null : traverse(node.right);
	return console.log(tree);
}
