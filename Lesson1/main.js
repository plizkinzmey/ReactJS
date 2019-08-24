// Урок 1

// Задание 1

function loop(times = 0, callback = null) {
    if (typeof callback === 'function') {
        for (i = 0; i < times; i++) {
            callback();
        }
    }
}
loop(3, function () {
    console.log('callback вызван');
});


// Задание 2 - Площадь треугольника

function calculateAria(a, h) {
    // a - основание треугольника
    // h - высота треугольника
    // s - площадь треугольника
    const f = 'triangle';
    let s = (a * 0.5) * h;
    const obj = {
        area: s,
        figure: f,
        input: {
            osnovanie: a,
            visota: h
        }
    };
    console.log(obj);
}

calculateAria(5, 6);

// Задание 3

class Human {
    constructor(name, age, dateOfBirth) {
        this.name = name;
        this.age = age;
        this.dateOfBirth = dateOfBirth;
    }

    dispalyInfo() {
        return `${this.name}, ${this.age}, ${this.dateOfBirth}`
    }
}

class Emploee extends Human {
    constructor(name, age, dateOfBirth, salary, department) {
        super(name, age, dateOfBirth);
        this.salary = salary;
        this.department = department;
    }
    dispalyInfo() {
        return `${super.dispalyInfo()}, ${this.name}, ${this.age}, ${this.dateOfBirth}`
    }
}

class Manager extends Emploee {
    constructor(name, age, dateOfBirth, salary, department) {
        super(name, age, dateOfBirth, salary, department);
        this.developers = [];
    }

    addDeveloper(developer) {
        this.developers.push(developer);
    }

    removeDeveloper(developer) {
        let removeId = this.developers.indexOf(developer);
        if (removeId !== -1) {
            this.developers.splice(removeId, 1);
        }
    }
}

class Developer extends Emploee {
    constructor(name, age, dateOfBirth, salary, department) {
        super(name, age, dateOfBirth, salary, department);
        this.manager = {};
    }

    setManager(manager) {
        this.manager = manager;

    }

    unsetManager() {
        this.manager = {};
    }
}

let m1 = new Manager('Alexandr', 28, '01/01/1991', 40, 'Managers');
let m2 = new Manager('Illia', 29, '01/01/1990', 40, 'Managers');

let d1 = new Developer('Alexandr Dev', 28, '01/01/1991', 40, 'Developers');
let d2 = new Developer('Illia Dev', 29, '01/01/1990', 40, 'Developers');
let d3 = new Developer('Boris Dev', 30, '01/01/1989', 40, 'Developers');

m1.addDeveloper(d1);
m1.addDeveloper(d2);
m2.addDeveloper(d3);
d1.setManager(m1);
d2.setManager(m1);
d3.setManager(m2);
m1.removeDeveloper(d2);
d2.unsetManager();

console.log(m1);
console.log(m2);
console.log(d1);
console.log(d2);
console.log(d3);