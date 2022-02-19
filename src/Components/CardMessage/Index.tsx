import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import {ApplicationState} from '../../store';

import {ContainerCard, DateCard, SubjectCard, ListPosts} from './styles';

export function CardMessage() {
  const navigation = useNavigation();
  const posts = useSelector((state: ApplicationState) => state.posts.data);

  function handlePress() {
    navigation.navigate('postDetail');
  }
  return (
    <ListPosts>
      {posts.map((posts, index) => {
        <ContainerCard key={index} onPress={handlePress}>
          <SubjectCard>{posts.assunto}</SubjectCard>
          <DateCard>{posts.date}</DateCard>
        </ContainerCard>;
      })}
    </ListPosts>
  );
}
