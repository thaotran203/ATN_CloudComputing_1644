const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('hbs');
require('dotenv').config();

//khoi dong app
const app = express();

app.set('view engine', 'hbs');
app.set('views', './views');
hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('add', function (index) {
    index++;
    return index;
});
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// import route
const productRouter = require('./routers/Product.route');
app.use('/', productRouter);

// app.use((req, res) => {
//     res.status(404).send('<h1>This is ATN Toy Store</h1>');
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT);

console.log(`Server running at port ${PORT}`);

