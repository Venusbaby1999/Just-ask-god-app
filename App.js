import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import BibleScreen from './screens/BibleScreen';
import PrayerScreen from './screens/PrayerScreen';
import CommunityScreen from './screens/CommunityScreen';
import ResourcesScreen from './screens/ResourcesScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Bible" component={BibleScreen} />
        <Stack.Screen name="Prayer" component={PrayerScreen} />
        <Stack.Screen name="Community" component={CommunityScreen} />
        <Stack.Screen name="Resources" component={ResourcesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
