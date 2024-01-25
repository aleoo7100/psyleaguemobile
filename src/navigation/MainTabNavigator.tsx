import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NewsNavigator from './NewsNavigator';
import EventsNavigator from './EventsNavigator';
import VideosNavigator from './VideosNavigator';
import RankingNavigator from './RankingNavigator';
import PartnersNavigator from './PartnersNavigator';
import ProfileNavigator from './ProfileNavigator';
import CustomTabBarButton from './components/CustomTabBarButton';
import CupIcon from '../assets/icons/cup.svg';
import MegaphoneIcon from '../assets/icons/megaphone.svg';
import VideoIcon from '../assets/icons/video.svg';
import ShieldIcon from '../assets/icons/shield.svg';
import StarsIcon from '../assets/icons/stars.svg';
import ProfileIcon from '../assets/icons/profile.svg';

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#C91B2C',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          paddingHorizontal: 20,
          position: 'absolute',
          minHeight: 80,
          alignItems: 'flex-start',
        },
      }}>
      <Tab.Screen
        name="EventsTab"
        component={EventsNavigator}
        options={{
          tabBarButton: props => (
            <CustomTabBarButton
              {...props}
              icon={<CupIcon width={22} height={22} />}
              title="Eventos"
            />
          ),
        }}
      />
      <Tab.Screen
        name="NewsTab"
        component={NewsNavigator}
        options={{
          tabBarButton: props => (
            <CustomTabBarButton
              {...props}
              icon={<MegaphoneIcon width={30} height={30} />}
              title="Artículos"
            />
          ),
        }}
      />
      <Tab.Screen
        name="VideosTab"
        component={VideosNavigator}
        options={{
          tabBarButton: props => (
            <CustomTabBarButton
              {...props}
              icon={<VideoIcon width={24} height={24} />}
              title="Videos"
            />
          ),
        }}
      />
      <Tab.Screen
        name="RankingTab"
        component={RankingNavigator}
        options={{
          tabBarButton: props => (
            <CustomTabBarButton
              {...props}
              icon={<ShieldIcon width={24} height={24} />}
              title="Ranking"
            />
          ),
        }}
      />
      <Tab.Screen
        name="PartnersTab"
        component={PartnersNavigator}
        options={{
          tabBarButton: props => (
            <CustomTabBarButton
              {...props}
              icon={<StarsIcon width={28} height={29} />}
              title="Partners"
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileNavigator}
        options={{
          tabBarButton: props => (
            <CustomTabBarButton
              {...props}
              icon={<ProfileIcon width={24} height={24} />}
              title="Perfil"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
