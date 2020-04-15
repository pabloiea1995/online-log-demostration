const onlinelog = require('online-log')
const log = onlinelog.log
const express = require("express");
const app = express()

onlinelog(app,
    {
        memory_lines_length: 2,
        styles:{
            levelsColors: {
                trace: "#fff"
            }
        }
    })
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
try{
    febfoqw
}catch(error){
    log("ERROR", error)
}


setInterval(() => {
    executeLog();
}, 5000);


const executeLog = () =>{
    
    let ran = Math.floor(Math.random()*10)
    const listlevel = ["ERROR","WARN" , "TRACE", "DEBUG", "FATAL", "INFO"]
    const level = listlevel[Math.floor(Math.random() * listlevel.length)]
    const message = "testlog Lorem Ipsum is simply dummy text of the printing and typesetting industry"
    
    if(ran <= 3){
        log(level, message);
    }
    else if(ran >= 4 && ran < 7){
        try{
            féfn
        }
        catch(error){
            log("ERROR", error)
        }
    }
    else{
        log(level, {object: "prueba", test:{
            "prueba": "test"
        }})
    }
}
/*


logger.log("ERROR", `testlog Lorem Ipsum is simply dummy text of the printing and typesetting industry.`);
  logger.log("WARN", `.`);
  logger.log("INFO", `testlog Lorem Ipsum is simply dummy text of the printing and typesetting industry.`);
  logger.log("TRACE", `testlog Lorem Ipsum is simply dummy text of the printing and typesetting industry.`);
  logger.log("DEBUG", `testlog Lorem Ipsum is simply dummy text of the printing and typesetting industry.`);
  logger.log("TRACE", `testlog Lorem Ipsum is simply dummy text of the printing and typesetting industry.`);
  logger.log("WARN", `testlog Lorem Ipsum is simply dummy text of the printing and typesetting industry.`);
  logger.log("FATAL", `testlog Lorem Ipsum is simply dummy text of the printing and typesetting industry.`);
  logger.log("INFO", `same text.`);
  logger.log("INFO", `testlog Lorem Ipsum is simply dummy text of the printing and typesetting industry.`);
  logger.log("ERROR", `testlog Lorem Ipsum is simply dummy text of the printing and typesetting industry.`);
  logger.log("WARN", `same text.`);
  logger.log("DEBUG", `testlog Lorem Ipsum is simply dummy text of the printing and typesetting industry.`);
  */