import {AuthActiontype} from './homeType';

export const showHomeGifs = (payload: Object) => ({
  type: AuthActiontype.SHOW_HOME_GIFS,
  payload,
});
