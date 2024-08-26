import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";

const Dashboard = () => {
  const [click, setClick] = useState(false);
  const [title, setTitle] = useState('');
  const [videoURL, setVideoURL] = useState('');
  const [thumbnailURL, setThumbnailURL] = useState('');
  const [list, setList] = useState(null);
  const [handleno, setHandleno] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);

  const extractVideoID = (url) => {
    if (!url) return null; 
    const regex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const updateThumbnail = (url) => {
    const videoID = extractVideoID(url);
    const thumbnail = videoID ? `https://img.youtube.com/vi/${videoID}/hqdefault.jpg` : '';
    setThumbnailURL(thumbnail);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const data = { title, url: videoURL };
    try {
      const response = await axios.post("http://localhost:3000/api/video/create", data, { withCredentials: true });
      setTitle("");
      setVideoURL("");
      setThumbnailURL("");
      await getAllVideos();
    } catch (error) {
      console.error("Error submitting video:", error);
    }
  };

  const getAllVideos = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/video/allvideos", { withCredentials: true });
      setList(response.data);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  const generateThumbnailURL = (url) => {
    const videoID = extractVideoID(url);
    return videoID ? `https://img.youtube.com/vi/${videoID}/hqdefault.jpg` : '';
  };

  const handleIscomplete = async (videoID) => {
    try {
      await axios.put(`http://localhost:3000/api/video/update/${videoID}`, {}, { withCredentials: true });
      await getAllVideos(); 
    } catch (error) {
      console.error("Error updating video:", error);
    }
  };

  const handledelete = async (e, videoID) => {
    e.stopPropagation(); // Prevent the click event from propagating to parent elements
    try {
      await axios.delete(`http://localhost:3000/api/video/delete/${videoID}`, { withCredentials: true });
      await getAllVideos(); 
    } catch (error) {
      console.error("Error deleting video:", error);
    }
  };

  useEffect(() => {
    getAllVideos();
  }, []);

  return (
    <div className='w-full min-h-screen bg-gray-500 flex relative'>
      <div className={` ${click ? "w-10 transition-all duration-300" : "w-[30vw] transition-all duration-300"} bg-slate-800 h-screen fixed  left-0 z-10`}>
        <h1 onClick={() => setClick(!click)} className='flex justify-end pr-2 py-4  text-3xl cursor-pointer '>
          {click ? <FaArrowRight /> : <FaArrowLeft />}  
        </h1>
        <h1 className={`text-center mb-4 text-2xl ${click ? "hidden" : "block"}`}>
          Plan Your Day What To Watch
        </h1>
        <div className={`justify-center ${click ? "hidden" : "flex"}`}>
          {thumbnailURL ? 
            <img className='w-[80%] rounded-md' src={thumbnailURL} alt="Video Thumbnail" /> :
            <img className='w-[80%] rounded-md' src="https://spendmatters.com/wp/wp-content/themes/spend-matters/assets/images/placeholder.svg" />
          }
        </div>
        <form onSubmit={handleSubmit} className={` ${click ? "hidden" : "flex"} flex-col gap-2 items-center w-full rounded pt-6 pb-8 mb-4`}>
          <div className="mb-4 w-[80%]">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter title"
            />
          </div>

          <div className="mb-4 w-[80%]">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="link">
              YouTube Link
            </label>
            <input
              type="text"
              id="link"
              value={videoURL}
              onChange={(e) => {
                setVideoURL(e.target.value);
                updateThumbnail(e.target.value);
              }}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter YouTube link"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className={`min-h-screen ${click ? "w-full ml-0 pl-14" : "w-[70%] ml-[30vw]"}   -z-0  flex flex-col gap-4`}>
        {list && list.map((elem, index) => (
          <div key={index} className='w-full'>
            <h1 className='pl-2 text-2xl py-2'>{elem.date_id}</h1>
            <div className="flex flex-wrap gap-3 px-2 rounded-md">
              {elem.videos.slice().reverse().map((video, vidindex) => (
                <div 
                  onClick={() => {
                    setHandleno(!handleno);
                    setActiveVideo(video._id);
                  }} 
                  className={`${video.isComplete ? "bg-green-400" : "bg-red-400"} cursor-pointer w-60 rounded-md h-80 flex flex-col gap-2 items-center pt-4`} 
                  key={vidindex}
                >
                  
                  <img className='w-[90%] rounded-md' src={generateThumbnailURL(video.url)} alt="Video Thumbnail" />
                  <h2 className='text-xl font-semibold'>Task : {vidindex + 1}</h2>
                  <h1 className='text-2xl'>{video.title}</h1>
                  
                  <button 
                    onClick={(e) => handledelete(e, video._id)} 
                    className='flex bg-neutral-500 text-white justify-center items-center rounded-md text-xl gap-2 px-2 py-2'
                  >
                    Remove <TiDeleteOutline className='text-xl font-semibold' />
                  </button>

                  <div 
                    className={`absolute flex-col h-[35vh] w-[30vw] top-[30%] left-[45%] gap-3 ${handleno ? "hidden" : "flex"} justify-center ${click && "top-[30%] left-[30%]"} rounded-md p-4 bg-neutral-600 ${activeVideo === video._id ? "flex" : "hidden"}`}
                  >
                    <h1 className='text-2xl font-semibold text-center'>Let's do this now ?</h1>
                    <div className="flex justify-center gap-4">
                      <button className='w-28 h-10 bg-red-300' onClick={() => setHandleno(!handleno)}>No</button>
                      <a onClick={() => { handleIscomplete(video._id); }} className='w-28 h-10 bg-green-300 flex justify-center items-center' href={video.url} target='/'>Yes</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
