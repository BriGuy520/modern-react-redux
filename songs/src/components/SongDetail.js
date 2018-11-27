import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {

  if(!song){
    return <div>Select Song</div>
  }

  return (
    <div>
      <h3>Details For:</h3>
      <p>
        Title: {song.title}
        <br />
        Duration: {song.duration}
      </p>
    </div>
  )
}

const mapPropsToState = (state) => {
  return { song: state.selectedSong }
}

export default connect(mapPropsToState)(SongDetail);