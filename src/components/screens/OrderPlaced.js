import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Colors } from '../constants/Colors'
import { useNavigation } from '@react-navigation/native'


const OrderPlaced = () => {

    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Home')
        }, 3000);
    },[])



  return (
    <View style={styles.container}>
        <AntDesign size={65} color={Colors.white} name='checkcircle' />
      <Text style={{fontSize: 25, fontWeight: 'bold', textAlign: 'center', color: Colors.white, lineHeight: 40}}>Hurray! Your Order Placed Successfully</Text>
    </View>
  )
}

export default OrderPlaced

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20, 
        backgroundColor: Colors.primary
    },
})