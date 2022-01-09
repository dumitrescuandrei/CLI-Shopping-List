const { prompt } = require("enquirer");
const path = require("path");
const { copySync, mkdirSync, writeFileSync } = require("fs-extra");
const { fstat, createWriteStream, writeFile } = require("fs");

function addItemsToList() {
    const itemsOptions = prompt([
        {
            name: "name",
            type: "input",
            message: "Name of the list",
            initial: path.basename(process.cwd())
        },
        {
            name: "items",
            type: "array",
            message: "Insert an item"
        }
    ])
    itemsOptions.then(config => {


        const configString = JSON.stringify(config, null, "\t");

        writeFile(path.join(process.cwd(), config.name + ".json"), configString, {
            flag: "r+"
        },
        (err) => {
            if(err) throw err;
        });
    })
}

module.exports = {
    addItemsToList
};