var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
dotenv.config();
const {apicall} = require('./app.js')
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static('dist'))
console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})
// designates what port the app will listen to for incoming requests
app.listen(3031, function () {
    console.log('Example app listening on port 3031!')
})
app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})


//POST article 
app.post('/article', getArticle)

async function getArticle(req, res) {
    try{
     const url = req.body.url;
     console.log(url)
     const data = await apicall(url)
     res.send(data)
    }
    catch(error){
    console.log(error.message)
    }
 
}


