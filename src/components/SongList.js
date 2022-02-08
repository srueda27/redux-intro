import React from "react";
import { connect } from "react-redux";
import { selectSong } from '../actions';

class SongList extends React.Component {
  renderSongs() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              onClick={() => this.props.selectSong(song)}
              className="ui button primary"
            >Select</button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderSongs()}</div>
  }
}

//state in redux is the store, which eventually its going to be this.props
const mapStateToProps = state => {
  return { songs: state.songs };
}

//connect takes the dispatch process for us, so we need to pass the action creator
export default connect(mapStateToProps, { selectSong })(SongList)