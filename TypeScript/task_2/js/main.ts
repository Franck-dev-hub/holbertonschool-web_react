// ----- Interfaces -----
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

// ----- Classes -----
class Director implements DirectorInterface {
    workFromHome() {
        return "Working from home";
        }

    getCoffeeBreak() {
        return "Getting a coffee break";
        }

    workDirectorTasks() {
        return "Getting to director tasks";
        }
    }

class Teacher implements TeacherInterface {
    workFromHome() {
        return "Cannot work from home";
        }

    getCoffeeBreak() {
        return "Cannot have a break";
        }

    workTeacherTasks() {
        return "Getting to work";
        }
    }

// ----- Functions -----
function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher();
        }
    return new Director();
    }

// ----- Logs -----
// Teacher
let emp = createEmployee(200);
console.log(emp.constructor.name);

// Director
emp = createEmployee(1000);
console.log(emp.constructor.name);

// Director
emp = createEmployee('$500');
console.log(emp.constructor.name);



