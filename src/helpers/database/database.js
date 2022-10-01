const mongoose = require("mongoose");
console.log(process.env.MONGO_URL);

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true
})