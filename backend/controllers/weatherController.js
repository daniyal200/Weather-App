const { axios } = require('axios')
const asyncHandler = require('express-async-handler')

const getWeatherLocation = asyncHandler(async(req,res) => {
    const {q,appid} = req.query
    await axios.get('https://api.openweathermap.org/data/2.5/weather?q=London&appid=391e35b2cf975ec5e8a1411762f11ca4',{
    }).then(({data}) =>{
        console.log(res.data)
        console.log(res.data)
    }).catch(e =>{
        console.log(e)
        res.status(500)
    })
    
})

module.exports = {
    getWeatherLocation
}