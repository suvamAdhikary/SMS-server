const mongoose = require('mongoose');

require('dotenv').config();

const { DB_PASSWORD } = process.env;

module.exports = () => {
    return mongoose.connect(`mongodb+srv://masai-sms:${DB_PASSWORD}@masai-sms-0.wdycz.mongodb.net/sms?retryWrites=true&w=majority`);
}