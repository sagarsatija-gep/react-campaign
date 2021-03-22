const express = require('express');
const campaignList = require('./data/campaign-list');
const serveStatic=require('serve-static')
const app = express();
app.get('/', (req, res)=> {
    res.send('API is running');
}); 

app.use(serveStatic('data'))

app.get('/api/campaignData', (req, res)=> {
    // res.send('API is running');
    res.json(campaignList)
});

app.listen(5000, console.log("server is running on port 5000"));