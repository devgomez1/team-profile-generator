const { test, expect } = require("@jest/globals");
const Manager = require("../lib/Manager");

test("Manager Object", function () {
  const data = {
    name: "Devin",
    id: 1,
    email: "devinelliotgomez@gmail.com",
    officeNumber: 2,
  };
  const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
  expect(manager.name).toBe(data.name);
  expect(manager.id).toBe(data.id);
  expect(manager.email).toBe(data.email);
  expect(manager.officeNumber).toBe(data.officeNumber);
});
