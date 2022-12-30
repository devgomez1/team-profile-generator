const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const myTeam = [];

function managerPrompt() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the Team Managers name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the Team Managers ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the Team Managers email?",
      },
      {
        type: "input",
        name: "office",
        message: "What is the Team Managers office number?",
      },
    ])
    .then((data) => {
      const manager = new Manager(data.name, data.id, data.email, data.office);
      myTeam.push(manager);
      secondInput();
    });
}

function secondInput() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "prompt",
        message: "What would you like to do next?",
        choices: [
          "Add an Employee",
          "Add an Intern",
          "Add an Engineer",
          "Write File",
        ],
      },
    ])
    .then((answers) => {
      switch (answers.prompt) {
        case "Add an Employee":
          addEmployee();
          break;
        case "Add an Intern":
          addIntern();
          break;
        case "Add an Engineer":
          addEngineer();
          break;
        case "Write File":
          writeFile();
          break;
      }
    });
}
