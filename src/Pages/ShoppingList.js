import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, Text, View, Image, SafeAreaView, Pressable } from 'react-native';
import { Items } from "../constants/Data";
import TitleBar from './TitleBar';

const RenderItem = ({ item, navigation }) => {
    return (
        <Pressable onPress={()=> navigation.push('Details',item)}> 
            <View style={{ padding: 10, flexDirection: 'row', marginBottom: 10, borderStyle: 'solid', borderBottomWidth: 1 }}>
                <Image style={{ height: 100, width: 100 }} source={{ uri: item.URL }} />
                <View style={{marginLeft:10}}>
                    <Text style={{ fontSize: 30, 
                         fontFamily:'OpenSans-Bold',
                         color: "#000000" }}>{item.Name}</Text>
                    <Text style={{ fontSize: 15, 
                        fontFamily:'OpenSans-SemiBold', 
                        color: "#000000" }}>Description:{item.Description}</Text>
                    <Text style={{ fontSize: 15,
                         fontFamily:'OpenSans-SemiBold',
                         color: "#000000"
                          }}>Cost: {item.Cost}$</Text>                    
                </View>
            </View>
        </Pressable>
    )
}

const ShoppingList = () => {
    const navigation = useNavigation()
    const home = false
    const cart = true
    return (
        <SafeAreaView >
            <View>
                <TitleBar home={home} cart={cart} />
            </View>
            <View >
                <FlatList data={Items} renderItem={({ item }) => (<RenderItem item={item} navigation={navigation} />)} keyExtractor={(item) => item.Name} ></FlatList>
            </View>
        </SafeAreaView>
    )
}
export default ShoppingList;