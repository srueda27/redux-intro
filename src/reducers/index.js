import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    {
      title: 'No scrubs',
      duration: '4:05'
    },
    {
      title: 'Macarena',
      duration: '2:35'
    },
    {
      title: 'All star',
      duration: '3:05'
    }
  ]
}

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload
  }

  return selectedSong;
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})