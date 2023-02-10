import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, _Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30}} >Hello Coders!!</Text>
      <Text style={{color: 'red'}}>Hello people</Text>

      <Text>WELCOME</Text>
      <Text style={{fontSize: 30}}>to my app</Text>
      <Text></Text>
    
      <Image
  source={{
    uri: 'https://www.quepelivemoshoy.com/wp-content/uploads/2020/11/poster-el-padrino-726x1024.jpg.webp',
    method: 'POST',
    headers: {
      Pragma: 'no-cache'
    },
    body: 'Your Body goes here'
  }}
  style={{ width: 300, height: 400 }}
/>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  textStyle: {
    fontSize: 30,
 
  
    }
});
