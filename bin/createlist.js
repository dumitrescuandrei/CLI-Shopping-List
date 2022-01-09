const { prompt } = require("enquirer");
const path = require("path");
const { copySync, mkdirSync, writeFileSync } = require("fs-extra");

function createlist() {
    const listOptions = prompt([
        {
            name: "name",
            type: "input",
            message: "Name of the list",
            initial: path.basename(process.cwd())
        },
        {
            name: "fruits",
            type: "select",
            message: "Select one fruit",
            choices: [
                {
                    message: "Apple",
                    value: "apple"
                },
                {
                    message: "Banana",
                    value: "banana"
                }
            ]
        }
    ])
    listOptions.then(config => {
        const link = [];
        Object.assign(config, {
            
        })
    })
}