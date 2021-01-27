import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {  Text, View, Image, Button } from 'react-native';

import TitleBar from './TitleBar';

import { addItem, calculateTotal } from '../../actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        stateItems: state.items,
        total: state.total
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (state) => dispatch(addItem(state)),
        calculateTotal: (value) => dispatch(calculateTotal(value)),

    };
};





const Details = ({ route, calculateTotal, addItem }) => {
    const navigation = useNavigation()

    const item = route.params
    const cart = true
    const home = true
    return (
        <View>
            <TitleBar cart={cart} home={home}></TitleBar>
            <View style={{
                marginLeft: 40,
                marginTop: 10,
                marginRight: 40,
                backgroundColor: "#F1EDEC"
            }}>
                <Text style={{
                    marginBottom: 10,
                    fontSize: 16,
                    fontWeight: 'bold'
                }}>{item.Name}</Text>
                <Image style={{
                    height: 300,
                    width: 300,
                    marginLeft: 10,
                    backgroundColor: "#D3D3D3"
                }}
                    source={{ uri: item.URL }} />
                <Text style={{ fontSize: 30 }}>{item.Cost}$</Text>
                <Text style={{ fontSize: 15, marginBottom: 10 }}>{item.Description}</Text>
                <Button onPress={() => { addItem(item); navigation.navigate('Cart', item) }}
                 title="Add To Cart" />
            </View>

        </View>

    )

}

export default connect(mapStateToProps, mapDispatchToProps)(Details);