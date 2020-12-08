import React from 'react';
import { ListItem, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';

const Topic = ({ topic }) => {
  const navigation = useNavigation();
  return (
    <ListItem
      button={true}
      onPress={() => {
        navigation.navigate('QuestionScreen', {
          topicId: topic.ID,
        });
      }}>
      <Text>{topic.Name}</Text>
    </ListItem>
  );
};

export default Topic;
