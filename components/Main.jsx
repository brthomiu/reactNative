import React from 'react'
import { mainStyles } from './styles';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';


export default function Main() {
    return (
      <View style={mainStyles.container}>
        <Text>Open up App.js to start working on your app, punk!</Text>
        <StatusBar style="auto" />
      </View>
    );
  }


