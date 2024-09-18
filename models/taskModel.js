const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema(
    {
        fields: {
            title: {type: String, required: true},
            status: {type: String, required: true},
            description: {type: String,  required: false}
        },
        id: {type: Number, required: true}
    }
);

const Task = mongoose.model('Task', TaskSchema, 'tasks');

module.exports = Task