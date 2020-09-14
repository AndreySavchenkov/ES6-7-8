
class Student {
    constructor(name) {
        this.name = name
    }

    greet() {
        console.log(`Hi my name is ${this.name}`)
    } 
}

class ProtoStudent {
    university = "Oxford"
}



const student = Reflect.construct(Student, ['Andrey'], ProtoStudent)

console.log(student.__proto__)