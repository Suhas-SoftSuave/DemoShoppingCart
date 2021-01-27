import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { useEffect } from 'react';
import {  Text, View, Image, Button,  Picker, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import { addItem,  delItem, setQty } from '../../actions';
import TitleBar from './TitleBar';
import { SwipeListView } from 'react-native-swipe-list-view';

const RenderItem = ({ item, onValueChangeSet }) => {
    return (
        <View style={{ backgroundColor: "#F1EDEC", marginBottom: 10 }}>
            {item &&
                <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                    <Image style={{ height: 100, width: 100, margin: 10, backgroundColor: "#D3D3D3" }} source={{ uri: item?.URL }} />
                    <View >
                        <Text style={{ marginBottom: 5, marginTop: 10, fontSize: 16, fontWeight: 'bold' }}>{item?.Name}</Text>
                        <Text style={{ fontSize: 15 }}>{item?.Description}</Text>


                        <View style={{ minWidth: 290, maxWidth: 290, flexDirection: "row", justifyContent: 'space-between',paddingRight:10 }}>
                            <Text style={{ fontSize: 30 }}>{item?.Cost}$</Text>
                            <View style={{ borderStyle: 'solid', borderWidth: 1, borderColor: 'black', height: 40 }}>
                                <Picker

                                    selectedValue={item.qty}
                                    style={{ marginLeft: 5, height: 40, width: 100 ,}}
                                    onValueChange={(itemValue, itemIndex) => onValueChangeSet(itemValue, itemIndex, item)}
                                >
                                    <Picker.Item label="1" value={1} />
                                    <Picker.Item label="2" value={2} />
                                    <Picker.Item label="3" value={3} />
                                    <Picker.Item label="4" value={4} />
                                    <Picker.Item label="5" value={5} />
                                    <Picker.Item label="6" value={6} />
                                </Picker>
                            </View>
                        </View>

                    </View>

                </View>

            }
        </View>
    )
}
const Cart = ({  stateItems,  setQty, deleteItem }) => {
    const [totalone, setTotalOne] = useState(0)
    const navigation = useNavigation()

    useEffect(() => {
        let total = 0
        for (let i = 0; i < stateItems?.length; i++) {
            total = total + (stateItems[i]?.Cost * stateItems[i]?.qty)
        }
        setTotalOne(total)
    }, [stateItems])

   
    const onValueChangeSet = (value, index, item) => {
        setQty(value, item.URL)
    }
    const cart = false
    const home = true

    return (
        <View style={{ flex: 1, }}>
            <TitleBar home={home} cart={cart}></TitleBar>
            <View style={{ maxHeight: 500, minHeight: 500 }}>
                <SwipeListView
                    data={stateItems}
                    renderItem={({ item }) => (<RenderItem item={item} onValueChangeSet={onValueChangeSet} />)
                    }
                    renderHiddenItem={(data) => (
                        <View style={{
                            flex: 1,
                            flexDirection: "row",
                            justifyContent: 'flex-end',
                            backgroundColor: 'red',
                            marginBottom: 10
                        }} >
                            <TouchableOpacity
                                onPress={() => deleteItem(data.index)} >
                                <Text style={{
                                    marginTop: 50,
                                    marginRight: 10,
                                    fontWeight: 'bold',
                                    fontSize: 20
                                }}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                    rightOpenValue={-75}
                    keyExtractor={(item) => item.URL}
                />
            </View>
            <View style={{
                borderStyle: 'solid',
                borderColor: 'black',
                borderTopWidth: 1,
                height: 160,
                flexDirection: 'row-reverse',
                marginTop: 10
            }}>
                <Text style={{
                    fontSize: 20,
                    paddingRight: 10,
                    paddingTop: 5
                }}>TOTAL : {totalone}$</Text>
            </View>
            <View style={{ paddingRight: 10, paddingLeft: 10 }}>
                <Button title='Check out' onPress={() => navigation.navigate('Home')}></Button>
            </View>
        </View>
    )
}
const mapStateToProps = (state) => {
    return {
        stateItems: state.items,
        qty: state.items[state?.items?.length - 1]?.qty
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (state) => dispatch(addItem(state)),

        setQty: (value, index) => dispatch(setQty(value, index)),
        deleteItem: (url) => dispatch(delItem(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
