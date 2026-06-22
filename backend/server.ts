import envConfig = require("./src/config/config");
import connectToDatabase = require("./src/config/db");
import app = require("./src/app");


const startServer=async()=>{
  await  connectToDatabase()
    const port = envConfig.port
    app.listen(port,()=>{
        console.log(`server has started in port ${port}`)
    })
}

startServer()