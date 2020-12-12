import 'react-native-gesture-handler';
import React, { createRef } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import {
  createStackNavigator,
  HeaderBackButton,
} from '@react-navigation/stack';
import { StyleProvider } from 'native-base';
import { Provider } from 'react-redux';

import getTheme from '../native-base-theme/components';
import commonColor from '../native-base-theme/variables/commonColor';

import Home from '../screens/Home';
import TopicScreen from '../screens/Topic';
import QuestionScreen from '../screens/Question';
import ResultScreen from '../screens/Question/Result.container';
import store from '../store';

const Stack = createStackNavigator();
export const navigationRef = createRef();

const screenOptions = () => ({
  headerStyle: {
    elevation: 0,
    backgroundColor: 'transparent',
  },
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  cardOverlayEnabled: true,
  headerTitleAlign: 'center',
  headerTransparent: true,
  headerShown: true,
});

const RootMainStack = () => {
  return (
    <Stack.Navigator mode="modal" screenOptions={screenOptions}>
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        options={{ title: 'Categories' }}
      />
      <Stack.Screen
        name="TopicScreen"
        component={TopicScreen}
        options={{ title: 'Topics' }}
      />
      <Stack.Screen
        name="QuestionScreen"
        component={QuestionScreen}
        options={{
          title: 'Question',
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize: 23,
          },
        }}
      />
      <Stack.Screen
        name="ResultScreen"
        component={ResultScreen}
        options={{
          title: 'Result',
          headerLeft: props => {
            console.log(props);
            return (
              <HeaderBackButton
                label="Topics"
                onPress={() => navigationRef.current.navigate('TopicScreen')}>
                Topic
              </HeaderBackButton>
            );
          },
        }}
      />
    </Stack.Navigator>
  );
};

const Navigator = () => {
  return (
    <Provider store={store}>
      <StyleProvider style={getTheme(commonColor)}>
        <NavigationContainer ref={navigationRef}>
          <RootMainStack />
        </NavigationContainer>
      </StyleProvider>
    </Provider>
  );
};
export default Navigator;
