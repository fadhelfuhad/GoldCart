import * as React from "react";
import Icon from 'react-native-ionicons'
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';


//Screens
import HomeScreen from "./screens/HomeScreen";
import ChatScreen from "./screens/ChatScreen";
import CartScreen from "./screens/CartScreen";
import ProfileScreen from "./screens/ProfileScreen";


//Screen names
const homeName = 'home';
const chatName = 'chat';
const cartName = 'cart';
const profileName = 'profile';

const tab = createBottomTabNavigator();


export default function MainContainer()
{
    
return(

  <NavigationContainer independent={true}>
    <tab.Navigator
    initialRouteName={homeName}
    screenOptions={({route})=> ({
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
        <tab.Screen name={cartName} component={CartScreen}/>
        <tab.Screen name={profileName} component={ProfileScreen}/>

    </tab.Navigator>
  </NavigationContainer>
  
);
}