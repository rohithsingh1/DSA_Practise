class Solution:
    def isPalindrome(self, s: str) -> bool:
        def getAlphaNumericString(s: str)-> str:
            alpha_numeric_string = ''
            for ch in s:
                if ch.isalnum():
                    alpha_numeric_string = alpha_numeric_string + ch
            return alpha_numeric_string.lower()

        alpha_numeric_string = getAlphaNumericString(s)
        length_alpha_numeric_string = len(alpha_numeric_string)
        left = 0
        right = length_alpha_numeric_string - 1
        i=0
        while left < right and i < length_alpha_numeric_string//2:
            if alpha_numeric_string[left] != alpha_numeric_string[right]:
                return False
            left = left +1
            right = right-1
            i = i+1

        return True