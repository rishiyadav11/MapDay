Here's a README file for the "MapDay" project:

---

# MapDay

**MapDay** is a full-stack web application designed to help users plan and organize their YouTube video watchlist on a daily basis. The app allows users to add YouTube videos to their list, view them later, and mark them as completed once watched. It also provides a thumbnail preview for each video link, making it easy to identify the content at a glance.

## Features

### 1. **Daily Video Organization**
   - Users can categorize their YouTube videos by the date they plan to watch them.
   - The app displays all videos under the respective date, making it easy to manage your daily watchlist.

### 2. **Real-Time YouTube Thumbnail Fetching**
   - As users input a YouTube link, the app automatically fetches and displays the video’s thumbnail in real-time.
   - This feature ensures that users can visually identify the content of the video before adding it to their list.

### 3. **Task Management**
   - Users can mark videos as "Complete" after watching them.
   - Completed videos are highlighted in green, while pending videos are highlighted in red, providing a clear visual distinction between completed and pending tasks.

### 4. **Interactive User Interface**
   - The app features a collapsible sidebar that includes a form for adding new videos. The sidebar can be expanded or collapsed as needed.
   - The main dashboard displays the list of videos categorized by date, allowing users to see all their tasks at a glance.

### 5. **Confirmation Dialog for Video Playback**
   - Before playing a video, a confirmation dialog asks the user if they want to watch it now. This helps in prioritizing tasks and ensuring that the user is ready to engage with the content.

### 6. **Video Removal**
   - Users can easily remove videos from their list if they no longer wish to watch them. This keeps the dashboard clean and focused on relevant tasks.

### 7. **Responsive Design**
   - The user interface is built with Tailwind CSS, ensuring that the app is responsive and looks good on all screen sizes.

## Installation

### Prerequisites
- Node.js
- npm (Node Package Manager)
- MongoDB

### Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/mapday.git
   cd mapday
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure the backend:**
   - Set up a MongoDB database.
   - Create a `.env` file in the root directory and add your MongoDB URI and any other environment variables required for your backend server.

4. **Run the backend server:**
   ```bash
   npm run start:backend
   ```

5. **Run the frontend:**
   ```bash
   npm start
   ```

6. **Access the application:**
   - Open your browser and navigate to `http://localhost:3000`.

## Usage

1. **Adding a Video:**
   - Expand the sidebar by clicking on the arrow icon.
   - Enter a title for the video.
   - Paste the YouTube video link in the provided field. The thumbnail will be fetched automatically.
   - Click "Submit" to add the video to your daily watchlist.

2. **Viewing and Managing Videos:**
   - Videos are displayed in the main dashboard categorized by the date they were added.
   - Click on any video card to bring up the confirmation dialog.
   - Choose "Yes" to watch the video, which will mark it as complete, or "No" to cancel.

3. **Removing a Video:**
   - Click the "Remove" button on a video card to delete it from your list.

## Tech Stack

- **Frontend:** React, Tailwind CSS, Axios
- **Backend:** Node.js, Express.js
- **Database:** MongoDB

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue to discuss any changes.

## Acknowledgements

- [YouTube API](https://developers.google.com/youtube)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)

---

This README provides an overview of the "MapDay" project, its features, and instructions for setting up and using the application.