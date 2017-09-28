export default {
  container: {
    padding: 40
  },
  header: {
    display: 'flex',
    flexDirection: 'row'
  },
  avatarContainer: {
    width: 230,
    height: 230,
    overflow: 'hidden',
    borderRadius: 6,
    position: 'relative',
    marginBottom: 20
  },
  avatar: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  profile: {
    flex: 1,
    paddingLeft: 40,
    paddingRight: 40,
    display: 'flex',
    flexDirection: 'column'
  },
  name: {
    fontSize: '2em',
    lineHeight: '2em'
  },
  description: {
    whiteSpace: 'pre-line'
  }
}
