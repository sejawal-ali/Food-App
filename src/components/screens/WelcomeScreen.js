import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Colors } from '../constants/Colors'
import { useNavigation } from '@react-navigation/native'

const WelcomeScreen = () => {


    const navigation = useNavigation();



  return (
 <LinearGradient style={styles.container} colors={[Colors.primary, Colors.secondary]}>
    <View style={styles.imgContainer}>
        <Image source={require('../assets/images/welcome.png')} style={{width: 270, height: 250}} />
    </View>

    
        <Text style={styles.WelcomeTxt}>Enjoy{'\n'}Your Food</Text>


        <TouchableOpacity onPress={() => navigation.navigate('Tabs')} style={styles.btnWrapper}>
            <Text style={[styles.WelcomeTxt, {fontSize: 20, lineHeight: 30, color: Colors.primary}]}>Get Started</Text>
        </TouchableOpacity>
    
 </LinearGradient>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },

    imgContainer:{
        width: 300,
        height: 300,
        backgroundColor: Colors.white,
        borderRadius: 300,
        justifyContent: 'center',
        alignItems: 'center',
        top: 55
    },

    WelcomeTxt: {
        fontSize: 40,
        color: Colors.white,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 55,
        letterSpacing: 2.5,
       
    },

    btnWrapper: {
        backgroundColor: Colors.white,
        width: 200,
        height: 55,
        padding: 10,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
})