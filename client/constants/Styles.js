import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1ad70'
  },
  inputText: {
    height: 40,
    width: 280,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginBottom: 20,
    color: '#fff',
    fontSize: 16,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  buttonText: {
    color: '#fff',
    backgroundColor: '#ff8c00',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
    margin: 8,
  },
});

export default Styles;
