import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = ({isAuthenticated}) => {
  return (
    <div className="bg-gray-900 mt-20 text-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-gray-800 text-white text-center py-10">
        <h1 className="text-4xl font-bold">Welcome to MapDay!</h1>
        <p className="mt-2 text-lg">Your go-to app for organizing and enjoying your daily watchlist.</p>
      </header>

      {/* Main Content */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-gray-400 text-lg">Streamline your daily entertainment with MapDay. Effortlessly organize your watchlist and never miss a moment of your favorite shows, movies, and videos.</p>
          </div>
          <div className="flex flex-wrap -m-4">
            {/* Card 1 */}
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-700 text-indigo-400 mb-4">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 className="text-lg font-semibold text-gray-100 mb-2">Daily Watchlists</h2>
                <p className="text-gray-400">Create and customize your daily watchlists to keep track of all your planned content effortlessly.</p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-700 text-indigo-400 mb-4">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                  </svg>
                </div>
                <h2 className="text-lg font-semibold text-gray-100 mb-2">Smart Recommendations</h2>
                <p className="text-gray-400">Receive personalized suggestions based on your viewing history and preferences.</p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-700 text-indigo-400 mb-4">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h2 className="text-lg font-semibold text-gray-100 mb-2">Seamless Integration</h2>
                <p className="text-gray-400">Sync with popular streaming platforms to access and organize your content directly from one place.</p>
              </div>
            </div>
            {/* Card 4 */}
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-700 text-indigo-400 mb-4">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                  </svg>
                </div>
                <h2 className="text-lg font-semibold text-gray-100 mb-2">Track Your Progress</h2>
                <p className="text-gray-400">Set reminders and track what you’ve watched to keep up with your entertainment goals.</p>
              </div>
            </div>
            {/* Card 5 */}
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-700 text-indigo-400 mb-4">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                  </svg>
                </div>
                <h2 className="text-lg font-semibold text-gray-100 mb-2">Share with Friends</h2>
                <p className="text-gray-400">Share your watchlists and discover new content through your friends' recommendations.</p>
              </div>
            </div>
            {/* Card 6 */}
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-700 text-indigo-400 mb-4">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h2 className="text-lg font-semibold text-gray-100 mb-2">Easy Navigation</h2>
                <p className="text-gray-400">Navigate through your watchlists and recommendations with intuitive and user-friendly controls.</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-16">
            <NavLink to={isAuthenticated ? "/dashboard" : "/signup"} className="bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 transition-colors duration-300 ease-in-out">
              Get Started
            </NavLink>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 text-center py-4">
        <p>&copy; 2024 MapDay. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
