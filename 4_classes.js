/*jshint esversion: 8 */

class Person {
    

    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(this.name + ' говорит привет!')
    }
}

const max = new Person ('Max');

//console.log(max.greet())

//console.log(max.type)

//console.log(max.__proto__ === Person.prototype)

class Programmer extends Person {
    constructor(name, job) {
        super(name);

        this._job = job;
    }

    set job(job) {
        if(job.length < 2) {
            console.log('Validation failed')
        } else {
            this._job = job;
        }
        
    }


    get job() {
        return this._job.toUpperCase();
    }

    greet() {
        super.greeet();
        console.log('Rewritten');
    }
}

const frontend = new Programmer ('Max', 'Frontend');
//console.log(frontend);
//frontend.greet();

console.log(frontend.job);
frontend.job = 'Backend';
console.log(frontend.job);