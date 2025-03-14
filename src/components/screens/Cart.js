import { SafeAreaView, StyleSheet, Text, View, FlatList, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { Colors } from '../constants/Colors'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import { item } from '../Context/Context'

const Cart = () => {

  let totalAmount = 0;

   const {myCart, setmyCart} = useContext(item)

  const navigation = useNavigation();


  for (const i of myCart) {
    totalAmount = totalAmount+i.price;
  }




  return (
    <SafeAreaView style={{ paddingTop: 30, paddingHorizontal: 25, gap: 20, backgroundColor: 'white', flex: 1 }}>
      <Text style={{ fontSize: 22, fontWeight: '500' }}>{myCart.length} items in a Cart</Text>
      <View style={{height: 300}}>
      <FlatList
        data={myCart}
        renderItem={({ item, index }) => {
          return <View style={{
            height: 130,
            borderRadius: 20,
            marginBottom: 15,
            flexDirection: 'row',
            gap: 5,
            paddingHorizontal: 10
          }}>
            <View style={{ backgroundColor: '#F0EDF8', width: '35%', justifyContent: 'center', alignItems: 'center', borderRadius: 30 }}>
              <Image style={{ width: 90, height: 90, borderRadius: 45 }} source={{uri: item.image}} />
            </View>

            <View style={{ paddingHorizontal: 15, paddingVertical: 16, flex: 1, justifyContent: 'space-between' }}>


              <View style={{gap: 7}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', }}>
                <Text style={{ fontSize: 17, fontWeight: '500' }}>{item.name}</Text>
                <AntDesign 
                onPress={() => {
                  setmyCart(myCart.filter(val => (
                    val.name != item.name
                  )))
                }}
                name='closecircleo' size={25} color='black' />
                </View>
                <Text style={{ color: '#98942C', fontSize: 18, fontWeight: '600' }}>{item.price}$</Text>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                <AntDesign size={22} color={Colors.primary} name='pluscircle' />
                <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}>1</Text>
                <AntDesign size={22} color={Colors.primary} name='minuscircle' />
              </View>
            </View>
          </View>
        }}
      />
      </View>
     
      <Text style={{ fontSize: 22, fontWeight: '500' }} >Order Instructions</Text>
      <View style={{height: 90, paddingHorizontal: 10, paddingVertical: 10, borderRadius: 20, borderWidth: 2, borderColor: 'black'}}>
        <TextInput style={{ height: 55, fontSize: 18 }} />
      </View>


    <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10}}>
      <Text style={{ fontSize: 22, fontWeight: '500' }} >Total:</Text>
      <Text style={{ color: '#98942C', fontSize: 17, fontWeight: '600' }}>{totalAmount}$</Text>
    </View>



    <TouchableOpacity
    onPress={() => navigation.navigate('OrderPlaced')}
    style={{backgroundColor: Colors.primary, height: 60, borderRadius: 20, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color:Colors.white, fontSize: 20, fontWeight: '800'}}>CheckOut</Text>
    </TouchableOpacity>

    <Text onPress={() => navigation.navigate('Home') } style={{textAlign: 'center', fontSize: 19, fontWeight: '700'}}>Back to Menu</Text>
    </SafeAreaView>
  )
}

export default Cart

const styles = StyleSheet.create({})