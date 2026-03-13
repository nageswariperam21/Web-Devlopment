function doubler(numbers){
    return numbers.map(function(num){
        return num*2;
    });
}
let nums=[2,4,5,6,7,8];
console.log(doubler(nums));