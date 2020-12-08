import React from 'react';
import { StyleSheet, View } from 'react-native';
import { CheckBox, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';

const Answer = ({ answer }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.answerItem}>
      <CheckBox checked={true} />
      <View>
        <Text>Daily Stand Up</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  answerItem: {
    width: '30%',
    marginHorizontal: 10,
  },
});
export default Answer;
