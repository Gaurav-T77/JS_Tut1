const { Console } = require("console");
const fs = require("fs");
const path = require("path");

let types = {
  media: ["mp4", "mkv", "mp3"],
  archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
  documents: [
    "docx",
    "doc",
    "pdf",
    "xlsx",
    "xls",
    "odt",
    "ods",
    "odp",
    "odg",
    "odf",
    "txt",
    "ps",
    "tex",
  ],
  app: ["exe", "dmg", "pkg", "deb","msi","ics","py"],
};

let input = process.argv.slice(2); // Take only required things from the command line

let command = input[0]; // The command here has the [ command ] from the user typed in command line

switch (command) {
  case "tree":
    console.log("tree implemented");
    break;
  case "organize":
    organizeFn(input[1]);
    console.log("Organize Implemented");
    break;
  case "help":
    helpfn();
    console.log("help implemented");
    break;
  default:
    console.log("Please Enter a valid command");
}

function helpfn() {
  console.log(`List Of all Commands - >
                                            1.Tree - node FO.js tree<dirPath>
                                            2.Organize - node FO.js organize<dirPath>
                                            3.help - node FO.js help
    `);
}

function organizeFn(dirPath) {
  let destPath;
  if (dirPath == undefined) {
    console.log("Please enter a valid Directory Path");
    return;
  }

  let doesExist = fs.existsSync(dirPath);

  if (doesExist == true) {
    destPath = path.join(dirPath, "organized_Files");

    if (fs.existsSync(destPath) == false) {
      fs.mkdirSync(destPath);
    } else {
      console.log("Folder Already Exists");
    }
  } else {
    console.log("Please enter a valid path");
  }
  organizeHelper(dirPath,destPath)
}

function organizeHelper(src, dest) {
 
  let childNames = fs.readdirSync(src);
  
  let childExts=[] //Array to store the extensions of contents in src folder

  for (let i = 0; i < childNames.length; i++) {
   
    let childAddress = path.join(src, childNames[i])
    let isFile = fs.lstatSync(childAddress).isFile()
    console.log(childAddress)
    
    if (isFile == true) {
        console.log(isFile)
        childExts.push(path.extname(childNames[i]).slice(1))
        console.log(childExts[i])
      }
     
    }

}

function getCategory(Filename){
    
    for(let key in types){
    let cTypeArr = types[key]
    console.log(Filename)


    for(let i=0;i<cTypeArr.length;i++){
        if(Filename==cTypeArr[i]){
            console.log(key)
            console.log(Filename)
        }
    }
    }
}