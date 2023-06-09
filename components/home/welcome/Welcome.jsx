import {React, useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import { useRouter } from 'expo-router'
import { ScrollView } from "react-native-gesture-handler";
import styles from './welcome.style'
import { icons, SIZES } from '../../../constants'

const shopTypes =["Gold", "Diamond", "Platinum", "Antique"];


const Welcome = () => {
  // const router = useRouter()
  const [activeShopType, setactiveShopType] = useState('Gold')

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Tryan,</Text>
        <Text style={styles.welcomeMessage}>Find your nearest Jewellery</Text>
      </View>


      {/* <ScrollView>
            <View style={{flex: 1, padding:SIZES.medium}}>
           
            <SearchBar
            placeholder="What are you looking for..?"
            onPress={() => alert("onPress")}
            onChangeText={(text) => console.log(text)}
            />
            </View>
        </ScrollView> */}


        <View style={styles.searchContainer}>
              <View style={styles.searchWrapper}>
                <TextInput 
                style={styles.searchInput}
                value=''
                onChange={()=>{}}
                placeholder='What are you looking for..?'
                />
              </View>
            

            <TouchableOpacity style={styles.searchBtn}>
              <Image 
              source={icons.search}
              resizeMode="contain"
              style={styles.searchBtnImage}
              />
            </TouchableOpacity>
          </View>

      <View style={styles.tabsContainer}>
       
        <FlatList
        data={shopTypes}
        renderItem ={({item}) => (
          <TouchableOpacity
          style={styles.tab(activeShopType, item)}
          onPress={() => {
            setactiveShopType(item);
            // router.push(`/search/${item}`)
          }}
          >
            <Text style={styles.tabText(activeShopType, item)}>{item}</Text>
          </TouchableOpacity>
           )}
           keyExtractor={item => item}
           contentContainerStyle ={{columnGap: SIZES.small}}
           horizontal
        />
      </View>

    </View>
  )
}

export default Welcome