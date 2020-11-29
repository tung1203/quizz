import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleProvider} from 'native-base';

import getTheme from '../native-base-theme/components';
import commonColor from '../native-base-theme/variables/commonColor';

import HomeScreen from '../screens/Home';
import TopicScreen from '../screens/Topic';

const Stack = createStackNavigator();
const AppContainer = () => {
  return (
    <StyleProvider style={getTheme(commonColor)}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="TopicScreen" component={TopicScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </StyleProvider>
  );
};
export default AppContainer;
