#! /usr/bin/env node



const { Command } = require('commander');

const { createlist } = require("./createlist");
const { addItemsToList } = require("./addItemsToList");

/* const yargs = require("yargs"); */
const utils = require('./utils.js');

/* const usage = "\nUsage: shopping-tools [option] [command]";
const options = yargs
    .usage(usage)
    .option("l", {alias: "list", describe: "List all created shopping lists.", type: "boolean", demandOption: false})
    .help(true)
    .argv;

var list = utils.createList(yargs.argv._);

if(yargs.argv._[0] == null) {
    utils.showHelp();
    return;
} */

const program = new Command();

/* program
    .option('-cl, --create-list <value>', 'name of list'); */

program
    .command("create-list")
    .action(createlist);

program
    .command("add-items-to-list")
    .action(addItemsToList);


program.parse();
