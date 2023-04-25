import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import styles from './popularshopcard.style'

const PopularShopCard = ({item, selectedShop, handleCardPress}) => {
  return (
    <TouchableOpacity
    
    style={styles.container(selectedShop, item)}
    onPress={() => handleCardPress(item)}
    >
        <TouchableOpacity style={styles.logoContainer(selectedShop, item)}>
        <Image
        source={{uri: item.employerlogo}}
        resizeMode="contain"
        style={styles.logoImage}
        />
        </TouchableOpacity>
        <Text style={styles.companyName} numberOfLines={1}>{item.employer_name}</Text>
    </TouchableOpacity>
  )
}

export default PopularShopCard