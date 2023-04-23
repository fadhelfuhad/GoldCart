import * as React from "react";
import { View, Text, Alert, SafeAreaView, Image } from "react-native";
import SearchBar from "react-native-dynamic-search-bar";
import { Link, Stack, useRouter } from "expo-router";
import { COLORS, SIZES, icons, images } from "../../constants";
import { ScrollView } from "react-native-gesture-handler";
import { Nearbyshops, Popularshops, ScreenHeaderBtn, Welcome } from "../../components";
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({navigation}){
    return(
       
        <SafeAreaView style={{flex:1, alignItems:'center', justifyContent:'top'}}>
            
             <Stack.Screen options={{ 
                  headerStyle: {height:80}, 
                  headerShadowVisible: false,
                  headerLeft:()=>(
                  <Ionicons 
                  name="menu" 
                  size={34} 
                  color="black" 
                  style={{marginLeft:20}} 
                  onPress={()=>{alert("clickable")}}/>
                    ),
                  headerRight:()=>(
                    <Image
                    style={{
                        width: 80, 
                        height: 80 , 
                        marginRight:20, 
                        borderRadius:50,
                    }}
                    source={require('../../assets/images/image.jpg')}
                     />
                  ),
                  headerTitle: "",
                  title: "view" }} 
                  /> 


            <Welcome/>
            <Popularshops/>
            <Nearbyshops/>
       
      
</SafeAreaView>
        
       
    );
}

