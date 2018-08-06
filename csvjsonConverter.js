//importing modules
const fs= require('fs')
const toJson= require('csvtojson')
const path=require('path')
//file name
const fileName='customer-data'
//convToJson : convert csv file to json with toJson()
const convToJson= ()=>{
    toJson().fromFile(path.join(__dirname,'csv file/'+fileName+'.csv')).then((jsonObj)=>{
        console.log(jsonObj)
        fs.writeFileSync(path.join(__dirname, 'csv file/'+fileName+'.json'), JSON.stringify(jsonObj))
    })

}

convToJson()