const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;
const Model1Schema = new Schema({
    Field1: {
        type: String,
        trim: true,
        default: ''
    },
    Created: { type: Date, default: Date.now() }
});

scheduleSchema.plugin(AutoIncrement, { inc_field: 'counterId' })
const Model1 = mongoose.model("Model1", Model1Schema);
module.exports = Model1;