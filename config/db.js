const mongoose = require("mongoose");

const db = "mongodb+srv://fify:dlR8VNgTfLjUYSIq@cluster0.vwl60.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("MongoDB is connected");
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;