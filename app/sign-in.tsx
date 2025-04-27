import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '@/constants/images';
import icons from '@/constants/icons';
import { Redirect, router } from 'expo-router';
const SignIn = () => {
  const handleGoogleLogin = async () => {
    console.log("Google Login clicked");
    router.push('/');
  }
  return (
    <SafeAreaView className='bg-white h-full'>
      <ScrollView contentContainerClassName='h-full'>
        <Image source={images.home} className="w-full h-4/6" resizeMode="contain" />
        <View className='px-10'>
          <Text className='text-base text-center uppercase font-rubik text-black-700'>Welcome to Attendance Tracker</Text>
          <Text className='text-3xl font-rubik-bold text-black-300 text-center mt-2'>Mark your Attendance{"\n"}
            <Text className='text-primary-300'>automatically</Text>
          </Text>


          <TouchableOpacity
            className='bg-primary-300 py-3 px-6 rounded-2xl mt-4'
            onPress={() => router.push('/auth/login')}
          >
            <Text className='text-lg font-rubik-semibold text-white text-center'>
              Login
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className='bg-primary-300 py-3 px-6 rounded-2xl mt-4'
            onPress={() => router.push('/auth/register')}
          >
            <Text className='text-lg font-rubik-semibold text-white text-center'>
              Register
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleGoogleLogin} className='bg-white shadow-lg shadow-zinc-300 rounded-full w-full py-2 mt-6'>
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