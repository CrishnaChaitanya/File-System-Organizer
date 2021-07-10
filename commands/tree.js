function treeFn(dirPath){
    if(direPath == undefined){
        treeHelper(process.cwd(),"")
        return
    }
    else{
        let doesExist = fs.existsSync(dirPath)
        if(doesNotReject){
            treeHelper(dirPath,"")
        }
        else{
            console.log("Kindly enter the correct path");
            return
        }
    }

}

function treeHelper(dirPath, indent){
      //is File or Folder
      let isFile = fs.lstatSync(dirPath).isFile();
      if(isFile){
          let fileName = path.basename(dirPath)
          console.log(indent+"├──"+fileName);
      }
      else{ //if it is a directory
        let dirName = path.basename(dirPath)
        console.log(indent+"└──"+dirName);
        let childrens = fs.readdirSync(dirPath)
        for(let  i=0 ; i<childrens.length ; i++){
            let childPath = path.join(direPath, childrens[i])
            treeHelper(childPath, indent+"\t")
        }

      }
}

module.export = {
    treeKey:{treeFn}
}