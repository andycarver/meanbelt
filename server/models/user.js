const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
	_answers:[{ type: Schema.Types.ObjectId, ref: "Answer" }],
},{timestamps: true})

mongoose.model('User', UserSchema)
