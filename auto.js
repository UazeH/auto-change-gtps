var prompt = require('prompt-sync')();

var clear = require('console-clear')

var setTitle = require('console-title');
setTitle('Auto Change adminLevel & Level');

const fs = require("fs");

const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

var adminLevel = function () {

    var nameplayers = prompt('Input name Players : ');
    console.clear()

    var role = prompt('Input number : ');
    console.clear()

    if (!fs.existsSync("players")) {
      console.log("\u001B[36mplayers folder not found")
      }

        if (!fs.existsSync("players\\" + nameplayers + ".json")) {
          console.log("\u001B[36mplayers not found!")
      }
      let folderlol1 = `./players/`+nameplayers+`.json`
      let folderlol2 = require(folderlol1);

      const rolenum =  parseInt(role)

      folderlol2.adminLevel = rolenum;

      fs.writeFile(folderlol1, JSON.stringify(folderlol2), function writeJSON(err) {
      console.log("O\u001B[36mk, "+ nameplayers + " has been set adminLevel to " + role + "");
      sleep(1700)
      })
}

var level = function () {

  var nameplayers = prompt('Input name Players : ');
  console.clear()

  var level = prompt('Input number : ');
  console.clear()

  if (!fs.existsSync("players")) {
    console.log("\u001B[36mplayers folder not found")
    }

      if (!fs.existsSync("players\\" + nameplayers + ".json")) {
      console.log("\u001B[36mplayers not found!")
    }
    let folderya1 = `./players/`+nameplayers+`.json`
    let folderya2 = require(folderya1);

    const levelnum =  parseInt(level)

    folderya2.level = levelnum;

    fs.writeFile(folderya1, JSON.stringify(folderya2), function writeJSON(err) {
    console.log("\u001B[36mOk, "+ nameplayers + " has been set Level to " + level + "");
    sleep(1700)
    })
}

console.clear()

console.log("\u001B[36m[+] Menu :")
console.log(" ")
console.log("\u001B[36m[1] Set adminLevel")
console.log("\u001B[36m[2] Set Level")
console.log(" ")
var listmenu = prompt(`\u001B[36m[>] Select Menu : `);
if (listmenu == "1"){
  console.log("\u001B[36mPlease wait...")
  sleep(500)
  console.clear()
  adminLevel()
}
if (listmenu == "2"){
  console.log("\u001B[36mPlease wait...")
  sleep(500)
  console.clear()
  level()
}
else
{
  console.log("\u001B[36mMenu Not Available!")
  process.exit(0);
}
rl.close();
