class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        const dupe = new Map();

        for(let num of nums){
            if(dupe.get(num)== null){
                // dupe.set(num, 0);
                dupe.set(num, 1);
                continue;
            }
            return true;
        }

        return false;

    }
}