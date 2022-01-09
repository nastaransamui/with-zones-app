import { createStore } from 'redux';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';

const initialState = {
  themeName: 'cloud',
  themeType: 'light',
  loadingBar: 0,
  showMovie: true,
  youTubeBanner: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case HYDRATE:
      return { ...state, ...payload };
    case 'THEMENAME':
      return { ...state, themeName: payload };
    case 'THEMETYPE':
      return { ...state, themeType: payload };
    case 'YOUTUBE_BANNER':
      return { ...state, youTubeBanner: payload };
    case 'SHOWMOVIE':
      return { ...state, showMovie: payload };
    case 'LOADINGBAR':
      return { ...state, loadingBar: payload };
    default:
      return state;
  }
};

const makeStore = (context) => createStore(reducer);

export const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV == 'development' ? true : false,
});
