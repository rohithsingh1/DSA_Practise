from typing import List

class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        unique_numbers = set()
        for ele in nums:
            if ele in unique_numbers:
                return True
            unique_numbers.add(ele)
        return False