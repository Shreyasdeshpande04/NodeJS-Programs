const FS= require('fs').promises
const filename="file.txt"
const writeFile=async()=>{
    try{
        await FS.writeFile(filename,"hello i am shreyas")
        console.log("file created successfully");
    }
    catch(error){
        console.error(error);
    }
}
writeFile()