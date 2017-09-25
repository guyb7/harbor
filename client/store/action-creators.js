import Promise from 'bluebird'

const getRemoteData = async ({ param }) => {
  return new Promise(resolve => {
    setTimeout(() => resolve({
      data: param + '!!'
    }), 200)
  })
}

export function setTitle(value) {
  return {
    type: 'SET_TITLE',
    title: value
  }
}

export function setRouteInfo({ location, match }) {
  return {
    type: 'SET_ROUTE_INFO',
    location,
    match
  }
}

export function setTitleDelayed(value, delay) {
  return dispatch => {
    return getRemoteData({ param: value }).then(
      sauce => dispatch(setTitle(value)),
      error => dispatch(setTitle('Error!'))
    )
  }
}
