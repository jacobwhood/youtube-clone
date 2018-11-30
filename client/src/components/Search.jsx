import React from 'react';

import SearchBar from './SearchBar.jsx';
import VideoList from './VideoList.jsx';
import VideoPlayer from './VideoPlayer.jsx';

const Search = () => (
  <div className='search-container'>
    <h2>I am search!</h2>
    <SearchBar />
    <VideoList />
    <VideoPlayer />
  </div>
);

export default Search;
