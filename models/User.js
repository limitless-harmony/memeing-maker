import mongoose, { Schema } from 'mongoose';


// TODO: TO BE FLESHED OUT
const User = new Schema({
  id: Schema.ObjectId,
  email: {
    type: String,
    required: 'Please enter a title'
  },
  status: {
    type: String,
    enum: ['done', 'not started', 'in progress'],
    default: 'not started'
  }
});

// Add full text search
User.index({'$**': 'text'});

export default mongoose.model('User', User);
