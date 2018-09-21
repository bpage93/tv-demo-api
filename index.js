const express = require("express");
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.get('/tvShows/:id', (req, res) => {
   const theData = req.params.id
   console.log(theData)
    res.send( theData)
})
app.post('/managePage', (req, res) => {
   console.log(req.body)
    const theData = req.body
    res.send(theData)
})

app.put('/preViewPage', (req, res) => res.send('Preview Page'))
app.delete('/delete', (req, res) => res.send('Delete!'))
app.listen(3001, () => {console.log('listening on port 3001')}) 