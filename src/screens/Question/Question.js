import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Button, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import Answer from '../../components/Answer';
import Svg, { Defs, LinearGradient, Stop, Path } from 'react-native-svg';

const { width } = Dimensions.get('window');
const QuestionScreen = ({ route }) => {
  const {
    question,
    amountOfQuestion,
    ordinalScreen,
    answerQuestion,
    questionId,
    submitQuestion,
  } = route.params;

  const navigation = useNavigation();
  const [activeAnswer, setActiveAnswer] = useState();

  const handlePressAnswer = answerId => {
    setActiveAnswer(answerId);
  };
  const handleSubmitAnswer = () => {
    answerQuestion(questionId, activeAnswer);
  };

  return (
    <View>
      <View style={styles.wrapQuestion}>
        <Text style={styles.questionText}>{question.Content}</Text>
        <Svg width={width} height={297}>
          <Defs>
            <LinearGradient
              x1="50%"
              y1="-61.126%"
              x2="50%"
              y2="143.524%"
              id="a">
              <Stop stopColor="#00EBCF" offset="0%" />
              <Stop stopColor="#00BEEB" offset="100%" />
            </LinearGradient>
          </Defs>
          <Path
            d={`M0 0h${width}v275s-88.5 22-184 22S0 275 0 275V0z`}
            fill="url(#a)"
            fillRule="evenodd"
          />
        </Svg>
      </View>
      <View>
        {question.Answers.map(answer => (
          <Answer
            currentActive={activeAnswer}
            setActiveAnswer={handlePressAnswer}
            key={answer.ID}
            answer={answer}
          />
        ))}
      </View>
      {ordinalScreen + 1 === 3 ? (
        // {ordinalScreen + 1 === amountOfQuestion ? (
        <Button
          style={[styles.buttonSubmit, styles.buttonDone]}
          onPress={() => {
            submitQuestion(questionId, activeAnswer);
            navigation.navigate('ResultScreen');
          }}>
          <Text style={[styles.textSubmit, styles.textDone]}>Done</Text>
        </Button>
      ) : (
        <Button
          style={styles.buttonSubmit}
          onPress={() => {
            handleSubmitAnswer();
            navigation.navigate(`Question-${ordinalScreen + 1}`);
          }}>
          <Text style={styles.textSubmit}>Submit</Text>
        </Button>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  wrapQuestion: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  questionText: {
    fontSize: 30,
    color: '#fff',
    position: 'absolute',
    top: '50%',
    transform: [{ translateY: -30 }],
    zIndex: 1,
    width: '100%',
    textAlign: 'center',
  },
  wrapAnswer: {
    flex: 1,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  buttonSubmit: {
    borderRadius: 100,
    backgroundColor: 'rgba(0,35,07,10)',
    width: '70%',
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  textSubmit: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
  buttonDone: {
    backgroundColor: 'rgba(0,235,207,100)',
  },
});
export default QuestionScreen;
