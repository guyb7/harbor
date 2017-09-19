import { grey100, grey700, grey900 } from '../../../style/colors'

export default {
  menu: {
    backgroundColor: grey100,
    borderTop: 0,
    borderBottom: 0,
    borderLeft: 0,
    borderRightColor: 'rgba(34,36,38,.15)',
    borderRadius: 0,
    width: 200,
    margin: 0,
    boxShadow: 'none'
  },
  mainMenuItem: {
    height: 49
  },
  menuItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    color: grey700,
    borderRadius: 0
  },
  menuItemActive: {
    color: grey900,
  }
}
