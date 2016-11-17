import { FETCH_SCSONG } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_SCSONG:
      // Isn't actually changing state, NEVER manipulate state, instead create
      // a new array and add it to state
      //return state.concat([action.payload.data]); equivalent to
      //ES6 funsies
      return [ action.payload.data, ...state];
  }
  return state;
}
