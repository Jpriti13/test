// login.steps.js

const { Given, When, Then } = require('cucumber');

Given('I visit the login page', function () {
    return browser.url('/login');
});

When('I enter valid credentials', function () {
    return browser.fill('username', 'validUser')  // Replace with actual implementation
                 .fill('password', 'validPassword') // Replace with actual implementation
                 .pressButton('Login');
});

Then('I should see the dashboard', function () {
    return browser.getText('#dashboard').then(function(text) {
        assert.equal(text, 'Welcome to your dashboard!');  // Replace with actual implementation
    });
});
