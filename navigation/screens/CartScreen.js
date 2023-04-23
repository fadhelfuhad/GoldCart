import * as React from "react";
import { View, Text, Alert } from "react-native";

export default function CartScreen({navigation}){
    return(
        <>
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}><Text 
        onPress={navigation.navigate('cart')}
        style={{fontSize:26, fontWeight:'bold'}}>Cart Screen</Text></View>
        </>
       
    );
}