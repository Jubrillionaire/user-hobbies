import mongoose from "mongoose";

const hobbySchema = new mongoose.Schema({
    passionLevel: {
    type: String,
    required: true,
  },
  name:{
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }

});

const HobbyModel = mongoose.model("Hobby", hobbySchema);

export default HobbyModel;
