import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import VideosS from '../features/videos/VideosS';
import VideoDetailS from '../features/videos/videoDetail/VideoDetailS';
import Header1 from '../common/components/headers/Header1';
import Header2 from '../common/components/headers/Header2';

const Stack = createNativeStackNavigator<VideosStackParamList>();

export default function VideosNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        statusBarColor: '#000',
        statusBarTranslucent: false,
      }}>
      <Stack.Screen
        options={{
          header: () => <Header1 title="VIDEOS" />,
        }}
        name="videos"
        component={VideosS}
      />
      <Stack.Screen
        options={{
          header: () => <Header2 title="VIDEO" />,
        }}
        name="videoDetail"
        component={VideoDetailS}
      />
    </Stack.Navigator>
  );
}

export type VideosStackParamList = {
  videos: undefined;
  videoDetail: { videos_id: string };
};
