const { test, expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

test("Employee Object", function () {
  const data = {
    name: "Devin",
    id: 1,
    email: "devinelliotgomez@gmail.com",
  };
  const employee = new Employee(data);
  expect(employee.name).toBe(String);
  expect(employee.id).toBe(Number);
  expect(employee.email).toBe(String);
});
