const { Schema, model } = require('mongoose');

const projectSchema = new Schema({
    name: {
        type: String,
        trim: true,
    },
    description: {
        type: String,
    },
    link: {
        type: String,
    }
});

const Projects = model('Projects', projectSchema);

module.exports = Projects;