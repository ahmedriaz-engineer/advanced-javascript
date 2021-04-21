const nums = [1, 2, 3, 4, 5, 6];
for(let i=0; i<nums.length; i++){
    if(nums[i] > 4){
        break;
    }
    console.log(nums[i]);
}

const number = [1, -2, 3, -4, 5];
for(let i= 0; i<number.length; i++){
    if(number[i] < 0){
        continue;
    } 
    console.log(number[i]);   
}
