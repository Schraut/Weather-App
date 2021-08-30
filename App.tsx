import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import SearchBar from './components/SearchBar';


export default function App() {
  return (
    <SafeAreaView>
      <SearchBar query={''} searchQuery={''} />
    <View style={styles.container}>
      <Text>Current Weather</Text>
      <Text>80°</Text>
    </View>
    <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  currentWeather: {
    fontSize: 40,
  }
});
