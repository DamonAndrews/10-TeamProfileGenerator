// const jest = require('@jest/console');
const fs = require('fs');
const inquirer = require('inquirer');
const Engineer= require("./lib/Engineer");
const Intern= require("./lib/Intern");
const Manager=require("./lib/Manager");
const team = [];
const engArray = [];
const intArray = [];

const test = require('./test');

const mgrQuestions = 
[{
    type: "input",
    message: 'What is the name of your manager?',
    name: 'name',
    },{
        type: "input",
        message: 'Please enter your managers ID number?',
        name: 'id',
    }, {
        type: "input",
    message: 'What is your managers email address?',
    name: 'email',
    },{
        type: "input",
    message: 'Please enter managers office number',
    name: 'officeNumber',
    }]

    function askManager() {
        inquirer.prompt(mgrQuestions).then(mgr => {
            const manager=new Manager(mgr.name, mgr.id, mgr.email, mgr.officeNumber)
            team.push(manager);
            init();
        })
    }

   


const init = () => {
    inquirer.prompt({
        type: "list", name: "empType", message: "What type of employee would you like to create?", choices: ["Engineer", "Intern", "Build Team"]
    }) .then(Answers => {
         if(Answers.empType === "Intern") {
           askIntern();
        } else if (Answers.empType === "Engineer") {
            askEngineer();
        } else if (Answers.empType === "Build Team") {
            writeToFile(team, intArray, engArray);
            process.exit();
        }
    }) 
}

    function askIntern() {
        inquirer.prompt(internQuestions).then(int => {
            const intern=new Intern(int.name, int.id, int.email, int.school)
            intArray.push(intern);
            init();
        })
    }
const internQuestions =
[{
    type: "input",
    message: 'What is the name of your intern?',
    name: 'name',
    },{
        type: "input",
        message: 'Please enter your interns ID number?',
        name: 'id',
    }, {
        type: "input",
    message: 'What is your interns email address?',
    name: 'email',
    },{
        type: "input",
    message: 'Please enter interns school:',
    name: 'school',
    }]


    function askEngineer() {
        inquirer.prompt(engineerQuestions).then(eng => {
            const engineer=new Engineer(eng.name, eng.id, eng.email, eng.ghUser)
            engArray.push(engineer);
            init();
        })
    }
    const engineerQuestions = 
    [{
        type: "input",
        message: 'What is the name of your engineer?',
        name: 'name',
        },{
            type: "input",
            message: 'Please enter your engineers ID number?',
            name: 'id',
        }, {
            type: "input",
        message: 'What is your engineers email address?',
        name: 'email',
        },{
            type: "input",
        message: 'Please enter engineers GitHub username',
        name: 'ghUser',
        }]


function writeToFile(team, intArray, engArray) {
    fs.writeFileSync("index.html", test(team, intArray, engArray))
  };

   

  askManager();
  