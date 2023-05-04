import * as react from "react";
import { Link, Stack, useRouter } from "expo-router";
import { View, Text, Alert, Image, ScrollView, Button, StyleSheet } from "react-native";
import { COLORS } from "../../constants";

export default function ProfileScreen({navigation}){
    return (
        <ScrollView style={{flex: 1}} >
             <Stack.Screen options={{ 
                  headerStyle: {height:30}, 
                  headerShadowVisible: false,
                //   headerShown:false,
                  headerTitle: "",
                  title: "view" }}
                  /> 
           
            <View style={styles.profileImageContainer}>
                <View style={{height: 130, backgroundColor :'#e6c200', width: '100%', borderRadius: 8}}>
                    <Text>&nbsp;</Text>
                </View>
                <View style={{marginTop: -80}}>
                    <Image source={require('../../assets/images/image.jpg')} style={styles.profileImage} />
                </View>
                <View style={{padding: 10}}>
                    <Text style={styles.profileText}>Tryan Lee Cronning</Text>
                </View>
            </View>
            <View style={{padding: 2}}>

            </View>
            <InfoField title={"Email"} info={"tryanleecronning@gmail.com"} />
            <InfoField title={"Phone"} info={"+973 36250240"} />
            <InfoField title={"Address"} info={"Manama, Bahrain"} />
            <InfoField title={"CPR Number"} info={"970507298"} />
            <InfoField title={"Nationality"} info={"South African"} />
            <InfoField title={"Passport Number"} info={"JF2345R"} />
            <InfoField title={"Billing Address"} info={"Flat 28, Bldg 109, Road 1234, Block 309, Manama, Kingdom of Bahrain"} />
            <InfoField title={"Postal Address"} info={"2470"} />



            <View style={{paddingTop: 40 ,position: 'relative', alignItems: 'center', bottom:Platform.OS ==="android" ? 20 : 20, width: '100%'}}>
           
                <Button title="Edit Profile"></Button> 
                <Button title="Change Password"></Button>
             
            </View>
          
        </ScrollView>
    )
}
const InfoField = ({title, info}) => {
    return(
        <View style={styles.detailContainer}>
            <Text style={{color: "#939596", fontSize: 13}}>{title}</Text>
            <Text style={{fontSize: 15}}>{info}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    headerImage : {
        width: '100%',
        height: '40%',
    },
    profileImageContainer: {
        flexDirection: 'column',
        width: '94%',
        marginLeft: '3%',
        height: 300,
        alignItems: 'center',
        // marginTop: 40, 
        backgroundColor: '#fafad2', 
        // paddingHorizontal: 10,
        borderRadius: 8,
        elevation: 4

    },
    profileImage : {
        width: 150,
        height: 150,
        borderRadius: 80,
    },
    profileText : {
        marginTop: 6,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign:'center'
    },
    detailContainer : {
        paddingHorizontal: 20,
        paddingVertical: 10, 
        backgroundColor: 'white',
         width: '94%', 
         marginLeft: '3%', 
         borderRadius: 8, 
         marginTop: 5,
         elevation: 2
    },

})