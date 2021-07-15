const mongoose = require ('mongoose'),
    uri = 'newproduct_db';

mongoose.connect(`mongodb://localhost/${uri}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("You are now in the mainframe. . ."))
    .catch((err) => console.log("Not working!", err))