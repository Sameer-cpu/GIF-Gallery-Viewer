import {AuthActiontype} from './homeType';

const INITIAL_VALUES = {
  gifList: [],
};

const HomeReducer = (state = INITIAL_VALUES, action: any) => {
  switch (action.type) {
    case AuthActiontype.SHOW_HOME_GIFS:
      return {
        ...state,
        gifList: action.payload,
      };

    default:
      return state;
  }
};

export default HomeReducer;
