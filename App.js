import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import {vibrate} from './utils'
import Body from './components/body.js';
import Header from './components/header.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Body/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
