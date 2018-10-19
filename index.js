const app = require('express')();
const bodyParser = require('body-parser');

let port = process.env.port || 8080;

app.use(bodyParser.json());
app.use('/demo', require('./routes/demo'));

app.listen(port, function() {
    console.log(`Heyo ninja! You've just connected to port ${port}.`);
});