// let marks = [85,97,44,37,76,60];
// let sum = 0;
// for (let mark of marks){
//     sum = sum + mark;
// }
// let avg = sum / marks.length;
// console.log(`avg marks of the class = ${avg}`);
// let items = [250,645,300,900,50];
// for (let i=0;i < items.length;i++){
//     let offer = items[i] / 10;
//     items[i] -= offer; 
// }
// console.log(items);

// 

// const countvow = (str) =>{
    
//         let count = 0;
//         for(const char of str){
//             if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
//                 count++
//             }
//         }
//         console.log(count);
//     }

// let num = [2,3,5];
// num.forEach((num) => {
// num *= num
// console.log(num);    
// }
// )
// 

// let arr = [21,23,15,78,89];

// const output = arr.reduce((res,curr) => {
//     return res + curr;
// })
// console.log(output);

// let marks = [98,87,78,90,93,91,43];

// let highermarks = marks.filter((val) => {
//     return val > 90;
// })
// console.log(highermarks);

let n = prompt("enter a number : ");

let arr = [];

for(i=1 ; i<=n ; i++){
    arr[i - 1]= i;
}
console.log(arr);

let sum = arr.reduce((res,curr) => {
    return res + curr;
})
console.log("sum = ",sum);

let factorial = arr.reduce((res,curr) => {
    return res * curr;
})
console.log("factorial = ", factorial);