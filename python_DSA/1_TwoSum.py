from typing import List
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        eleToIndexMapper = {}
        for index,ele in enumerate(nums):
            hasElementFoundInMap = target - ele in eleToIndexMapper
            if hasElementFoundInMap:
                return [eleToIndexMapper[target-ele],index]
            else:
                eleToIndexMapper[ele] = index
        return []


testCases=[
    {
        "nums": [2, 7, 11, 15],
        "target": 9
    },
    {
        "nums": [3, 2, 4],
        "target": 6
    },
    {
        "nums": [3, 3],
        "target": 6
    }
]

solution = Solution()
for testCase in testCases:
    result = solution.twoSum(testCase["nums"],testCase["target"])
    print("result>>>>>>>",result)