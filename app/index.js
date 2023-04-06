import { View, ScrollView, SafeAreaView } from "react-native";
import { Link, Stack, useRouter } from "expo-router";
import { icons } from "../constants/icons";
import { COLORS } from "../constants";
import {Nearbyshops} from "../components"
import {Popularshops} from "../components"
import {Welcome} from "../components"
import {ScreenHeaderBtn} from "../components/common/header/ScreenHeaderBtn"

export default function Home() {

  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor:COLORS.lightWhite, justifyContent: "center", alignItems: "center" }}>

      <Stack.Screen options={{ 
        headerStyle: {backgroundColor: COLORS.lightWhite}, 
        headerShadowVisible: false,
        // headerLeft: ()=> (
        // <ScreenHeaderBtn iconURL={icons.menu} dimension="60%"/>
        // ),
        // headerRight: ()=> (
        //   <ScreenHeaderBtn iconURL={icons.profile} dimension="100%"/>
        //   ),
          headerTitle: "",
        title: "view" }} />

      <Link href="/details"> Go to home </Link>
    </SafeAreaView>
  );
}