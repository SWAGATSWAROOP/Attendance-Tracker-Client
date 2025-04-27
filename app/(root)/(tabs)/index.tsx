import LocationAccess from "@/components/LocationAccess";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { router } from "expo-router";
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-32 px-7"
        bounces={false}>

        <View className="w-full mt-12">
          <Image
            source={images.location}
            className="w-full h-80"
            resizeMode="contain"
          />
        </View>
        <LocationAccess />
        <View className="absolute top-6 right-6 z-10">
          <TouchableOpacity onPress={() => router.push('/feedback-form')}>
            <Image source={icons.chat} className="w-8 h-8" />
          </TouchableOpacity>
        </View>

        <View className="p-4 mt-6">
          <Text className="text-xl font-rubik-semibold text-center text-gray-800">
            Welcome to the App!
          </Text>
          <Text className="text-center text-gray-500 mt-2 font-rubik">
            Your location is being tracked for better service.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
