import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Content, Text } from 'native-base';
import Answer from '../../components/Answer';

const QuestionScreen = ({ route }) => {
  const { question } = route.params;
  return (
    <View>
      <View style={styles.wrap}>
        <Text>{question.Content}</Text>
      </View>
      <View>
        {question.Answers.map(answer => (
          <Answer key={answer.ID} answer={answer} />
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrap: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  wrapAnswer: {
    flex: 1,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
});
export default QuestionScreen;
