import { SafeAreaView, StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import Header from '../Header'
import Search from '../Search'
import CategorySlider from '../CategorySlider'
import Banner from '../Banner'
import FoodItems from '../FoodItems'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{
        paddingHorizontal: 25,
        paddingTop: 30,
        gap: 20
      }}>
        <Header />
        <Search />
        <CategorySlider />
        <Banner />
        <FoodItems />
      </SafeAreaView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})