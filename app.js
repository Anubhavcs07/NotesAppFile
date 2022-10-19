const notes = require('./notes')
const yargs = require('yargs')
yargs.version('1.1.0')

//add, remove, read, list notes
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNotes(argv.title, argv.body)
    }
})

//remove command

yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder:{
        title:{
            describe: 'To remove the element',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.removeItem(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'list all the notes',
    handler: function (argv) {
        notes.listNotes(argv.title, argv.body)
    }
})

yargs.command({
    command: 'read',
    describe: 'read the latest note',
    builder: {
        title: { describe: 'Search for a particular record', demandOption: true, type: 'string' }
    },
    handler: function (argv) {
        notes.readList(argv.title)
    }
})

yargs.parse()
// console.log(yargs.argv)

//customise yargs version
