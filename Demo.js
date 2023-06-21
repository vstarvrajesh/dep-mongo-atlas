const mongoose = require('mongoose');
const { Schema } = mongoose

const DemoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
});
const Demo = mongoose.model("Demo", DemoSchema);
module.exports = Demo
