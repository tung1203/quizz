import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button } from 'native-base';
import { useNavigation } from '@react-navigation/native';

const Answer = ({ answer, currentActive, setActiveAnswer }) => {
  return (
    <View style={styles.answerItem}>
      <Button
        style={[
          styles.buttonAnswer,
          answer.ID === currentActive ? styles.active : {},
        ]}
        onPress={() => setActiveAnswer(answer.ID)}>
        <Text style={styles.textAnswer}>{answer.Content}</Text>
      </Button>
    </View>
  );
};
const styles = StyleSheet.create({
  answerItem: {
    margin: 10,
  },
  buttonAnswer: {
    backgroundColor: 'transparent',
    opacity: 0.8,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#2E313C',
    borderRadius: 10,
    width: '90%',
    margin: 'auto',
    alignSelf: 'center',
    display: 'flex',
    justifyContent: 'center',
    height: 50,
  },
  active: {
    borderColor: 'rgba(0,235,207,100)',
  },
  textAnswer: {
    textTransform: 'capitalize',
    fontSize: 16,
    color: '#2E313C',
    textAlign: 'center',
  },
});
export default Answer;
