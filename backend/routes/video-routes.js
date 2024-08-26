const express = require('express');
const router = express.Router();
const UserModel = require('../models/User-model');
const videoModel = require('../models/Video-model');
const authProtect = require('../middleware/authprotect'); // Ensure this middleware is properly implemented

router.post('/create', authProtect, async (req, res) => {
    const { url,title } = req.body; // Ensure 'url' is used as per the video schema
    console.log(url,title)
    try {
        let user = await UserModel.findOne({ email: req.user.email });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        const check = await videoModel.findOne({url: url});
        // console.log(check)
        if(check){
            return res.status(400).json({ error: "Video already exists" });
        }
        const newVideo = await videoModel.create({
            url, // Ensure this matches with your videoSchema
            isComplete: false,
            title,
            author: user._id
        });

        user.videos.push(newVideo._id);
        await user.save();

        res.status(201).json({
            msg:"video added",
            video: newVideo  // Return the created video object
        }); // Return the created video object

    } catch (error) {
        res.status(500).json({ error: "Failed to save video link", details: error.message });
    }
});

router.put('/update/:id', authProtect, async (req, res) => {
    const videoId = req.params.id; // Extract video ID from route parameters

    console.log(videoId)

    try {
        const video = await videoModel.findOne({ _id: videoId, author: req.user._id });

        if (!video) {
            return res.status(404).json({ error: 'Video not found or not authorized to edit' });
        }

        // Update the 'isComplete' field of the video
        const updatedVideo = await videoModel.findByIdAndUpdate(
            videoId,
            { isComplete: true }, // Only update the 'isComplete' field
            { new: true } // Return the updated document
        );

        res.json(updatedVideo);

    } catch (error) {
        console.error('Error updating video:', error);
        res.status(500).json({ error: 'Failed to update video', details: error.message });
    }
});

// DELETE route to delete a video (implementation needed)
router.delete('/delete/:id', authProtect, async (req, res) => {
    const videoId = req.params.id; // Extract video ID from route parameters

    try {
        const video = await videoModel.findOneAndDelete({ _id: videoId, author: req.user._id });

        if (!video) {
            return res.status(404).json({ error: 'Video not found or not authorized to delete' });
        }

        res.status(200).json({ msg: 'Video deleted successfully' });

    } catch (error) {
        console.error('Error deleting video:', error);
        res.status(500).json({ error: 'Failed to delete video', details: error.message });
    }
});


router.get('/allvideos', authProtect, async (req, res) => {
    try {
        const videos = await videoModel.aggregate([
            { $match: { author: req.user._id } }, // Match videos by the logged-in user
            { $sort: { createdAt: -1 } }, // Sort videos by creation date, descending
            {
                $addFields: {
                    formattedDate: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } } // Format the date
                }
            },
            {
                $group: {
                    _id: "$formattedDate", // Group by the formatted date
                    videos: { 
                        $push: { 
                            url: "$url", 
                            isComplete: "$isComplete", 
                            _id: "$_id",
                            title: "$title" // Include the title field
                        } 
                    } // Collect video details including the title
                }
            },
            { $sort: { "_id": -1 } }, // Sort groups by date, descending
            {
                $project: {
                    _id: 0, // Exclude the original _id field
                    date_id: "$_id", // Rename _id to date_id
                    videos: 1 // Keep the videos array as it is
                }
            }
        ]);

        res.status(200).json(videos); // Return grouped videos with date_id
    } catch (error) {
        // console.error('Error fetching videos:', error);
        res.status(500).json({ error: 'Failed to fetch videos', details: error.message });
    }
});


module.exports=router