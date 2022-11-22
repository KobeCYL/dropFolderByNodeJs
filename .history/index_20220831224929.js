

// const inquirer = require('inquirer');
import inquirer from "inquirer";
// const paiping = require('./src/pai.cjs')

import paiping from './src/pai.cjs'

const prompt = inquirer.createPromptModule();
prompt([
    {
        name: 'name',
        message: '文件夹名称',
        type: 'input'
    }
]).then(res => {
    console.log(res);
    paiping(res.name);
    // paiping(res);
})

