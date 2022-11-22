

// const inquirer = require('inquirer');
import inquirer from "inquirer";


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

