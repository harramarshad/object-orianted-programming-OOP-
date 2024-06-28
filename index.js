"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
class Student {
    constructor(n) {
        this.name = n;
    }
}
class Person {
    constructor() {
        this.students = [];
    }
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const OOPStart = (persons) => __awaiter(void 0, void 0, void 0, function* () {
    do {
        console.log("Welcome!");
        const ans = yield inquirer_1.default.prompt({
            name: "Select",
            type: "list",
            message: "Whom would you like to interact with?",
            choices: ["students", "Staff", "Exit"]
        });
        if (ans.Select == "Staff") {
            console.log("You apporach the Staff room. If you want to ask any question then Please feel free.");
        }
        else if (ans.Select == "students") {
            const ans = yield inquirer_1.default.prompt({
                name: "student",
                type: "input",
                message: "Enter the students name of which you wants to interact:",
            });
            const student = persons.students.find(val => val.name == ans.student);
            if (!student) {
                const name = new Student(ans.student);
                persons.addStudent(name);
                console.log(`Hello I am ${name.name}.Good to meet you!`); //For new students
                console.log("New student added");
                console.log("List of currect student:"); //As a heading
                console.log(persons.students);
            }
            else {
                console.log(`Hello I am ${student.name}.Good to see you again!`); //already added students in Student array.
                console.log("List of existing student:");
                console.log(persons.students);
            }
        }
        else if (ans.Select == "Exit") {
            console.log("Exiting the programme..");
            process.exit;
        }
    } while (true);
});
//Calling funtion.
OOPStart(persons);
