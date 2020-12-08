import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Category from '../../components/Category';

const HomeScreen = ({ listCategories, getListCategory }) => {
  useEffect(() => {
    getListCategory();
  }, [getListCategory]);

  return (
    <View>
      <View style={styles.wrap}>
        {listCategories &&
          listCategories.map(category => (
            <Category key={category.ID} category={category} />
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
});
export default HomeScreen;
