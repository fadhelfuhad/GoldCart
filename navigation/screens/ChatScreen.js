import * as React from "react";
import { View, Text, Alert } from "react-native";

export default function ChatScreen({navigation}){
    return(
        <>
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}><Text 
        onPress={navigation.navigate('chat')} 
        style={{fontSize:26, fontWeight:'bold'}}>Chat Screen</Text></View>
        </>
        
    );
}