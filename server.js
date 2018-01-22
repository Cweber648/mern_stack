const express = require('express');

const app = express();
app.use(express.static('static'));

app.listen(3000, function() {
  console.log("Now Listening to rap music on port 3000")
});