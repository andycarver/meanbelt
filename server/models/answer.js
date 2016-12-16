const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let AnswerSchema = new Schema({
    answer: {type: String,
        minlength: 5,
        required: true
    },
    likes: Number,
    details: {type: String,},
    _users: [{type: Schema.Types.ObjectId, ref: 'User'}]
},{timestamps: true})

mongoose.model('Answer', AnswerSchema)
