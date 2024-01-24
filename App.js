import { StatusBar } from 'expo-status-bar';
import { Text, View, Button } from 'react-native';
import Navbar from './components/Navbar/Navbar';

export default function App() {
  return (
    <View className="flex items-center">
      <Navbar />
      <StatusBar style="auto" />
    </View>
  );
}
