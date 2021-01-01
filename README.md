# Tree

    - Hierarchical structure
    - As opposed to Linked List, Array, which is linear, Tree can have zero or more child nodes
    - Every child of tree descends from root node.
    - Every child of a node descends from only one parent.
    - parent child relationship - directional - going one way
    - Leaf node: the very end of a tree structure
    - Sub tree
    - such as HTML -> Head, Body -> ...
    - Facebook Comments
    - Abstract Syntax Tree
    - Like Linked lists, we can contain anything within a note.
    - Linked list is technically a type of tree but with just one single path, and linear.
    - Nodes don't really have to reference thier parent.

## Binary Tree

    - Each (parent) node can only have either 0, 1 or 2 nodes (child)
    - Each child can only have one parent.
    - Each node represents a certain state.

    - Perfect Binary Tree: everthing filled in. All the leaf nodes are full, and there's no node that only has one child. The bottom layer of the ree is completely filled.
    - The number of total nodes on each level doubles as we move down the tree.
    - The number of nodes on the last level is equal to the sum of the number of nodes on all the other levels plus 1. = About half of our nodes are on the last level.
    - Here come the another Big O notation: O(log n).

    - Full Binary Tree: a node has either 0 or 2 childeren, but no 1 child.

## O(log n): How many node on each level?

    - Level 0: 2^0 = 1; (in Perfect Binary Tree case)
    - Level 1: 2^1 = 2;
    - Level 2: 2^2 = 4;
    - Level 3: 2^3 = 8;
    - ...
    - Number of nodes = 2^h - 1    h = height that starts from count of 1.
    - If we know how many levels are binary tree is we can find out how many total nodes there are.
    - Log nodes = steps(height).   log 100 = 2; 10^2 = 100;
    - Log n simply means that based on the height, the maximum number of decisions.
    - Instead of looking for 7 steps (in height 3 perfect binary tree), maximum 3 steps.
    - Efficiency here.
    - Log n: the choice of the next element on which to perform some osrt of action is one of several possibilities and only one needs to be chosen.
    - Such as Phone book.
    - Divide and Conquer when finding a phone book.
    - Don't need to check(operate on) every single element.

## Binary Search Tree

    - Rules:
    1. All child nodes in the tree to the right of the root node must be greater than the current node. IF go to the right, numbers increase.

    2. A node can only have up to 2 children because it's binary tree.

    - Searching and Lookup is very easy.

    - Lookup:   O(log N)
    - Insert:   O(log N)
    - Delete:   O(log N)

## Balanced VS Unbalanced BST

    - in unbalanced BST, where all nodes are just keep getting added to the i.e. right to right: it turns into a **Linked List** looping through every single node.
    - Then, Loopup:     O(n)
    - Insert: O(n)
    - Delete: O(n), Linear time.
    # CIQ: Why Unbalanced Binary Search Tree is bad?

    - How do we balance Tree? There are, but less chance to encounter it in interviews. It's time-consuming and there are some tradeoffs.

## Pros and Cons of BST

    - Pros: Better than O(n), Ordered, Flexible Size.
    - Cons: No O(1) operations.

    - Compared to Arrays, Search is faster where we O(n), or iterate through all variable if it's an unsorted array.
    - Compared to Hash Tables, although hash tables allow us to insert and search at constant time, with BST, we have sorted data, structure parent-child relationship.
    - Binary aren't the fastest of anything.

## AVL + Red Balck Tree (Balanced Binary Tree)

    - https://visualgo.net/bn/bst"
    - https://www.cs.usfca.edu/~galles/visualization/AVLtree.html
    - https://medium.com/basecs/the-little-avl-tree-that-could-86a3cae410c7

    - https://www.cs.usfca.edu/~galles/visualization/RedBlack.html
    - https://medium.com/basecs/painting-nodes-black-with-red-black-trees-60eacb2be9a5
    - Most popular Binary Trees

## Binary Heap

    - Every child belongs to a parent that has a greater priority or value
    - Max Heap: root value is the biggest one.
    - Min Heap: root = the smallest.
    - In a binary heap, every node on the top level has a greater value than every node on the next level down.
    - Heap can be used in any algorithm where ordering is important.

    - Lookup:   O(n)    ,less organised than BST, no meaning to the right or left child.
    - Insert:   O(log n)
    - Delete:   O(log n)

    - Why would we want?
    - Good at comparative operations, such as numbers greater than 33.

    - Heaps use a lot in data storage, priority queues, sorting algorithms.
    - "https://visualgo.net/en/heap"
    - Memory Heap != Heap Data Structure

    - It takes up the least amount of space possible, because of left right insertion.
    - It preverses this order of insertion (left or right)
    - It is useful for Priority Queue: Each element has its priority.
    - Such as Club, or Emergency room, Airplane

    - "https://www.geeksforgeeks.org/implementation-priority-queue-javascript/"
    - Pros: Better than O(n), Priority, Flexible Size, Fast Insert.
    - Cons: Slow lookup

## Trie (Prefix Tree)

    - Specialised tree good at searching especially text
    - Has empty root node.
    - Such as Auto suggestion, IP routing.
    - Advantage in Speed and space.
    - O(length of the word)
