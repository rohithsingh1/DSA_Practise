from typing import List

class Solution:
    def maxArea(self, height: List[int]) -> int:
        left = 0
        right = len(height)-1
        maxAreaWithStorage = 0
        while left < right:
            area = (right-left)*min(height[left],height[right])
            maxAreaWithStorage = max(maxAreaWithStorage,area)
            if height[left] <= height[right]:
                left = left + 1
            else:
                right = right - 1
        return maxAreaWithStorage

testCases = [
    {
        "h": [1, 8, 6, 2, 5, 4, 8, 3, 7],  # expected: 49
    },
    {
        "h": [1, 1],  # expected: 1
    },
    {
        "h": [1, 2],  # expected: 1
    },
    {
        "h": [2, 1],  # expected: 1
    },
    {
        "h": [1, 2, 3, 4, 5],  # expected: 6
    },
    {
        "h": [5, 4, 3, 2, 1],  # expected: 6
    },
    {
        "h": [5, 5, 5, 5],  # expected: 15
    },
    {
        "h": [1, 100, 1, 1, 1, 100, 1],  # expected: 400
    },
    {
        "h": [100, 1, 1, 1, 100],  # expected: 400
    },
    {
        "h": [1, 3, 2, 5, 25, 24, 5],  # expected: 24
    },
    {
        "h": [2, 3, 10, 5, 7, 8, 9],  # expected: 36
    },
    {
        "h": [1, 2, 1],  # expected: 2
    },
    {
        "h": [4, 3, 2, 1, 4],  # expected: 16
    },
    {
        "h": [1, 2, 4, 3],  # expected: 4
    },
]

solution = Solution()
for tescase in testCases:
    result = solution.maxArea(tescase['h'])
    print("result>>>>>",result)