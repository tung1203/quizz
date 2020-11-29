import React from 'react';
import {View, StyleSheet} from 'react-native';
import ListTopicContainer from '../containers/ListTopic';
import {Container, Button, Text} from 'native-base';
const HomeScreen = ({navigation}) => (
  <View>
    <ListTopicContainer />
    <Container>
      <Button onPress={() => navigation.navigate('TopicScreen')}>
        <Text>asd</Text>
      </Button>
    </Container>
  </View>
);
const styles = StyleSheet.create({});
export default HomeScreen;
