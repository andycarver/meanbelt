const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let QuestionSchema = new Schema({
    question: {type: String,
        minlength: 10,
        required: true
    },
    desc: {type: String,},
    _answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}]
},{timestamps: true})

mongoose.model('Question', QuestionSchema)
