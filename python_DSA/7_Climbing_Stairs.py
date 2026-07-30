class Solution:
    def climbStairs(self, n: int) -> int:
        if n==1 or n==2 or n==3:
            return n
        value_1 = 2
        value_2 = 3
        new_value = value_1 + value_2
        for i in range(4,n+1):
            new_value = value_1 + value_2
            value_1 = value_2
            value_2 = new_value

        return new_value
            