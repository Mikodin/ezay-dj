import { combineReducers } from 'redux';
import ScSongReducer from './reducer_scsong';

const rootReducer = combineReducers({
  scSong: ScSongReducer
});

export default rootReducer;
