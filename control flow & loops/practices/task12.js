let arr = [-2, -5, -1, 2, 4, 8];
let newArray = 0;
for(let i = 0; i < arr.length; i++){
    if(arr[i] > 0){
        newArray = newArray + arr[i]
    }
}
console.log(newArray)
