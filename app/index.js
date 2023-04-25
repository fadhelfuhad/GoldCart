import * as React from "react";
import { View, ScrollView, SafeAreaView, Pressable, Text } from "react-native";
import { Link, Stack, useRouter } from "expo-router";
import { icons } from "../constants/icons";
import { COLORS } from "../constants";
import {Nearbyshops} from "../components"
import {Popularshops} from "../components"
import {Welcome} from "../components"
import {ScreenHeaderBtn} from "../components/common/header/ScreenHeaderBtn"

import { Header } from "@react-navigation/stack";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';


//Screens
import HomeScreen from "../navigation/screens/HomeScreen";
import ChatScreen from "../navigation/screens/ChatScreen";
import CartScreen from "../navigation/screens/CartScreen";
import ProfileScreen from "../navigation/screens/ProfileScreen";


//Screen names
const homeName = 'home';
const chatName = 'chat';
const cartName = 'cart';
const profileName = 'profile';

const tab = createBottomTabNavigator();

function App(){
  return( 
    
        <SafeAreaView 
        style={{ flex: 1}}
        >
           <Stack.Screen options={{ 
                  headerStyle: {backgroundColor: COLORS.lightWhite}, 
                  headerShadowVisible: false,
                  headerShown:false,
                  headerTitle: "",
                  title: "view" }}

                  /> 
                
                   {/* <HomeScreen/> */}
                   <NavigationContainer independent={true}>
                    <tab.Navigator initialRouteName={homeName} screenOptions={({route})=> ({
                    // headerShown:false, 
                    tabBarIcon: ({focused, color, size}) => {
                      let iconName;
                      let rn = route.name;

            if (rn === homeName){
                iconName = focused? 'home':'home-outline'
            }
            else  if (rn === chatName){
                iconName = focused? 'chatbox':'chatbox-outline'
            }
            else  if (rn === cartName){
                iconName = focused? 'cart':'cart-outline'
            }
            else  if (rn === profileName){
                iconName = focused? 'person':'person-outline'
            }

            return <Ionicons name={iconName} size={size} color={color}/>
        },
    
    })}
    >
        <tab.Screen name={homeName} component={HomeScreen}/>
        <tab.Screen name={chatName} component={ChatScreen}/>
        <tab.Screen name={cartName} component={CartScreen} options={{headerShown:false}}/>
        <tab.Screen name={profileName} component={ProfileScreen}/>

    </tab.Navigator></NavigationContainer>
        </SafeAreaView>
        
  );
}

export default App;