import React from 'react';
import ListTopic from '../../components/ListTopic';
const listCategory = [
  {
    id: 1,
    name: 'language',
    image: require('../asset/01.png'),
  },
  {id: 2, name: 'abc', image: require('../asset/02.png')},
  {id: 3, name: '123', image: require('../asset/03.png')},
];
const ListTopicContainer = () => {
  return <ListTopic listCategory={listCategory} />;
};
export default ListTopicContainer;
