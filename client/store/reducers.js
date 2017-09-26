export function title (state = { title: '' }, action) {
  switch (action.type) {
    case 'SET_TITLE':
      return {
        ...state,
        title: action.title
      }
    default:
      return state
  }
}

export function route (state = { location: {}, match: {} }, action) {
  switch (action.type) {
    case 'SET_ROUTE_INFO':
      return {
        ...state,
        location: action.location,
        match: action.match
      }
    default:
      return state
  }
}

const userState = {
  logged_in: false,
  username: null,
  name: null,
  type: null,
  profile: {}
}
export function user (state = userState, action) {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        ...action.user
      }
    default:
      return state
  }
}
