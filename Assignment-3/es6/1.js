// Callback Function

// function add(a, b, display){
function add(a, b, callback){
    // return a+b;
    let c = a+b
    // display(c)
    callback(c)
}

// function display(data){
//     console.log(data);
// }
// add: higer-order function
// display: callback function

// let x = 100;
// let y = 200;
// let s = add(10, 20, display)
// let s = add(x, y, display)
// add(x, y, function(data){
//     console.log(data);
// })

// display(s)

// display()
// display


// function fact(n, callback){
//     let f = 1;
//     for(let i=1; i<=n; i++){
//         f *= i;
//     }
//     callback(f)
// }

// fact(5, function(res){
//     console.log(res);
// })
// let c = 0;
// function hello(){
//     c++;
//     console.log("Hello JS! "+c);
// }

// setTimeout(hello, 3000)

// setTimeout(function(){
//     console.log("Hello JS!");
// }, 2000)


// setInterval(hello, 1000)

// console.log(t);


// setInterval(function(){
//     let d = new Date()
//     let t = d.toLocaleTimeString();
//     document.getElementById("clock").innerHTML = t
// }, 1000)

let c = 0;
let interval = setInterval(function(){
    c++;
    document.getElementById("clock").innerHTML = c
    if(c === 5){
        clearInterval(interval)
    }
}, 1000)

