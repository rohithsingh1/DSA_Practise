
from typing import Optional
# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        if head is None:
            return head
        linkedListLen = 0
        h1 = head
        while h1 is not None:
            linkedListLen = linkedListLen + 1
            h1 = h1.next
        p = head
        #removing the first node
        if linkedListLen == n:
            p = p.next
            head.next = None
            return p
        else:
            i = 1
            while i < (linkedListLen - n):
                p = p.next
                i = i + 1
            nextNode = p.next
            p.next = nextNode.next
            nextNode.next = None
            return head