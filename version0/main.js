console.log("main procces working");

const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");
let svgFileName = "svgFiles";
var fs = require('fs');
var svgDoc = "";
//var javascript = require('javascript.js');

let win;
function start(){
    
    readSvg();

}
function chosen(){
       console.log("chosen");
        svgDoc = $('input[type=file]').val();
       console.log("doc: " + svgDoc);
       svgDoc = "" + svgDoc;
       var fileName = (svgDoc.split("\\"))[2];
       console.log("file name: " + fileName);
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