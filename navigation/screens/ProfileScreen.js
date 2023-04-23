import * as react from "react";
import { View, Text, Alert, SafeAreaView } from "react-native";

export default function ProfileScreen({navigation}){
    return(
        <SafeAreaView style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text onPress={navigation.navigate('profile')}
            style={{fontSize:26, fontWeight:'bold'}}>Profile Screen</Text>
        </SafeAreaView>
       
    );
}