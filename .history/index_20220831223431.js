// const fs = require('fs');
// const path = require('path');
import fs from 'fs';
import path from "path";
// const inquirer = require('inquirer');
import inquirer from "inquirer";

const paiping = (inputDirName) => {
    const outputDirName = inputDirName+"_total";
    
    const dirName = path.join('./../../testData/',inputDirName)
    const targetFileName = path.join(__dirname, dirName);
    const newDirPath = path.join('./../../testData/',outputDirName);
    fs.mkdirSync(newDirPath);
    function moveDir(targetFileName, newDirPath) {
        fs.readdir(targetFileName,(err, files) => {
            if(err) throw err;
            console.log(files);
            files.forEach(file => {
                if(isDir(file)){
                    moveDir(path.join(targetFileName,file), newDirPath);
                } else {
                    copyFileToOtherDir(file, targetFileName, newDirPath)
                }
            })
           
        })
    }
    function copyFileToOtherDir(fileName, currentPath, otherDirPath) {
        fs.readFile(path.join(currentPath,fileName),(err,data) => {
            if(err){
                throw err;
            }
            fs.writeFileSync(path.join(otherDirPath, fileName),data);
        })
    }
    
    function isDir(file) {
        const isDirFile = false;
        const res = file.split('.');
        return res.length === 1;
    }
    
    //init;
    
    moveDir(targetFileName, newDirPath)
    }
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
