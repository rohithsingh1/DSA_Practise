from typing import Optional

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        if list1 is None:
            return list2
        elif list2 is None:
            return list1
        elif list1 is not None and list2 is not None:
            new_head_node = None
            p3 = None
            p1 = list1
            p2 = list2
            while p1 is not None and p2 is not None:
                if p1.val <= p2.val:
                    if p3 is None:
                        new_head_node = p1
                        p3 = p1
                    else:
                        p3.next = p1
                        p3 = p1
                    p1 = p1.next
                elif p2.val < p1.val:
                    if p3 is None:
                        new_head_node = p2
                        p3 = p2
                    else:
                        p3.next = p2
                        p3 = p2
                    p2 = p2.next

            if p1 is not None:
                if p3 is not None:
                    p3.next = p1
                    p3 = p1
            elif p2 is not None:
                if p3 is not None:
                    p3.next  = p2
                    p3 = p2

            return new_head_node
            

        