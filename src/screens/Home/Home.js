import React, { useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import Category from '../../components/Category';

const HomeScreen = ({ listCategories, getListCategory, error }) => {
  useEffect(() => {
    getListCategory();
  }, [getListCategory]);

  return (
    <SafeAreaView>
      <View style={styles.wrap}>
        {error ? (
          <Text>Something went wrong</Text>
        ) : (
          listCategories &&
          listCategories.map(category => (
            <Category key={category.ID} category={category} />
          ))
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrap: {
    paddingTop: 50,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
export default HomeScreen;
