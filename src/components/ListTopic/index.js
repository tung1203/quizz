import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ListTopic = ({listCategory}) => {
  console.log(listCategory);
  const navigation = useNavigation();
  return (
    <View style={styles.wrap}>
      {listCategory.map((category) => (
        <TouchableOpacity
          key={category.name}
          style={styles.wrap}
          onPress={() => {
            navigation.navigate('TopicScreen', {
              categoryId: category.id,
            });
          }}>
          <View style={styles.wrapCategory}>
            <Image style={styles.image} source={category.image} />
            <Text>{category.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
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
export default ListTopic;
