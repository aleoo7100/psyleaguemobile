import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import VideosS from '../features/videos/VideosS';
import VideoDetailS from '../features/videos/videoDetail/VideoDetailS';

const Stack = createNativeStackNavigator<VideosStackParamList>();

export default function VideosNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="videos" component={VideosS} />
      <Stack.Screen name="videoDetail" component={VideoDetailS} />
    </Stack.Navigator>
  );
}

export type VideosStackParamList = {
  videos: undefined;
  videoDetail: { videos_id: string };
};
