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
        }
    ])
    listOptions.then(config => {
        const link = [];
        console.log("Setting up project...");

        console.log(config);

        const configString = JSON.stringify(config, null, "\t");

        writeFileSync(path.join(process.cwd(), config.name + ".json"), configString, "utf-8");
    })
}

module.exports = {
	createlist
};