import React, { useEffect } from 'react';
import { Container, Content, List } from 'native-base';
import Topic from '../../components/Topic';

const TopicScreen = ({ listTopics, getListTopic, route }) => {
  const { categoryId } = route.params;

  useEffect(() => {
    getListTopic(categoryId);
  }, [getListTopic, categoryId]);

  return (
    <Container>
      <Content>
        <List>
          {listTopics.map(topic => (
            <Topic key={topic.ID} topic={topic} />
          ))}
        </List>
      </Content>
    </Container>
  );
};
export default TopicScreen;
