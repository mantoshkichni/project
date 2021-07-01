const request=require('request')


const geocode=(address,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=b76cb2edd7bda10035b05467a50a041a&query='+encodeURIComponent(address) 
    //const URL=url.concat(address)
    request({url:url,json:true},(error,response)=>{
    if(error)
   // console.log(error)
   callback('Unable to connect to Server',undefined)
    else if(response.body.success==false)
    {
       // console.log('Unable to find the address')
        callback('Please Enter the dvalid Address')
    }
    
    else
    {
    
        // console.log('Address:'+response.body.request.query)
        // console.log('lat:'+response.body.location.lat)
        // console.log('lon:'+response.body.location.lon)
        // console.log('weather_descriptions:'+response.body.current.weather_descriptions[0])  
        
        callback(undefined,response)
    }
    //document.body.innerHTML=response.body.request.query
    
    })
}
module.exports=geocode;
