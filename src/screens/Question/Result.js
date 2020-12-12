import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
const ResultScreen = ({ correctAnswersNumber }) => {
  return (
    <View style={styles.resultView}>
      <ImageBackground
        style={styles.background}
        source={require('../../asset/Background.png')}>
        <View style={styles.wrapText}>
          <Text style={styles.congratsText}>Congrats!</Text>
          <Text style={styles.resultText}>{correctAnswersNumber}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  resultView: {
    flex: 1,
    flexDirection: 'column',
  },
  congratsText: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  resultText: {
    fontSize: 120,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
export default ResultScreen;
