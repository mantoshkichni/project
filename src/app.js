const express = require("express");
const hbs=require('hbs');
const path=require('path');
const geocode=require('../utils/app.js')
const app = express();
const port = 3000;

const viewpath=path.join(__dirname,'../templates/views')
const publidir=path.join(__dirname,'../public')
const partialspath=path.join(__dirname,'../templates/partials')

app.use(express.static(publidir))
app.set('view engine','hbs')
app.set('views',viewpath)
hbs.registerPartials(partialspath)

app.get('',(req,res)=>{
    res.render('index.hbs',{
        title:'WeatherApp'
    })
})


app.get('/weather', (req, res) => {
    const address=req.query.address
    console.log(address)
     geocode(address,(error,response)=>{

     

         if(error)
         return res.send(error)
         else
         {
             res.send({
                latitude:response.body.location.lon,
                longitude:response.body.location.lat,
                address:response.body.request.query,
                temperature:response.body.current.temperature,
                feelslike:response.body.current.feelslike,
                observation_time:response.body.current.observation_time
             })
            
         }
     })
})
 
app.listen(port, () => {
console.log('Server is listening at http: //localhost:'+port)
})