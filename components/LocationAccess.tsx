// LocationAccess.tsx
import React, { useEffect, useState } from 'react';
import { View, Text} from 'react-native';
import * as Location from 'expo-location';
import { LOCATION_TASK_NAME } from '@/lib/locationTasks';
import LottieView from 'lottie-react-native'; 
import { TouchableOpacity } from 'react-native';
import images from '@/constants/images';


const LocationAccess = () => {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        setLoading(false);
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setLoading(false);
    })();
  }, []);


  const refreshLocation = async () => {
    setLoading(true);
    try {
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    } catch (error) {
      setErrorMsg('Failed to fetch location.');
    }
    setLoading(false);
  };

  return (
    <View className="flex-1 items-center justify-center bg-white p-4">
      {loading ? (
        <>
          <LottieView
            source={images.locationAnimation} 
            autoPlay
            loop
            style={{ width: 200, height: 200 }}
          />
          <Text className="text-lg font-semibold mt-6 text-gray-700">
            Fetching your location...
          </Text>
        </>
      ) : errorMsg ? (
        <>
          <Text className="text-red-500 text-center text-base mb-4">
            {errorMsg}
          </Text>
          <TouchableOpacity
            className="bg-blue-500 px-6 py-2 rounded-full"
            onPress={refreshLocation}
          >
            <Text className="text-white font-bold">Retry</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text className="text-lg font-semibold text-gray-700 mb-2">
            Current Location:
          </Text>
          <Text className="text-base text-gray-600 text-center mb-6">
            Latitude: {location?.coords.latitude.toFixed(4)} {'\n'}
            Longitude: {location?.coords.longitude.toFixed(4)}
          </Text>
          <TouchableOpacity
            className="bg-green-500 px-6 py-2 rounded-full"
            onPress={refreshLocation}
          >
            <Text className="text-white font-bold">Refresh Location</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default LocationAccess;
