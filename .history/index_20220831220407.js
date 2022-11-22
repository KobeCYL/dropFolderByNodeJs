const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const paiping = require('./src/paiping')
const prompt = inquirer.createPromptModule();
prompt().then(res => {
    paiping(res);
})

