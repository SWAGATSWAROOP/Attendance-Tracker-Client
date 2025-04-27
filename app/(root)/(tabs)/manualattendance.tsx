import LocationAccess from "@/components/LocationAccess";
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useState, useEffect } from 'react';

import * as Location from 'expo-location';
import LottieView from 'lottie-react-native';
import { router } from "expo-router";
import icons from "@/constants/icons";
import images from "@/constants/images";
export default function ManualAttendance() {
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
        <SafeAreaView className="flex-1 bg-white">
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerClassName="pb-32 px-7"
                bounces={false}>
                <View className="w-full mt-12">
                    <Image
                        source={images.manualAttendance}
                        className="w-full h-80"
                        resizeMode="contain"
                    />
                </View>
                <View className="absolute top-6 right-6 z-10">
                    <TouchableOpacity onPress={() => router.push('/feedback-form')}>
                        <Image source={icons.chat} className="w-8 h-8" />
                    </TouchableOpacity>
                </View>

                <View className="flex-1 justify-center items-center px-6">
                    <Text className="text-3xl font-rubik-semibold text-primary-500 mb-10 text-center">
                        Manual Attendance
                    </Text>

                    <TouchableOpacity
                        onPress={refreshLocation}
                        className="bg-primary-300 py-4 px-8 rounded-2xl shadow-lg shadow-primary-200"
                    >
                        <Text className="text-white text-lg font-rubik-semibold">
                            Start Time
                        </Text>
                    </TouchableOpacity>
                    <Text className="text-base text-gray-600 text-center mb-6">
                        Latitude: {location?.coords.latitude.toFixed(4)} {'\n'}
                        Longitude: {location?.coords.longitude.toFixed(4)}
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
