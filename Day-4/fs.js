const FS=require('fs')
const filepath='data.txt'
FS.writeFileSync(filepath,"I am Shreyas")
console.log("created sucessfully")
const data=FS.readFileSync(filepath,"utf-8")
console.log(data);
const update=FS.appendFileSync(filepath,"i am updated")
console.log(update);
console.log("data upadted successfully");