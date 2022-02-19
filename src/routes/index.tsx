import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Posts} from '../pages/Posts/index';
import {PostDetail} from '../pages/PostDetail/index';

const PostsStack = createStackNavigator();

const PostsRoutes = () => (
  <PostsStack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {backgroundColor: '#FFF'},
    }}>
    <PostsStack.Screen name="posts" component={Posts} />
    <PostsStack.Screen name="postDetail" component={PostDetail} />
  </PostsStack.Navigator>
);

export default PostsRoutes;
