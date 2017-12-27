const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json())

const messages_controller = require('./controllers/messages_controller');
const baseURL = '/api/messages';

app.use(express.static( __dirname + '/../public/build'));
app.post(baseURL, messages_controller.create);
app.get(baseURL, messages_controller.read);
app.put(`${baseURL}/:id`, messages_controller.update);
app.delete(`${baseURL}/:id`, messages_controller.delete);

const port = 3000;
app.listen(port, () => console.log(`The magic is happening on port ${port}`))