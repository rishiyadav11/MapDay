const mongoose = require('mongoose');


 const videoSchema = new mongoose.Schema({
    isComplete: Boolean,
    url: String,
    title:String,
    author: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] ,
    // Add other video properties here
    createdAt: {
      type: Date,
      default: Date.now // Automatically sets the date when the document is created
  }
  });
  
  

  const videoModel = mongoose.model("Video",videoSchema);


  module.exports = videoModel;