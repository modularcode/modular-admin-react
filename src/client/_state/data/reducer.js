import { handleActions } from 'redux-actions';
import * as actionTypes from './actionTypes';


const reducer = handleActions({
  [actionTypes.LOAD]: (state, action) => {
    const {
      places
    } = action.payload;

    return {
      ...state,
      ...places
    };
  },
}, {  });


export default reducer;
