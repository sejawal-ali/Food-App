import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from './constants/Colors'

const Banner = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={{fontSize: 20}}>Promotions</Text>
      <View style={styles.bannerContainer}>
        <View style={{gap: 15}}>
        <Text style={{fontSize: 15, color: Colors.white}}>Today's Offer</Text>
        <Text style={{fontSize: 20, color: Colors.white, fontWeight: 'bold'}}>Free Box of Fries</Text>
        <Text style={{fontSize: 15, color: Colors.white}}>On all orders above 150$</Text>
        </View>

        <Image source={require('../components/assets/images/fries.png')} style={{width: 130, height: 140}} />



      </View>
    </View>
  )
}

export default Banner

const styles = StyleSheet.create({

    mainContainer: {
        gap: 10
    },


    bannerContainer: {
        backgroundColor: Colors.secondary,
        height: 150,
        borderRadius: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        paddingVertical: 20,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
})