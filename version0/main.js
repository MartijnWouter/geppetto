console.log("main procces working");

const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");
let svgFileName = "svgFiles/" + "driving.svg";
var fs = require('fs');
//var javascript = require('javascript.js');

let win;
function start(){
    
    readSvg();
}
function chosen(){
       console.log("chosen");
       let doc = document.getElementById("avatar");
       console.log("doc: " + doc);
}
function readSvg(){
    fs.readFile(svgFileName, 'utf-8', function(err, data){
        if (err) throw err;
        //console.log(" " + data);
        console.log("readSvg succesfull");

      });
}
app.on('ready', createWindow);
function createWindow(){
    win = new BrowserWindow();
    win.loadURL(url.format({
        pathname: path.join(__dirname, "index.html"),
        protocol: 'file',
        slashes: true
    }));
    win.webContents.openDevTools();
    win.on('closed', () => {
        win = null;
    });
    start();
}