const { test, expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

test("Engineer Object", function () {
  const data = {
    name: "Devin",
    id: 1,
    email: "devinelliotgomez@gmail.com",
    github: "https://github.com/devgomez1",
  };
  const engineer = new Engineer(data.name, data.id, data.email, data.github);
  expect(engineer.name).toBe(data.name);
  expect(engineer.id).toBe(data.id);
  expect(engineer.email).toBe(data.email);
  expect(engineer.github).toBe(data.github);
});
