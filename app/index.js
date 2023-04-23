import * as React from "react";
import { View, ScrollView, SafeAreaView, Pressable, Text } from "react-native";
import { Link, Stack, useRouter } from "expo-router";
import { icons } from "../constants/icons";
import { COLORS } from "../constants";
import {Nearbyshops} from "../components"
import {Popularshops} from "../components"
import {Welcome} from "../components"
import {ScreenHeaderBtn} from "../components/common/header/ScreenHeaderBtn"

import MainContainer from "../navigation/MainContainer";
import { Header } from "@react-navigation/stack";

// export default function App() {

//   const router = useRouter();
//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor:COLORS.lightWhite, justifyContent: "center", alignItems: "center" }}>
   
//        <Stack.Screen options={{ 
//         headerStyle: {backgroundColor: COLORS.lightWhite}, 
//         headerShadowVisible: false,
//         // headerLeft: ()=> (
//         // <ScreenHeaderBtn iconURL={icons.menu} dimension="60%"/>
//         // ),
//         // headerRight: ()=> (
//         //   <ScreenHeaderBtn iconURL={icons.profile} dimension="100%"/>
//         //   ),
//           headerTitle: "",
//         title: "view" }} /> 

//       <Link href="/details"> Go to Home </Link>
    
      

//     </SafeAreaView>
//   );
// }

function App(){
  return( 
    
        <SafeAreaView style={{ flex: 1}}>
           <Stack.Screen options={{ 
                  headerStyle: {backgroundColor: COLORS.lightWhite}, 
                  headerShadowVisible: false,
                  headerTitle: "",
                  title: "view" }} /> 
                   <MainContainer/>
        </SafeAreaView>
        
  );
}

export default App;