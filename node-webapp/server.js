const express = require('express');
const app = express();
 
app.use(express.json());
 
app.get('/', (req, res) => {
  res.send('GET method called');
});
 
app.post('/', (req, res) => {
  res.send(JSON.stringify(req.body, null, 2));
});
 
app.listen(8080, () => {
  console.log('Express server is running');
});