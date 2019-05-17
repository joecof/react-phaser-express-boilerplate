const express = require('express');
const path = require('path');

const app = express();


app.use('/', express.static(path.join(__dirname, 'public')));

app.use('/', (req,res) => {
  res.sendFile();
})

app.listen(3001, () => {
  console.log('listening on port 3000');
});