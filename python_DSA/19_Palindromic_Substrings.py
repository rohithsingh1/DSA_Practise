class Solution:
    def countSubstrings(self, s: str) -> int:
        org_str_len = len(s)
        if org_str_len == 0:
            return 0
        if org_str_len == 1:
            return 1
        total_palindrome_str = 0

        def expand_around_center(left:int,right:int,total_palindrome_str:int)->int:
            count_palindrome_str = 0
            while left >=0. and right < org_str_len and s[left] == s[right]:
                left = left -1
                right = right+1
                count_palindrome_str = count_palindrome_str + 1
            return total_palindrome_str + count_palindrome_str
        
        for i in range(org_str_len):
            total_palindrome_str = total_palindrome_str + 1
            # checking even length palindrome
            total_palindrome_str = expand_around_center(i,i+1,total_palindrome_str)
            # checking odd length palindrome
            total_palindrome_str = expand_around_center(i-1,i+1,total_palindrome_str)

        return total_palindrome_str


testCases = [
    {
        "s": "abc",      # expected: 3
    },
    {
        "s": "aaa",      # expected: 6
    },
    {
        "s": "a",        # expected: 1
    },
    {
        "s": "aa",       # expected: 3
    },
    {
        "s": "ab",       # expected: 2
    },
    {
        "s": "aba",      # expected: 4
    },
    {
        "s": "abba",     # expected: 6
    },
    {
        "s": "racecar",  # expected: 10
    },
    {
        "s": "aaaa",     # expected: 10
    },
    {
        "s": "abcde",    # expected: 5
    },
    {
        "s": "abccba",   # expected: 9
    },
    {
        "s": "banana",   # expected: 10
    },
    {
        "s": "abbc",     # expected: 5
    },
    {
        "s": "abcdedcba", # expected: 13
    },
]

solution = Solution()

for testcase in testCases:
    result = solution.countSubstrings(testcase["s"])
    print("total palindromic substrings for the string "+ testcase["s"] + " ======== " + str(result))