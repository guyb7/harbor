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

const userStateStartup = {
  logged_in: true,
  username: 'startup-member',
  name: 'Startup Member',
  type: 'startup-member',
  profile: {},
  startup: {
    id: 'reesio',
    name: 'Reesio'
  },
  mentors: [
    {
      username: 'gaston-little',
      name: 'Gaston Little'
    }, {
      username: 'jessyca-kunde',
      name: 'Jessyca Kunde'
    }
  ]
}
const userStateMentor = {
  logged_in: true,
  username: 'mentor',
  name: 'Mentor',
  type: 'mentor',
  profile: {},
  startups: [
    {
      id: 'reesio',
      name: 'Reesio'
    }, {
      id: 'tuna',
      name: 'Tuna'
    }
  ]
}
const userStateAccelerator = {
  logged_in: true,
  username: 'accelerator-member',
  name: 'Accelerator Member',
  type: 'accelerator-member',
  profile: {}
}
export function setUser(type = 'startup-member') {
  return {
    type: 'SET_USER',
    user: type === 'accelerator-member' ? userStateAccelerator : (type === 'mentor' ? userStateMentor : userStateStartup)
  }
}
