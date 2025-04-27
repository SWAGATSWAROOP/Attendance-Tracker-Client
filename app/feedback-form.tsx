import icons from '@/constants/icons';
import images from '@/constants/images';
import { router } from 'expo-router';
import { useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View, Alert, KeyboardAvoidingView, Platform, Image, ScrollView } from 'react-native';

const Feedback = () => {
    const [text, setText] = useState('');

    const handleSubmit = () => {
        if (text.trim().length === 0) {
            Alert.alert('Empty Feedback', 'Please write something before submitting.');
            return;
        }
        console.log('Feedback submitted:', text);
        Alert.alert('Thank you!', 'Your feedback has been submitted.');
        setText('');
    };

    return (
        <SafeAreaView className="flex-1 bg-white">
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                className="flex-1"
            >
                <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="p-6">
                    <View className="flex flex-row items-center justify-between mt-5 ml-2">
                        <TouchableOpacity
                            onPress={() => router.back()}
                            className="flex flex-row bg-primary-200 rounded-full size-12 items-center justify-center"
                        >
                            <Image source={icons.backArrow} className="size-6" />
                        </TouchableOpacity>
                    </View>
                    <View className="items-center">
                        <Image
                            source={images.feedback}
                            className="w-full h-60"
                            resizeMode="contain"
                        />
                        <Text className="text-4xl font-rubik-bold text-center text-primary-500 mt-5">
                            Share your Feedback
                        </Text>
                        <Text className="text-lg text-center font-rubik-regular text-gray-500 mt-2 px-4">
                            We would love to hear your thoughts and improve your experience!
                        </Text>
                    </View>

                    {/* Input Section */}
                    <View className="mt-10">
                        <TextInput
                            className="border-2 border-primary-300 rounded-2xl p-4 text-base text-gray-700 h-56 bg-gray-50 font-rubik"
                            placeholder="Write your feedback here..."
                            placeholderTextColor="#999"
                            multiline
                            value={text}
                            onChangeText={setText}
                            textAlignVertical="top"
                        />

                        <TouchableOpacity
                            onPress={handleSubmit}
                            className="mt-6 bg-primary-300 py-4 rounded-2xl items-center shadow-lg shadow-primary-200"
                        >
                            <Text className="text-white text-lg font-rubik-semibold">Submit Feedback</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default Feedback;
