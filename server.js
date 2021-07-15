const express = require('express'),
    cors = require('cors'),
    port = 8000,
    app = express();

app.use(express.json(), express.urlencoded({extended: true}), cors());

require('./server/config/database.config');
require('./server/routes/product.route')(app);


app.listen(port, () => {
    console.log(`You are now listening to port ${port}`)
})