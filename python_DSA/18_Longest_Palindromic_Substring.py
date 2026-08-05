class Solution:
    def longestPalindrome(self, s: str) -> str:
        org_str_len = len(s)
        if org_str_len == 0:
            return s
        if org_str_len == 1:
            return s
        max_palindrome_str = s[0]

        def expand_around_center(left,right,max_palindrome_str):
            store_indexes = [-1,-1]
            while left >=0. and right < org_str_len and s[left] == s[right]:
                store_indexes[0] = left
                store_indexes[1] = right
                left = left -1
                right = right+1
            if store_indexes[0] !=-1:
                crt_palindrome_len = store_indexes[1] - store_indexes[0] + 1
                if crt_palindrome_len > len(max_palindrome_str):
                   return s[store_indexes[0]: store_indexes[1]+1]
            return max_palindrome_str
        
        for i in range(org_str_len):
            # checking even length palindrome
            max_palindrome_str = expand_around_center(i,i+1,max_palindrome_str)
            # checking odd length palindrome
            max_palindrome_str = expand_around_center(i-1,i+1,max_palindrome_str)

        return max_palindrome_str


testCases = [
    {
        "s": "babad",   # expected: "bab" or "aba"
    },
    {
        "s": "cbbd",    # expected: "bb"
    },
    {
        "s": "a",       # expected: "a"
    },
    {
        "s": "",        # expected: ""
    },
    {
        "s": "aa",      # expected: "aa"
    },
    {
        "s": "ab",      # expected: "a" or "b"
    },
    {
        "s": "aaaa",    # expected: "aaaa"
    },
    {
        "s": "abcde",   # expected: any single char like "a"
    },
    {
        "s": "racecar", # expected: "racecar"
    },
    {
        "s": "bananas", # expected: "anana"
    },
    {
        "s": "abb",     # expected: "bb"
    },
    {
        "s": "bba",     # expected: "bb"
    },
    {
        "s": "aacabdkacaa", # expected: "aca"
    },
    {
        "s": "forgeeksskeegfor", # expected: "geeksskeeg"
    },
]

solution = Solution()
for testCase in testCases:
    result = solution.longestPalindrome(testCase["s"])
    print("result>>>>>>>",result)