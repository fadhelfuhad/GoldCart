import * as React from "react";
import { View, Text, Alert, SafeAreaView, Image } from "react-native";
import SearchBar from "react-native-dynamic-search-bar";
import { Link, Stack, useRouter } from "expo-router";
import { COLORS, SIZES, icons, images } from "../../constants";
import { ScrollView } from "react-native-gesture-handler";
import { Nearbyshops, Popularshops, ScreenHeaderBtn, Welcome } from "../../components";
import { Ionicons } from '@expo/vector-icons';
import { setStatusBarBackgroundColor } from "expo-status-bar";

export default function HomeScreen({navigation}){
    return(
       
        <View style={{flex:1, alignItems:'center', justifyContent:'top'}}>
            
             <Stack.Screen options={{ 
                  headerStyle: {height:100}, 
                  headerShadowVisible: false,
                  headerLeft:()=>(
                  <Ionicons 
                  name="menu" 
                  size={45} 
                  color="black" 
                  style={{marginLeft:10}} 
                  onPress={()=>{alert("clickable")}}/>
                    ),
                  headerRight:()=>(
                    <Image
                    style={{
                        width: 100, 
                        height: 100 , 
                        marginRight:20, 
                        borderRadius:50,
                    }}
                    source={require('../../assets/images/image.jpg')}
                     />
                  ),
                  headerTitle: "",
                  title: "view" }} 
                  /> 
       
           <View style={{padding:20}}>
             <Welcome/>
            <Popularshops/>
            <Nearbyshops/>
        </View>
</View>
   
       
    );
}

