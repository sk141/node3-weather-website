const request = require('request')

const forecast = (latitude, longitude, callback) => {
    
    const url = 'http://api.weatherstack.com/current?access_key=b1a0802773b1057dd0c4f22abc82ccd9&query=' + latitude + ',' + longitude + '&units=f'
    
    request({url, json: true}, (error, {body}) => {
        if(error) {
            callback('Unable to connect to weather server', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } 
        else {
             
            callback(undefined, body.current.weather_descriptions[0] + "It is currently " + body.current.temperature + " degrees out. It feels like " +  body.current.feelslike + " degrees out. The humidity is " + body.current.humidity + " %.")
        }
        
    })
}

// forecast(37.8267,-122.4233, (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
//   }
// )
module.exports = forecast