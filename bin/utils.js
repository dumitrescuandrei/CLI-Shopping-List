module.exports = {
    showHelp: showHelp,
    createList: createList
};

const usage = "\n Usage: shopping-tools <list_name> list to be created";
function showHelp() {
    console.log(usage);  
    console.log('\nOptions:\r')  
    console.log('\t--version\t      ' + 'Show version number.' + '\t\t' + '[boolean]\r')  
    console.log('    -l, --list\t' + '      ' + 'List all created shopping lists.' + '\t\t' + '[boolean]\r')  
    console.log('\t--help\t\t      ' + 'Show help.' + '\t\t\t' + '[boolean]\n')  
}

function createList(name) {
    let listName = name;
}