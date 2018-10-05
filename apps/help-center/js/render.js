const { app, BrowserWindow } = require('electron')
var fs = require('fs')

console.log(fs.existsSync('/usr/share/bos/web-apps/'))

var $ = require("jquery")

$('head').append('<link rel="stylesheet" href="/usr/share/bos/web-apps/layout_1.css" />')
//$('head').append('<link rel="stylesheet" href="layout.css" />') -- USING SYSTEM STORED CSS FILE ABOVE
//TODO: CHECK IF SYSTEM STLYES EXIST, IF NOT, USE APP
$('head').append('<link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.css" />')
$('head').append('<script src="node_modules/bootstrap/dist/js/bootstrap.js"></script>')
