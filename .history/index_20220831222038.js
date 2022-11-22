const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
// const paiping = require('./src/paiping.js')
import paiping from "./src/paiping";
const prompt = inquirer.createPromptModule();
prompt([
    {
        name: 'name',
        message: '文件夹名称',
        type: 'input'
    }
]).then(res => {
    console.log(res, paiping);
    paiping(res);
})

