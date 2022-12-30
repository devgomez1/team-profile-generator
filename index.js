const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const genPage = require("./src/htmlGenerator");
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
        choices: ["Add an Intern", "Add an Engineer", "Write File"],
      },
    ])
    .then((answers) => {
      switch (answers.prompt) {
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

function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the Interns Name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the Interns ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the Interns email?",
      },
      {
        type: "input",
        name: "school",
        message: "What is the Interns school?",
      },
    ])
    .then((data) => {
      const intern = new Intern(data.name, data.id, data.email, data.school);
      myTeam.push(intern);
      secondInput();
    });
}

function addEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the Engineers Name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the Engineers ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the Engineers email?",
      },
      {
        type: "input",
        name: "school",
        message: "What is the Engineers github?",
      },
    ])
    .then((data) => {
      const engineer = new Engineer(
        data.name,
        data.id,
        data.email,
        data.github
      );
      myTeam.push(engineer);
      secondInput();
    });
}

function writeFile() {
  fs.writeFile("./dist/index.html", genPage(myTeam), (err) => {
    if (err) throw err;
    console.log("Your HTML has been generated.");
  });
}

managerPrompt();
