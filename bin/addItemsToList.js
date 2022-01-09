const { prompt } = require("enquirer");
const path = require("path");
const { copySync, mkdirSync, writeFileSync } = require("fs-extra");

function addItemsToList() {
    const itemsOptions = prompt([
        {
            name: "name",
            type: "input",
            message: "Name of the list",
            initial: path.basename(process.cwd())
        },
        {
            name: "itemone",
            type: "input",
            message: "Insert an item"
        }
    ])
    itemsOptions.then(config => {


        const configString = JSON.stringify(config, null, "\t");

        writeFileSync(path.join(process.cwd(), config.name + ".json"), configString, "utf-8");
    })
}

module.exports = {
    addItemsToList
};