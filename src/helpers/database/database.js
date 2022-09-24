const mongoose = require("mongoose");

mongoose.connect(`mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@e-commerce.oxz7epv.mongodb.net/e-commerce`, {
    useNewUrlParser: true
})