// class
class Student{
    // let name;
    constructor(name){
    // constructor = (name) => {
        this.name = name;
        console.log("Obj Created");;
    }

    display = () =>{
        console.log(this.name);
    }
}

// let s = new Student();
let s = new Student("john");
// s.display();

let emp = {
    name : "Sam",
    // getName: function(){
    getName: () => {
        console.log(this.name);
    }
}

emp.getName()