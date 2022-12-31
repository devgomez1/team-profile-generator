const { test, expect } = require("@jest/globals");
const Intern = require("../lib/Intern");

test("Intern Object", function () {
  const data = {
    name: "Devin",
    id: 1,
    email: "devinelliotgomez@gmail.com",
    school: "UVA",
  };
  const intern = new Intern(data.name, data.id, data.email, data.school);
  expect(intern.name).toBe(data.name);
  expect(intern.id).toBe(data.id);
  expect(intern.email).toBe(data.email);
  expect(intern.school).toBe(data.school);
});
