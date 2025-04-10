// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';


import Main from './screens/Main';

export default function App() {
  return (
    <View style={styles.container}>
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
