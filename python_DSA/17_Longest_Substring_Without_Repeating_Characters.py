class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        len_str = len(s)
        if len_str == 0:
            return len_str
        elif len_str == 1:
            return len_str
        else:
            i=0
            j=0
            max_len_substring = 0
            unique_characters = set()
            while j < len_str:
                while s[j] in unique_characters:
                    unique_characters.remove(s[i])
                    i = i+1
                unique_characters.add(s[j])
                max_len_substring = max(max_len_substring , j-i+1)
                j = j+1
            return max_len_substring