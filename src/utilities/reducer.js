export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: 'BQDj3D1-6zFvqc0iFDn2iz-OjGqa0LU58TaqATuo5Z2f9DQyjN…ulGhLeUKTApbF2t_2PGWoWTlGNIG8t5VJeuYU7IAdKZjV8gag',
  discover_weekly: null,
  top_artists: null,
}

const reducer = (state, action) => {
  console.log(action)
  switch(action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };

    case 'SET_PLAYING':
      return {
        ...state,
        token: action.playing,
      };

    case 'SET_ITEM':
      return {
        ...state,
        token: action.item,
      };

    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };

    case 'SET_TOP_ARTISTS':
      return {
        ...state,
        playlists: action.top_artists,
      };

    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists,
      };

    case 'SET_DISCOVER_WEEKLY':
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
}

export default reducer