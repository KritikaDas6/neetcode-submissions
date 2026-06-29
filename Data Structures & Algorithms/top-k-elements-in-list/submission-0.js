class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        //so i need to find the k times of which is the most frequent
        //step 1: make everyhing into a map to get the freqencies.
        //step 2: go in a loop and find which key is the most hightest.

        const numbers = new Map();

        const maxArr = [];

        for(let num of nums){ //made a map of everyhing and recoded frequencies
            let value = 0;
            if(!numbers.has(num)){ 
                numbers.set(num,1);
                continue;
            }
            value = numbers.get(num) + 1;
            numbers.set(num,value);
        }

        //step 2:

       
//1:1 2:2 //3:3
        for(let i =0; i< k; i++){
            let max=0;
            let maxkey = -1;
            for (const [key, value] of numbers){ //this finds max
                // for(let num of numbers.v()){ //
                if(max < value){
                    max = value; //updates the max value
                    maxkey = key; //takes the key
                }
            } 

            maxArr.push(maxkey); //3
            numbers.delete(maxkey);
        }
        return maxArr;
    }
}
