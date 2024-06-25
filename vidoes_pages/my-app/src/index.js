/*
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/

import React from 'react';
import ReactDOM from 'react-dom';
import SearchableVideoList from './components/SearchableVideoList';

// List of videos with their titles and URLs
const videos = [
  { id: 1, title: 'Video 1', url: '/videos/video1.mp4' },
  { id: 2, title: 'Video 2', url: '/videos/video2.mp4' },
  { id: 3, title: 'Video 3', url: '/videos/video3.mp4' },
  // Add more videos as needed
];

// Render the SearchableVideoList component and pass the videos array as a prop
ReactDOM.render(
  <React.StrictMode>
    <SearchableVideoList videos={videos} />
  </React.StrictMode>,
  document.getElementById('root')
);
