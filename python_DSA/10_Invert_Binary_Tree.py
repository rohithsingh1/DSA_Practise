from typing import Optional

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        if root is None:
            return root
        elif root is not None and root.left is None and root.right is None:
            return root
        else:
            def isLeafNode(node: Optional[TreeNode]):
                if(node is not None and root.left is None and root.right is None):
                    return True
                else:
                    return False
            def convertTreeToInvertTree(root: Optional[TreeNode]):
                if root is None:
                    return root
                if isLeafNode(root):
                    return root
                lSubTree = convertTreeToInvertTree(root.left)
                rSubTree = convertTreeToInvertTree(root.right)
                root.left = rSubTree
                root.right = lSubTree    
                return root
            
            return convertTreeToInvertTree(root)
                