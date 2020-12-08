import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Category = ({ category }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.wrap}
      onPress={() => {
        navigation.navigate('TopicScreen', {
          categoryId: category.ID,
        });
      }}>
      <View style={styles.wrapCategory}>
        <Image style={styles.image} source={{ uri: category.Image }} />
        <Text>{category.Name}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  wrap: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  wrapCategory: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '50%',
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 5,
  },
});
export default Category;
