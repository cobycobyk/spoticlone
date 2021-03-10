export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token: 'BQAPftX8BYRYpgCYo6IwdsP66kdJISRjiygwUbIMudU8fYvIRZYSBxnPDH0SpcQDdEmG5vflm5lKbhuEfuc3IILZzv60A_zdXcAZQ3XIkyI1BDMgsWOaKTzbfrpz02gpZqRmHXzijU_Z0xkzV2lR7Th-hVMERg',
}

const reducer = (state, action) => {
  console.log(action)
  switch(action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };

      case 'SET_TOKEN':
        return {
          ...state,
          token: action.token,
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