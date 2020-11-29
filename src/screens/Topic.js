import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import axios from '../utils/axiosInstance';
const TopicScreen = ({route, navigation}) => {
  const {categoryId} = route.params;
  useEffect(() => {
    axios.get('/topics');
  }, []);
  return (
    <View>
      <Text>Topic {categoryId} </Text>
    </View>
  );
};
export default TopicScreen;
