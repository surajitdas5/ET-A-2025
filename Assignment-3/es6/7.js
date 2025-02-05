// spread & rest operator
// ...
// let arr = [1, 2, 3, 4, 5]

// // let brr = arr
// // spread
// // let brr = [...arr]
// // let brr = [...arr, 10, 20, 30]
// let brr = [100, 200, 300, ...arr]

// // brr[0] = 100

// console.log(arr);
// console.log(brr);

// let std = {
//     name: "Ram",
//     roll: 123
// }

// // let std1 = {...std, cgpa: 8.9}
// let std1 = {...std, roll: 199}

// console.log(std);
// console.log(std1);

// rest
// function add(a, b, c=0){
// function add(...nums){
// function add(a, b, ...nums){
//     let s = a+b
//     // console.log(nums);
//     nums.forEach(n => {
//         s=s+n
//     });
//     return s
//     // return a+b+c
// }

// console.log(add(10, 20));
// console.log(add(10, 20, 30));
// console.log(add(10, 20, 30, 40));
// console.log(add(10, 20, 30, 40, 50));


// optional chaining
let std = {
    name: "Sam",
    addres: {
        city: "BBSR",
        // location: {
        //     lat: 89.7,
        //     long: 43.6
        // }
    }
}

console.log(std?.addres?.location?.lat);
