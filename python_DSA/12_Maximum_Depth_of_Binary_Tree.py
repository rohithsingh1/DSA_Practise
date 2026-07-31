from typing import Optional
# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def isLeafNode(self,root:Optional[TreeNode]):
        if root is not None and root.left is None and root.right is None:
            return True
        else:
            return False
        
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        if root is None:
            return 0
        elif self.isLeafNode(root):
            return 1
        else:
            lsubTreeHeight = 0
            rSubTreeHeight = 0
            if root.left is not None:
                lsubTreeHeight = self.maxDepth(root.left)
            if root.right is not None:
                rSubTreeHeight = self.maxDepth(root.right)
            return max(lsubTreeHeight,rSubTreeHeight) + 1