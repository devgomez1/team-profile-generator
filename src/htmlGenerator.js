function generateHTML(myTeam) {
  let html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>My Team</title>
      <style>
      body {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 100vh;
        margin: 0%;
        background-color: darkgrey;
      }
      .header {
        font-size: 24px;
        font-weight: bold;
        text-align: center;
        height: 75px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 50px;
        font-family: sans-serif;
      }
      .boxManager {
        border: 1px solid black;
        margin: 10px;
        padding: 10px;
        width: 300px;
        height: 200px;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        text-align: center;
        background-color:crimson;
        color: rgb(0, 0, 0);
      }
      .boxIntern {
        border: 1px solid black;
        margin: 10px;
        padding: 10px;
        width: 300px;
        height: 200px;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        text-align: center;
        background-color:cornflowerblue;
        color: rgb(0, 0, 0);
      }
      .boxEngineer {
        border: 1px solid black;
        margin: 10px;
        padding: 10px;
        width: 300px;
        height: 200px;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        text-align: center;
        background-color:chartreuse;
        color: rgb(0, 0, 0);
      }
      .boxes {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
      }
    </style>
    </head>
    <body>
      <div class="header">
        My Team
      </div>
      <hr style="width: 700px">
      <div class="boxes">
    `;

  // Add boxes for each team member
  myTeam.forEach((member) => {
    if (member.officeNumber) {
      html += `<div class="boxManager">
      <p>Manager-Name: ${member.name}</p>
      <p>ID: ${member.id}</p>
      <p><a href="mailto:${member.email}">Email: ${member.email}</a></p>
      <p>Office Number: ${member.officeNumber}</p>`;
    }

    if (member.school) {
      html += ` <div class="boxIntern">
      <p>Intern-Name: ${member.name}</p>
      <p>ID: ${member.id}</p>
      <p><a href="mailto:${member.email}">Email: ${member.email}</a></p>
      <p>School: ${member.school}</p>`;
    }

    if (member.github) {
      html += ` <div class="boxEngineer">
      <p>Engineer-Name: ${member.name}</p>
      <p>ID: ${member.id}</p>
      <p><a href="mailto:${member.email}">Email: ${member.email}</a></p>
      <p><a href="https://github.com/${member.github}">Github: ${member.github}</a></p>`;
    }

    html += `</div>`;
  });

  html += `
    </div>
    </body>
    </html>
    `;

  return html;
}

module.exports = generateHTML;
