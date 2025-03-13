import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { Colors } from '../constants/Colors'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import { item } from '../Context/Context'

const Details = ({route}) => {

  const {myCart, setmyCart} = useContext(item)


  const content = route.params.data;
  const navigation = useNavigation();
  return (
    <ScrollView style={{ backgroundColor: Colors.primary }}>

      <View style={{ height: 400, backgroundColor: Colors.primary, justifyContent: 'center', alignItems: 'center' }}>
        <Image style={{ width: 250, height: 250 }} source={{uri: content.image}} />
      </View>




      <View style={{ height: 500, borderTopLeftRadius: 60, backgroundColor: Colors.white, paddingHorizontal: 30, paddingTop: 40, gap: 20 }}>


        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View style={{ width: 80, height: 35, backgroundColor: Colors.primary, borderRadius: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
            <FontAwesome name='star' size={20} color='gold' />
            <Text style={{ fontSize: 18, color: Colors.white }}>4.5</Text>
          </View>

          <Text style={{ fontSize: 24, fontWeight: 'bold', color: Colors.primary }}>{content.price}$</Text>
        </View>


        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>


          <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'black' }}>{content.name}</Text>



          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "center", gap: 10 }}>
            <AntDesign size={24} color={Colors.primary} name='pluscircle' />
            <Text style={{ fontSize: 19, color: 'black', fontWeight: 'bold' }}>1</Text>
            <AntDesign size={24} color={Colors.primary} name='minuscircle' />
          </View>
        </View>


        <Text style={{ fontSize: 15, fontWeight: '500' }}>Lorem Ipsum dolar sit amet consectetur adipisicing elit, voluptatum tempora ea molestias totam.</Text>

        <Text style={{ color: 'black', fontSize: 20, fontWeight: '500' }}>Add Ons</Text>

        <View style={{ flexDirection: 'row', gap: 20 }}>
          <View>
            <Image style={{ width: 100, height: 100 }} source={require('../../components/assets/images/pizza.png')} />
            <AntDesign style={styles.icon} size={24} color='green' name='pluscircle' />
          </View>

          <View>
            <Image style={{ width: 100, height: 100 }} source={require('../../components/assets/images/others.png')} />
            <AntDesign style={styles.icon} size={24} color='green' name='pluscircle' />
          </View>

          <View>
            <Image style={{ width: 100, height: 100 }} source={require('../../components/assets/images/all.png')} />
            <AntDesign style={styles.icon} size={24} color='green' name='pluscircle' />
          </View>
        </View>

       {
        myCart.includes(content) ? 
        <TouchableOpacity
        onPress={() =>
        {
         

         } }
         style={{backgroundColor: 'grey', height: 55, borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
         <Text style={{fontSize: 17, color: Colors.white, fontWeight: 'bold'}}>Added to CART</Text>
       </TouchableOpacity> : 
       
       <TouchableOpacity
         onPress={() =>
         {
          setmyCart([...myCart, content])
          navigation.navigate('Cart')

          } }
          style={{backgroundColor: Colors.primary, height: 55, borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
          <Text style={{fontSize: 17, color: Colors.white, fontWeight: 'bold'}}>Add to Cart</Text>
        </TouchableOpacity>
       }




     





      </View>
    </ScrollView>
  )
}

export default Details

const styles = StyleSheet.create({

  icon: {
    position: 'absolute',
    bottom: 0,
    right: 0
  },

})