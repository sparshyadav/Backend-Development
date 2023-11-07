// class Vehicles {
//     constructor(name, price, model) {
//         this.name = name;
//         this.price = price;
//         this.model = model;
//     }
// }

// let car1 = new Vehicles("Alto", 300000, 2023);
// console.log(car1);

// let car2 = new Vehicles("i 10 Nios", 800000, 2020);
// console.log(car2);

// class Student {
//     constructor(name, branch, rollnumber, group) {
//         this.name = name;
//         this.branch = branch;
//         this.rollnumber = rollnumber;
//         this.group = group;
//     }
//     set setName(name){
//         this.name=name;
//     }
//     set setBranch(branch){
//         this.branch=branch;
//     }
//     get getRollNumber(){
//         return this.rollnumber;
//     }
//     getGroup(){
//         return this.group;
//     }
//     static fun(){
//         console.log("This is a Fun Function");
//     }
// }

// let stud1 = new Student("Sparsh", "CSE", 1383, 26);
// console.log(stud1);

// let stud2 = new Student("Aditya", "CSE", 1621, 17);
// console.log(stud2);

// let stud3 = new Student("Rakshit", "CSE", 1133, 22);
// console.log(stud3);

// stud1.setName="Udhav"; //Inside a Class functions are not used for getter and setters, rather they are used as properties.
// console.log(stud1);

// console.log(stud2.getRollNumber);

// console.log(stud3.getGroup()); //getGroup() is a normal function inside a class, that's why we can use it as a function.

// console.log(Student.fun());

//Inheritence in JavaScript
class Vehicles {
    constructor(name, price, model) {
        this.name = name;
        this.price = price;
        this.model = model;
    }
}

class Car extends Vehicles{
    constructor(name, price, model, color, tyre){
        super(name, price, model);
        this.color=color;
        this.tyre=tyre;
    }
}

let car=new Car("Harrier", 2500000, "Dark", "Black", "Michellen");
console.log(car);

//Create a bike class extending car class -> homework