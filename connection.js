const mongoose= require("mongoose");

async function connectMondoDb(url) {
    return mongoose.connect(url);

}

module.exports = {
    connectMondoDb,
};
