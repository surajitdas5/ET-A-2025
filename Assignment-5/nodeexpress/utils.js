function add(a, b){
    return a+b
}

function sub(a, b){
    return a-b
}

// default export
// module.exports = add

// Named Export
// module.exports = {"add": add, "sub": sub}
module.exports = {add, sub}