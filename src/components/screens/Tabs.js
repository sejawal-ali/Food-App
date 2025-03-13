import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import Searhces from './Searhces';
import Cart from './Cart';
import Profile from './Profile';
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Colors } from '../constants/Colors';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarShowLabel: false,
            headerShown: false
        }}>
            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarIcon: ({ focused }) => (
                    focused ?
                        (
                            <View style={{backgroundColor: Colors.primary, width: 40, height: 40  , borderRadius: 30, justifyContent: 'center', alignItems: 'center'}}>
                                <Entypo name='home' size={25} color='white' />
                            </View>


                        ) : (
                            <AntDesign name='home' size={25} color='grey' />
                        )
                )
            }} />
            <Tab.Screen name="Search" component={Searhces} options={{
                tabBarIcon: ({ focused }) => (
                    focused ?
                        (

                            <View style={{backgroundColor: Colors.primary, width: 40, height: 40  , borderRadius: 30, justifyContent: 'center', alignItems: 'center'}}>
                           <AntDesign name='search1' size={25} color='white' />
                        </View>
                        
                    
                    
                    ) : (
                            <AntDesign name='search1' size={25} color='grey' />
                        )
                )
            }} />
            <Tab.Screen name="Cart" component={Cart} options={{
                tabBarIcon: ({ focused }) => (
                    focused ?
                        (
                            <View style={{backgroundColor: Colors.primary, width: 40, height: 40  , borderRadius: 30, justifyContent: 'center', alignItems: 'center'}}>
                           <Entypo name='shopping-cart' size={25} color='white' />
                         </View>
                            
                        
                    )
                        
                        
                        : (
                            <Feather name='shopping-cart' size={25} color='grey' />
                        )
                )
            }} />
            <Tab.Screen name="Profile" component={Profile} options={{
                tabBarIcon: ({ focused }) => (
                    focused ?
                        (
                            <View style={{backgroundColor: Colors.primary, width: 40, height: 40  , borderRadius: 30, justifyContent: 'center', alignItems: 'center'}}>
                           <Ionicons name='person' size={25} color='white' />
                          </View>
                        
                        
                    
                    
                    ) : (
                            <Ionicons name='person-outline' size={25} color='grey' />
                        )
                )
            }} />

        </Tab.Navigator>
    )
}

export default Tabs

const styles = StyleSheet.create({})