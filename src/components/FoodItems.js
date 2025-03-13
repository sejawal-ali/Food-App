import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Colors } from './constants/Colors'
import { useNavigation } from '@react-navigation/native'

const FoodItems = () => {

    const navigation = useNavigation();

    const food = [
        {
            id: 1,
            name: 'Zinger Burger',
            price: 50,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBWYGBirAP_hH-JAY4xwbc578mZgI0RbPKOw&s',
        },

        {
            id: 2,
            name: 'Pizza Fries',
            price: 75,
            image: 'https://lh6.googleusercontent.com/-WDnOWZ6GcYU/UUaR7uE9cVI/AAAAAAADhig/8FEwXdlkzYQ/s640/pizza-fries-9.jpg'
        },

        {
            id: 3,
            name: 'Shawarma',
            price: 35,
            image: 'https://media.istockphoto.com/id/1421688556/photo/beef-shawarma-on-a-dark-background-shawarma-with-beef-in-pita-bread.jpg?s=612x612&w=0&k=20&c=wAhnmKwTKhukglXVPQBR2FI0w4h07mwpgz0QSTY99e0='
        },

        {
            id: 4,
            name: 'Hot Dog',
            price: 42,
            image: 'https://www.allrecipes.com/thmb/RHT1NQTdb6mfoFfcAzBbmzpKhRA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/9391099-8d83a9b8eb584cae87c2883bb5493f20.jpg'
        },

        {
            id: 5,
            name: 'French Fries',
            price: 10,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRThutnz5W3eaYNX24NgJ35bPshgTimxEoOvg&s'
        },
    ]




  return (
    <View style={{gap: 15}}>
      <Text style={{fontSize: 20}}>Popular</Text>
      <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={food} 
      renderItem={({item, index}) =>(
        <TouchableOpacity onPress={() => navigation.navigate('Details', {data: item}) } style={styles.itemContainer}>
           <Image source={{uri: item.image}} style={{width: 85, height: 85, borderRadius: 42, alignSelf: 'center'}} />
           <Text style={{fontSize: 18, textAlign: 'center'}}>{item.name}</Text>

           <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{color: Colors.primary, fontSize: 17, fontWeight: 'bold'}}>{item.price}$</Text>
            <Ionicons name='add-circle-sharp' size={28} color='green' />
           </View>



        </TouchableOpacity>
      )}
      />
    </View>
  )
}

export default FoodItems

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: '#e3e3e3',
        width: 150,
        height: 200,
        marginRight: 20,
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 20,
        gap: 10
        
    },
})