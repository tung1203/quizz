import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleProvider } from 'native-base';
import { Provider } from 'react-redux';

import getTheme from '../native-base-theme/components';
import commonColor from '../native-base-theme/variables/commonColor';

import Home from '../screens/Home';
import TopicScreen from '../screens/Topic';
import QuestionScreen from '../screens/Question';
import store from '../store';

const Stack = createStackNavigator();

const RootMainStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="HomeScreen" component={Home} />
    <Stack.Screen name="TopicScreen" component={TopicScreen} />
    <Stack.Screen name="QuestionScreen" component={QuestionScreen} />
  </Stack.Navigator>
);

const Navigator = () => {
  return (
    <Provider store={store}>
      <StyleProvider style={getTheme(commonColor)}>
        <NavigationContainer>
          <RootMainStack />
        </NavigationContainer>
      </StyleProvider>
    </Provider>
  );
};
export default Navigator;
