export function title(state = { title: '' }, action) {
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

export function route(state = { location: {}, match: {} }, action) {
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
