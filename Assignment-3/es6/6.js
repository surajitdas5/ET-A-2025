let arr = [1, 4, 2, 5, 3, 11, 17, 22, 25, 35]

// arr.push(100)
// arr.push(101, 111, 99)

// arr.pop()
// console.log(arr);

// console.log(arr.indexOf(3));
// console.log(arr.indexOf(30));
// console.log(arr.includes(3));
// console.log(arr.includes(30));

// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }


// Higher-order method
// arr.forEach(function(num, index){
//     console.log(`${index} => ${num}`);
// })

// let newArr = arr.map(function(num, index){
//     let newNum = num * 5
//     return newNum
// })
// let newArr = arr.map((num, index) => num * 50)

// let newArr = arr.filter(function(num, index){
//     if(num % 2 === 0){
//     // if(num % 1 === 0){
//         return true;
//     } else {
//         return false;
//     }
// })

// let newArr = arr.filter( n => n%2 === 0)

// console.log(newArr);
// console.log(arr);

// let  s = 0;
// for(let i=0; i<arr.length; i++){
//     s += arr[i]
// }

// let s = arr.reduce((s, n)=>{
//     return s+n
// }, 0)
// let s = arr.reduce((s, n)=> s+n, 0)
// console.log(s);

// let largest = arr.reduce((largest, num)=>{
//     if(num > largest ) return num
//     else return largest
// }, arr[0])

// let largest = arr.reduce((largest, num)=> num > largest ? num : largest , arr[0])

// console.log(largest);


// arr.sort()
// arr.sort(function(a, b){
//     if(a>b) return 1
//     else if (b>a) return -1
//     else 0
// })

arr.sort((a, b) => a-b )
console.log(arr);


