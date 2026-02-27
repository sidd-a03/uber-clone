import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import Swiper from "react-native-swiper";
import { useRef, useState } from "react";
import { onboarding } from "@/constants";
import CustomButton from "@/components/CustomButton";

const Welcome = () => {
  const swiperRef = useRef<Swiper>(null);
  const [ index, setIndex ] = useState(0);
  const isLastSlide = index === onboarding.length - 1;

  return (
    <SafeAreaView className={"flex h-full items-center justify-between bg-white"}>
      <TouchableOpacity
        className={"w-full flex justify-end items-end p-5"}
        onPress={() => router.replace("/(auth)/sign-up")}>
        <Text className={"text-black text-md font-JakartaBold"}>Skip</Text>
      </TouchableOpacity>
      <Swiper
        loop={false}
        dot={<View className={"w-[32px] h-[4px] mx-1 bg-[#E2E8F0] rounded-full"}></View>}
        activeDot={<View className={"w-[32px] h-[4px] mx-1 bg-[#0286FF] rounded-full"}></View>}
        ref={swiperRef}
        onIndexChanged={(index) => setIndex(index)}
      >
        {onboarding.map((item) => (
          <View className={"flex items-center justify-center p-5"} key={item.id}>
            <Image className={"w-full h-[300px]"} resizeMode={"contain"} source={item.image} />
            <View className={"flex flex-row items-center justify-center w-full mt-10"}>
              <Text className={"text-black text-3xl font-bold mx-10 text-center"}>
                {item.title}
              </Text>
            </View>
            <Text className={"text-md font-JakartaSemiBold text-center text-[#858585] mx-10 mt-3"}>{item.description}</Text>
          </View>
        ))}
      </Swiper>
      <CustomButton
        onPress={() => isLastSlide
          ? router.replace("/(auth)/sign-up")
          : swiperRef.current?.scrollBy(1)
        }
        title={isLastSlide ? "Get Started" : "Next"}
        className={"w-11/12 mt-10"}
      />
    </SafeAreaView>
  );
};
export default Welcome;
