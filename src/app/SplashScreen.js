import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';

const SplashScreen = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text style={{fontSize: 35}}>Quizz</Text>
    <ActivityIndicator color="blue" size="large" style={{marginTop: 40}} />
  </View>
);
export default SplashScreen;
