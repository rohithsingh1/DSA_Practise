
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        sLen = len(s)
        tLen = len(t)
        if sLen != tLen:
            return False
        s_count = {}
        t_count = {}
        for i in range(len(s)):
            s_count[s[i]] = 1 + s_count.get(s[i],0)
            t_count[t[i]] = 1 + t_count.get(t[i],0)

        print("s_count>>>>>",s_count)
        print("t_count>>>>>>",t_count)
        return s_count == t_count


testCases=[
    {
        "s" : "anagram", "t" : "nagaram"
    },
    {
        "s" : "rat", "t" : "car"
    },
]

solution = Solution()
for testCase in testCases:
    result = solution.isAnagram(testCase["s"],testCase["t"])
    print("result>>>>>>>",result)
        