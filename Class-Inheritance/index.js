class Person{
    constructor(name,age){
         this.name=name;
         this.age=age;
    }
   static greet(){
        return "hello there";
    }
    canSleep(){
        return `${this.name} is sleeping`;
    }
}

let p1 = new Person("Surya",24)
console.log(Person.greet())
console.log(p1.canSleep())


class Employee extends Person {
    #salary
    constructor(name,age,salary){
            super(name,age)
          this.#salary=salary;  
    }
     get  salary (){
         return this.#salary;
    }

    set  salary (value){
         if (value > 0) {
      this.#salary = value;
    } else {
      console.log("Salary must be a positive number.");
    }
   }
   working(){
    return `${this.name} is working.`
   }

}

let E1 = new Employee("surya",24,50000)
console.log(E1)
E1.salary=45000;
console.log(E1)
console.log(E1.working())


class Manager extends Employee{
     constructor(name,age,salary){
      super(name,age,salary)
     }
    static getRole(){
      return "Manager"
    }
    managing(){
      return `${this.name} is managing.`
    }
}

let m1 = new Manager("surya",24,45000)
console.log(Manager.getRole())
console.log(m1.managing())



class Executive extends Manager{
        #bonus
      constructor(name,age,salary,bonus){
        super(name,age,salary)
        this.#bonus=bonus;
      }
      get bonus() {
        return this.#bonus;
      }
    
      set bonus(value) {
        if (value > 0) {
          this.#bonus = value;
        }
      }
}

let ex1 = new Executive("Surya",24,50000,5000)
console.log(ex1)
console.log(ex1.bonus)
ex1.bonus =6000;
console.log(ex1)
