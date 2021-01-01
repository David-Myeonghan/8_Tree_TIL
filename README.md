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
