import { View, Text, SafeAreaView, TouchableOpacity, TextInput, Image, Alert, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import { router } from 'expo-router';
import icons from '@/constants/icons';
import images from '@/constants/images';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleGoogleRegister = () => {
    console.log("Google Register");
        router.push('/');
  }

  const handleRegister = () => {
    console.log("Register clicked");
    Alert.alert("Register Successful");
        router.push('/');
  }

  return (
    <SafeAreaView className="flex-1">
      <ImageBackground
        source={images.background}   // Correct usage here
        resizeMode="cover"
        className="flex-1 relative"
      >
        {/* Overlay to reduce background opacity */}
        <View className="absolute inset-0 bg-black opacity-20" />

        {/* Main content */}
        <View className="flex-1">
          <View className="flex flex-row items-center justify-between mt-5 ml-2">
            <TouchableOpacity
              onPress={() => router.back()}
              className="flex flex-row bg-primary-200 rounded-full size-12 items-center justify-center"
            >
              <Image source={icons.backArrow} className="size-6" />
            </TouchableOpacity>
          </View>

          <View className="flex flex-col items-center justify-center mt-14 px-8 gap-4">
            <Text className="text-center font-rubik-medium text-4xl text-white">
              Welcome back! Glad {"\n"}to see you, Again
            </Text>

            <View className="w-full mt-10 space-y-5 gap-6">
              <TextInput
                className="bg-white rounded-xl p-4 text-base"
                onChangeText={text => setEmail(text)}
                value={email}
                placeholder="Enter your email"
                placeholderTextColor="#888"
              />
              <TextInput
                className="bg-white rounded-xl p-4 text-base"
                onChangeText={text => setPassword(text)}
                value={password}
                placeholder="Enter your password"
                secureTextEntry
                placeholderTextColor="#888"
              />

              <TouchableOpacity
                onPress={handleRegister}
                className="bg-primary-300 py-4 rounded-xl mt-4"
              >
                <Text className="text-white text-center text-lg font-rubik-semibold">
                  Register
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={handleGoogleRegister}
                className="bg-white flex flex-row items-center justify-center py-3 rounded-full shadow-lg shadow-zinc-300 mt-4"
              >
                <Image
                  source={icons.google}
                  className="size-6 mr-3"
                  resizeMode="contain"
                />
                <Text className="text-black text-lg font-rubik-medium">
                  Continue with Google
                </Text>
              </TouchableOpacity>
            </View>

            <View className="flex flex-row justify-center items-center mt-8">
              <Text className="text-white">
                Already have an account?
              </Text>
              <TouchableOpacity onPress={() => router.push('/auth/login')}>
                <Text className="text-primary-300 ml-2 font-rubik-bold">
                  Login Now
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default Register;
