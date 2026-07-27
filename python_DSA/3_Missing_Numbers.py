from typing import List
from math import floor

class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        no_of_elements = len(nums)
        total_sum = (no_of_elements * (no_of_elements+1))//2
        actual_sum = sum(nums)
        return total_sum - actual_sum

