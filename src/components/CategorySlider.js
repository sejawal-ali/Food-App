import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Colors } from './constants/Colors';

const CategorySlider = () => {

    const [selected, setSelected] = useState(0);

    const slider = [
        'All',
        'Burgers',
        'Pizza',
        'Drinks',
        'Fruits',
        'Vegetables',
        'Others',


    ]

    const images = {
        All: require('../components/assets/images/all.png'),
        Burgers: require('../components/assets/images/burger.png'),
        Pizza: require('../components/assets/images/pizza.png'),
        Drinks: require('../components/assets/images/drinks.png'),
        Fruits: require('../components/assets/images/fruits.png'),
        Vegetables: require('../components/assets/images/vegetables.png'),
        Others: require('../components/assets/images/others.png'),
    };



    return (
        <FlatList
        showsHorizontalScrollIndicator={false}
            horizontal
            data={slider}
            renderItem={({ item, index }) =>
                <TouchableOpacity
                onPress={() => setSelected(index)}
                activeOpacity={0.9} style={{ marginRight: 10 }}>
                    <View style={[styles.slider, {backgroundColor: selected == index ? Colors.primary : '#e3e3e3'}]}>
                        <Image style={{ width: 60, height: 60 }} source={images[item]} />
                    </View>
                    <Text style={{marginTop: 5, textAlign: 'center', color: selected === index ? Colors.primary : 'grey'}}>{item}</Text>
                </TouchableOpacity>
            }
        />
    )
}

export default CategorySlider

const styles = StyleSheet.create({
    slider: {
        width: 70,
         height: 80, 
         justifyContent: 'center', 
         alignItems: 'center', 
         borderRadius: 20, 
         
    }
})