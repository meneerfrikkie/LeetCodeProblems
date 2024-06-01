/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const output = []
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] + nums[index + 1] === target) {
      output.push(index)
      output.push(index + 1)
      return output
    }
  }
}

const nums = [3, 2, 4]
const target = 6

console.log(twoSum(nums, target))
