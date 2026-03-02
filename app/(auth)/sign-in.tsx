import {
  Text,
  ScrollView,
  View,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { icons, images } from "@/constants";
import InputField from "@/components/InputField";
import { useState } from "react";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";
import OAuth from "@/components/OAuth";

const SignIn = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onSignInPress = async () => {};

  return (
    <KeyboardAvoidingView
      className="flex-1"
      behavior={Platform.OS === "ios" ? "padding" : "padding"}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="bg-white flex-1"
        keyboardShouldPersistTaps="handled"
      >
        <View className="bg-white">
          <View className="relative w-full h-[220px]">
            <Image source={images.signUpCar} className="z-0 w-full h-[220px]" />
            <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-2 left-5">
              Welcome Back! 👋
            </Text>
          </View>
          <View className="p-5">
            <InputField
              label="Email"
              placeholder="Enter email"
              icon={icons.email}
              value={form.email}
              onChangeText={(value) => setForm({ ...form, email: value })}
            />

            <InputField
              label="Password"
              placeholder="Enter password"
              icon={icons.lock}
              secureTextEntry={true}
              textContentType="password"
              value={form.password}
              onChangeText={(value) => setForm({ ...form, password: value })}
            />
            <CustomButton
              title="Sign In"
              onPress={onSignInPress}
              className="mt-6"
            />

            <OAuth />

            <Link
              href="/sign-up"
              className="text-lg text-center text-general-200 mt-10"
            >
              Don&apos;t have an account?{" "}
              <Text className="text-primary-500">Sign Up</Text>
            </Link>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default SignIn;
