import { useAuth } from "@clerk/clerk-expo";
import "./global.css";
import { Redirect } from "expo-router";

export default function App() {

  const { isSignedIn } = useAuth()

  if (isSignedIn) {
    return <Redirect href={'/(root)/(tabs)/home'} />
  }
  
  return <Redirect href={"/(auth)/welcome"} />
}
