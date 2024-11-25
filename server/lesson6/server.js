const express = require("express")
const path = require("path")
const {log} = require("./log")
const app = express()
PORT = process.env.PORT || 4000

app.use(log)

app.get('/',(req, res)=>{
    res.send("Home")
})

app.get('/api/:pic',(req, res)=>{
    const {pic} = req.params
    if(!pic)
        res.send("error")
    else
    {
    res.sendFile(path.join(__dirname,"public",pic))
    }
})

app.get('/a1',(req, res)=>{
    res.send("page1")
})

app.get('/a2',(req, res)=>{
    res.send("page2")
})

app.listen(PORT, ()=>{
   console.log(`runing on ${PORT}`)
})