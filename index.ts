import inquirer from "inquirer";

class Student {
    name: string
    constructor(n:string){
        this.name=n
    }
}
class Person{
    students: Student[]=[]
    addStudent(obj:Student){
        this.students.push(obj)
    }
    
}

const persons = new Person()


const OOPStart = async (persons:Person)=>{
    do{
     console.log("Welcome!");
     const ans = await inquirer.prompt({
        name: "Select",
        type: "list",
        message: "Whom would you like to interact with?",
        choices: ["students","Staff","Exit"]
     })
     if(ans.Select == "Staff"){
        console.log("You apporach the Staff room. If you want to ask any question then Please feel free.");
     }
     else if(ans.Select == "students" ){
        const ans = await inquirer.prompt({
            name: "student",
            type: "input",
            message: "Enter the students name of which you wants to interact:",
        })
        const student = persons.students.find(val => val.name == ans.student )
        if(!student){
            const name = new Student(ans.student)
            persons.addStudent(name)
            console.log(`Hello I am ${name.name}.Good to meet you!`);//For new students
            console.log("New student added");
            console.log("List of currect student:");//As a heading
            console.log(persons.students); 
         } else{
            console.log(`Hello I am ${student.name}.Good to see you again!`);//already added students in Student array.
            console.log("List of existing student:");
            console.log(persons.students);
         }
        
     }else if(ans.Select =="Exit"  ){
        console.log("Exiting the programme..");
        process.exit
        
     }
    }while(true)
}
//Calling funtion.
OOPStart(persons)





























