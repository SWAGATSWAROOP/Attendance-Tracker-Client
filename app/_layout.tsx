import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import "./global.css"; 
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import * as Location from 'expo-location';
import { LOCATION_TASK_NAME } from '@/lib/locationTasks';
export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Rubik-Bold": require("../assets/fonts/Rubik-Bold.ttf"),
    "Rubik-ExtraBold": require("../assets/fonts/Rubik-ExtraBold.ttf"),
    "Rubik-Light": require("../assets/fonts/Rubik-Light.ttf"),
    "Rubik-Medium": require("../assets/fonts/Rubik-Medium.ttf"),
    "Rubik-Regular": require("../assets/fonts/Rubik-Regular.ttf"),
    "Rubik-SemiBold": require("../assets/fonts/Rubik-SemiBold.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded]);
  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      const { status: backgroundStatus } = await Location.requestBackgroundPermissionsAsync();

      if (status !== 'granted' || backgroundStatus !== 'granted') {
        console.log('Permission not granted');
        return;
      }
      
      console.log('Permission status:', status, backgroundStatus);
      await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
        accuracy: Location.Accuracy.Highest,
        timeInterval: 10000, // 10 seconds
        distanceInterval: 50, // 50 meters
        showsBackgroundLocationIndicator: true, // for iOS
        foregroundService: {
          notificationTitle: 'Location Service',
          notificationBody: 'Tracking your location in background...',
          notificationColor: '#FF0000',
        },
      });
    })();
  }, []);

  return  <Stack screenOptions={{headerShown : false}} />;
}
