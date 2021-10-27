import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  hobbies: [
      {
       type: mongoose.Schema.Types.ObjectId,
       ref: 'User',
      }
  ]
});

const UserModel = mongoose.model("User", userSchema);
 


export default UserModel;
