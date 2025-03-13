import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'

const Search = () => {
    return (
        <View style={styles.inputContainer}>
            <Feather name="search" size={25} color='black' />
            <TextInput style={{flex: 1, fontSize: 17}} placeholder='Search' />
        </View>
    )
}

export default Search

const styles = StyleSheet.create({

    inputContainer: {
        backgroundColor: '#e3e3e3',
        height: 60, 
        borderRadius: 50,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        paddingHorizontal: 16
    },
})