class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        closing_to_opening = {
            ']':'[',
            '}':'{',
            ')':'('
        }
        for char in s:
            if char in closing_to_opening:
                expected_opening = closing_to_opening[char]
                if len(stack) == 0:
                    return False
                else:
                    stack_top_element = stack.pop()
                    if expected_opening != stack_top_element:
                        return False
            else:
                stack.append(char)

        if len(stack)>0:
            return False
        else:
            return True