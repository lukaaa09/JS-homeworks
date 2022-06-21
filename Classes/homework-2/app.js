class user{
    constructor(name, surname){
        this.name = name
        this.surname = surname
    }
    getFullName(){
        return this.name + " " + this.surname
    }
}
class Student extends user{
    constructor(name, surname, year){
        super(name, surname,)
        this.year = year

    }
    getCourse(){
        if(this.year >= 2018){
          return new Date().getFullYear() - this.year;
        }else{
            throw new RangeError('year should be greater than 2018');
        }
    }
  
}
let student = new Student("John", "Smith", 2018);

console.log(student.name); 
console.log(student.surname); 
console.log(student.getFullName()); 
console.log(student.year); 
try{
console.log(student.getCourse());
}catch(err){
    console.log(err.message)
}