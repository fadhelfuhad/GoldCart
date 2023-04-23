import {React,useState} from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'
import styles from './popularshops.style'
import { COLORS, SIZES } from '../../../constants'
import PopularShopCard from '../../common/cards/popular/PopularShopCard'

const Popularshops = () => {
  // const router = useRouter();
  const isLoading = false;
  const error = false;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.headerTitle}>Popular shops</Text>
      <TouchableOpacity>
        <Text>Show All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
     {isLoading ? (
      <ActivityIndicator size="large" color={COLORS.primary}/>
     ) : error ? (
      <Text>Something went wrong</Text>
     ) : (
      <FlatList
      data={[1,2,3,4,5,6,7,8,9]}
      renderItem={(item)=> (
        <PopularShopCard
        item={item}
        />
      )}
      keyExtractor={item => item?.shop_id}
      contentContainerStyle={{columnGap: SIZES.medium}}
      horizontal
      />
     )}
      </View>
    </View>
  )
}

export default Popularshops