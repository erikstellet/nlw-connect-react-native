import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    gap: 4,
    width: '100%',
  },
  input: {
    flex: 1,
    color: '#DAE4F2',
    fontSize: 16,
    fontWeight: 400,
  },
  wrapper: {
    alignItems: 'center',
    backgroundColor: '#13161B',
    borderColor: '#21252C',
    borderRadius: 10,

    borderWidth: 1,
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'flex-start',

    paddingHorizontal: 16,
    width: '100%',
  },
  text: {
    color: '#C8D0DA',
    fontSize: 20,
    fontWeight: 500,
    textAlign: 'center',
  },
  icon: {
    color: '#6F7D90',
    fontSize: 20,
  },
})
