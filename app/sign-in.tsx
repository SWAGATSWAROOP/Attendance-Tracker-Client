import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'; 
import images from '@/constants/images';
import icons from '@/constants/icons'; 
import {Redirect} from 'expo-router';
const SignIn = () => {
    const handleLogin = async()=>{
        console.log("Login clicked");
    }
    return (
        <SafeAreaView className='bg-white h-full'>
            <ScrollView contentContainerClassName='h-full'>
                <Image source={images.home} className="w-full h-4/6" resizeMode="contain" />
                <View className='px-10'>
                    <Text className='text-base text-center uppercase font-rubik text-black-700'>Welcome to Attendance Tracker</Text>
                    <Text className='text-3xl font-rubik-bold text-black-300 text-center mt-2'>Let's mark your Attendance{"\n"}
                        <Text className='text-primary-300'>automatically</Text>
                    </Text>
                    <Text className='text-lg font-rubik text-black-200 text-center mt-12'>
                        Login to Attendance Tracker with Google
                    </Text>
                    <TouchableOpacity onPress ={handleLogin} className='bg-white shadow-md shadow-zinc-300 rounded-full w-full py-2 mt-5'>
                        <View className='flex flex-row item-center justify-center'>
                        <Image source={icons.google}
                        className='size-6 mr-2'
                        resizeMode="contain"
                        />
                        <Text className='text-lg font-rubik-medium text-black-300'>Continue with Google</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default SignIn;