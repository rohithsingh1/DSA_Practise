from typing import Optional

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def isSameTree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:
        if root is not None and subRoot is not None:
            return (
                root.val == subRoot.val
                and self.isSameTree(root.left, subRoot.left)
                and self.isSameTree(root.right, subRoot.right)
            )
        elif root is None and subRoot is None:
            return True
        else:
            return False
    
    def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:
        if root is None:
            return False

        if self.isSameTree(root, subRoot):
            return True

        left_subtree = self.isSubtree(root.left, subRoot)
        right_subtree = self.isSubtree(root.right, subRoot)

        return left_subtree or right_subtree
