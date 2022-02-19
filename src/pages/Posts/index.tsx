import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import {Container} from './styles';

import * as PostsActions from '../../store/ducks/posts/actions';

import {CardMessage} from '../../Components/CardMessage/Index';

export function Posts() {
  const dispatch = useDispatch();

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    await dispatch(PostsActions.loadRequest());
  };

  return (
    <Container>
      <CardMessage />
    </Container>
  );
}
