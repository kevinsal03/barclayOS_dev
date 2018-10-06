const { app, BrowserWindow } = require('electron')
var fs = require('fs')
var $ = require("jquery")

//default stylesheets
$('head').append('<link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.css" />')
$('head').append('<script src="node_modules/bootstrap/dist/js/bootstrap.js"></script>')



console.log(fs.existsSync('/usr/share/bos/web-apps/'))

if(fs.existsSync('/usr/share/bos/web-apps/stylesheets') == true) {
  //if system styles are found, use them
  $('head').append('<link rel="stylesheet" href="/usr/share/bos/web-apps/layout_1.css" />')
  console.log("using system stylesheets")
} else {
  //otherwise use local version
  $('head').append('<link rel="stylesheet" href="layout.css" />')
  console.log("ERROR: using local stylesheets")
  alert("Error: Failed to load system stylesheets, using local backups. \nPlease make sure bos-local-styles package is installed. \n\nDEVELOPER NOTE: bls still in dev, error will appear on all systems!")
  var stylsheetErr = 10;
}
