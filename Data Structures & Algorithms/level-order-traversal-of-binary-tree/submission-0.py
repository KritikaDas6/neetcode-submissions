# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        ans= []
        def depts(node, levl):
            if not node:
                return
            
            if levl == len(ans):
                ans.append([])
                
            # resilt[lev]= node.right
            ans[levl].append(node.val)
            
            # Recursively traverse left and right, increasing the level counter
            depts(node.left, levl + 1)
            depts(node.right, levl + 1)
            
        depts(root, 0)
        return ans