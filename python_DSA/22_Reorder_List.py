from typing import Optional

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def reorderList(self, head: Optional[ListNode]) -> None:
        """
        Do not return anything, modify head in-place instead.
        """
        h1 = head
        nodesList = []
        while h1 is not None:
            nodesList.append(h1)
            h1 = h1.next

        nodesListLen = len(nodesList)
        left = 0
        right = nodesListLen -  1
        p3 = None
        while left < right:
            p1 = nodesList[left]
            p2 = nodesList[right]
            if p3 is None:
                p3 = p1
            else:
                p3.next = p1
                p3 = p1
            p3.next = p2
            p3 = p2
            left = left + 1
            right = right - 1

        if p3 is not None:
            if left == right:
                p1 = nodesList[left]
                p3.next = p1
                p3 = p1
            p3.next = None

        