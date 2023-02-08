const Employee = require ('../lib/Employee');

test ('Can create a new employee.', () => {
    const employeeInstance = new Employee();
    expect (typeof(employeeInstance)).toBe ('object');
})

test ('Testing name.', () => {
    const name = 'Bop';
    const employeeInstance = new Employee (name);
    expect (employeeInstance.name).toBe (name);
})

test ('Testing ID.', () => {
    const id = 1;
    const employeeInstance = new Employee ('Bop', id);
    expect (employeeInstance.id).toBe (id);
})

test ('Testing email.', () => {
    const email = 'bop@fakemail.com';
    const employeeInstance = new Employee ('Bop', 1, email);
    expect (employeeInstance.email).toBe (email);
})

test ('Gets name through getName method.', () => {
    const testName = 'Bop';
    const employeeInstance = new Employee (testName);
    expect (employeeInstance.getName()).toBe (testName);
})

test ('Can test ID through getID method.', () => {
    const testID = 1;
    const employeeInstance = new Employee ('Bop', testID);
    expect (employeeInstance.getId()).toBe (testID);
})

test ('Testing role.', () => {
    const returnValue = 'Employee';
    const employeeInstance = new Employee ('Bop', 1, 'bop@fakemail.com');
    expect (employeeInstance.getRole()).toBe(returnValue);
})