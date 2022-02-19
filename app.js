console.log ("Starting app.js. Welcome to Notes App!")
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')
yargs.version('1.0.0')

//Creating add command
yargs.command({
    command: 'add',
    describe: 'Adding Note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

//Creating remove command
yargs.command({
    command: 'remove',
    describe: 'Removing Note',
    builder: {
        title: {
            describe: 'Note title to be removed',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNotes(argv.title)
    }
})

//Creating list command
yargs.command({
    command: 'list',
    describe: 'List Available Notes',
    handler() {
        notes.listNotes()
    }
})

//Creating read command
yargs.command({
    command: 'read',
    describe: 'Reading Note',
    builder: {
        title: {
            describe: 'Note to be searched',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse()
