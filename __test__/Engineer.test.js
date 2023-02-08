const Engineer = require ('../lib/Engineer');

test ('Can create a github.', () => {
    const testGithub = 'BopBop';
    const employeeInstance = new Engineer ('Bop', 1, 'bop@fakemail.com', testGithub);
    expect (employeeInstance.github).toBe (testGithub);
});

test ('Testing getGithub will return github.', () => {
    const testGithub = 'BopBop';
    const employeeInstance = new Engineer ('Bop', 1, 'bop@fakemail.com', testGithub);
    expect (employeeInstance.getGithub()).toBe(testGithub);
});

teset ('Testing role.', () => {
    const returnValue = 'Engineer';
    const employeeInstance = new Engineer ('Bop', 1, 'bop@fakemail.com', 'BopBop');
    expect (employeeInstance.getRole()).toBe(returnValue);
});