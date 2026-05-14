class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        numMap = {}

        for i in range(0, len(nums)):
            if nums[i] in numMap:
                return True
            
            numMap[nums[i]] = 1

        return False