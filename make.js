// node make.js    Copies the client source to the clipboard so that it can be
//                 pasted into your browser's console

const resolve = require('path').resolve
const readFileSync = require('fs').readFileSync
const clipboardy = require('clipboardy')

const CLIENT_SRC = readFileSync(resolve('./client.js')).toString()

clipboardy.writeSync(CLIENT_SRC)
