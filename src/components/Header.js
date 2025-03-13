import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Menu</Text>
      <Image source={require('../components/assets/images/welcome.png')} style={styles.HeaderImg} />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({

  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },


  header: {
    fontSize: 35
  },

  HeaderImg: {
    width: 50,
    height: 50
  },
})