import * as react from "react";
import { View, Text, Header, Alert} from "react-native";
import { Stack} from "expo-router";
// import {styles} from './styles';
import { useTheme } from '@react-navigation/native';
import { ImageBackground, SafeAreaView, ScrollView } from 'react-native';

export default function ChatScreen({navigation})
{
const {colors} = useTheme();
return(
    <SafeAreaView >
             {/* <Stack.Screen options={{ 
                  headerStyle: {height:30}, 
                  headerShadowVisible: false,
                //   headerShown:false,
                  headerTitle: "",
                  title: "view" }}
                  /> 
        <ScrollView showsVerticalScrollIndicator={false}>
            <ImageBackground source={require('../../assets/images/image.jpg')}
            >
                <Header white title1={'SHOPS'}/>
                <View >
                    <Text title1 color={colors.white}>
                        Gold
                    </Text> 
                    <Text price color={colors.white}>
                        $45
                    </Text> 
                </View>
            </ImageBackground>
        </ScrollView> */}
    </SafeAreaView>
)
}