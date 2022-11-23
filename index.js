

// const inquirer = require('inquirer');
import inquirer from "inquirer";
// const paiping = require('./src/pai.cjs')

import paiping from './src/pai.cjs'

const prompt = inquirer.createPromptModule();
prompt([
    
        {
            name: 'path',
            message: '请输入绝对路径目录或者不传默认是data目录',
            type: 'input'
        }
    ,
    {
        name: 'name',
        message: '文件夹名称',
        type: 'input'
    }
]).then(res => {
    console.log(res, paiping);
    paiping.paiping(res.path, res.name);
    // paiping(res);
})

