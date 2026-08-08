
class Solution:
    def threeSum(self, nums: list[int]) -> list[list[int]]:
        nums.sort()
        threeSumList = []
        numsLen = len(nums)
        for i in range(numsLen):
            a = nums[i]
            j = i+1
            k = numsLen - 1
            if i==0 or nums[i] != nums[i-1]:
                while j < k:
                    totalSum = a + nums[j] + nums[k]
                    if totalSum <0:
                        j = j+1
                    elif totalSum>0:
                        k = k-1
                    else:
                        threeSumList.append([a,nums[j],nums[k]])
                        j = j + 1
                        while nums[j] == nums[j-1] and j<k:
                            j = j + 1
                
        return threeSumList


testCases = [
    {
        "nums": [-1, 0, 1, 2, -1, -4],  # expected: [[-1, -1, 2], [-1, 0, 1]]
    },
    {
        "nums": [0, 1, 1],  # expected: []
    },
    {
        "nums": [0, 0, 0],  # expected: [[0, 0, 0]]
    },
    {
        "nums": [0, 0, 0, 0],  # expected: [[0, 0, 0]]
    },
    {
        "nums": [1, 2, 3],  # expected: []
    },
    {
        "nums": [-1, -2, -3],  # expected: []
    },
    {
        "nums": [-1, -1, -1, 2, 2],  # expected: [[-1, -1, 2]]
    },
    {
        "nums": [-2, 0, 0, 2, 2],  # expected: [[-2, 0, 2]]
    },
    {
        "nums": [-2, -1, 0, 1, 2],  # expected: [[-2, 0, 2], [-1, 0, 1]]
    },
    {
        "nums": [-2, 0, 1, 1, 2],  # expected: [[-2, 0, 2], [-2, 1, 1]]. test case failed
    },
    {
        "nums": [-1, 0, 1, 0],  # expected: [[-1, 0, 1]]
    },
    {
        "nums": [-4, -2, -2, -2, 0, 1, 2, 2, 2, 4],
        # expected: [[-4, 0, 4], [-4, 2, 2], [-2, -2, 4], [-2, 0, 2]] test case failed
    },
    {
        "nums": [-100000, 0, 100000],  # expected: [[-100000, 0, 100000]]
    },
    {
        "nums": [-100000, 50000, 50000],  # expected: [[-100000, 50000, 50000]]
    },
]

solution = Solution()
for testcase in testCases:
    result = solution.threeSum(testcase["nums"])
    print(result)