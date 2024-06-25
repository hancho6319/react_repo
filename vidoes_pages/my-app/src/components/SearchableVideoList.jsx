import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function SearchableVideoList({ videos }) {
  const [searchText, setSearchText] = useState('');
  const foundVideos = filterVideos(videos, searchText);
  return (
    <>
      <SearchInput
        value={searchText}
        onChange={newText => setSearchText(newText)} />
      <VideoList
        videos={foundVideos}
        emptyHeading={`No matches for “${searchText}”`} />
    </>
  );
}

function SearchInput({ value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder="Search videos"
    />
  );
}

function VideoList({ videos, emptyHeading }) {
  if (videos.length === 0) {
    return <h2>{emptyHeading}</h2>;
  }

  return (
    <ul>
      {videos.map(video => (
        <li key={video.id}>
          <h3>{video.title}</h3>
          <video controls>
            <source src={video.url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </li>
      ))}
    </ul>
  );
}

function filterVideos(videos, searchText) {
  return videos.filter(video =>
    video.title.toLowerCase().includes(searchText.toLowerCase())
  );
}

const videos = [
  { id: 1, title: 'Video 1', url: '/videos/video1.mp4' },
  { id: 2, title: 'Video 2', url: '/videos/video2.mp4' },
  { id: 3, title: 'Video 3', url: '/videos/video3.mp4' },
  // Add more videos as needed
];

ReactDOM.render(
  <SearchableVideoList videos={videos} />,
  document.getElementById('root')
);

export default SearchableVideoList;