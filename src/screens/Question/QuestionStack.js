import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Spinner } from 'native-base';
import { createStackNavigator } from '@react-navigation/stack';
import QuestionScreen from './Question';

const Stack = createStackNavigator();

const QuestionStack = ({
  route,
  questions,
  getListQuestion,
  answerQuestion,
  submitQuestion,
}) => {
  const { topicId } = route.params;

  useEffect(() => {
    getListQuestion(topicId);
  }, [getListQuestion, topicId]);

  if (questions.length === 0) {
    return (
      <View style={styles.loading}>
        <Text style={styles.loadingText}>Loading Question...</Text>
        <Spinner />
      </View>
    );
  }

  return (
    <Stack.Navigator>
      {questions.map((question, ordinalScreen) => (
        <Stack.Screen
          key={question.ID}
          name={`Question-${ordinalScreen}`}
          component={QuestionScreen}
          options={() => ({ headerShown: false })}
          initialParams={{
            question,
            amountOfQuestion: questions.length,
            ordinalScreen,
            questionId: question.ID,
            answerQuestion,
            submitQuestion,
          }}
        />
      ))}
    </Stack.Navigator>
  );
};
const styles = StyleSheet.create({
  loading: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    fontSize: 20,
  },
});
export default QuestionStack;
