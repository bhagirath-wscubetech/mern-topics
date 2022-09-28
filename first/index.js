const mongoose = require("mongoose");


mongoose.connect(
        "mongodb+srv://wscubetech:mCMaI9SYMXYhfgwm@cluster0.wdyypkc.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(
        () => {
            console.log("Connected");
        }
    ).catch(
        () => {
            console.log("Failed");
        }
    )