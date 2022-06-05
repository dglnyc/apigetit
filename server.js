const express = require('express')
const app=express()
require('cors')
const PORT=3000

app.use(cors())

const data={
"personName":'Me',
"personStatus":'Profeshional',
"personOccupation":'SWE'
}


app.get('/',(req, res)=>{
  res.sendFile(__dirname+'/index.html')
})

app.get('/api',(req, res)=>{
  res.json(data)
  console.log(res.json(data))
})
app.listen(process.env.PORT || PORT,"127.0.0.1",()=>{
  console.log(`listening on ${PORT}`)
 
})
// server.listen(8000, "127.0.0.1")
