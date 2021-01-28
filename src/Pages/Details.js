import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {  Text, View, Image, Button, Modal } from 'react-native';
import TitleBar from './TitleBar';
import { addItem, calculateTotal } from '../../actions';
import { connect } from 'react-redux';






const Details = ({ route, calculateTotal, addItem }) => {
    const [modal,setModal]=useState(false)
    const navigation = useNavigation()

    const item = route.params
    const cart = true
    const home = true
    return (
        <View>
            <View style={{justifyContent:'center',alignItems:'center'}}>
                <Modal
                    animationType="fade"
                    visible={modal}  
                    transparent={true}  
                >
                    <View style={{height:100,width:300,
                        backgroundColor:'white',
                        borderRadius:10,
                        justifyContent:'center',
                        alignContent:'center',
                        shadowColor: "#000",
                        shadowOffset: {
                          width: 0,
                          height: 2
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation:5,
                        marginTop:200,
                        marginLeft:70
                        }}>
                         <View style={{marginBottom:10,paddingLeft:10}}>
                         <Text style={{fontFamily:'OpenSans-BoldItalic',fontSize:16,}}>Item :- {item.Name} Added To Cart</Text>
                         </View>
                         <View style={{width:100,marginLeft:100}}>
                         <Button onPress={()=>setModal(false)} title="Ok" />
                         </View>                       
                        

                    </View>
                </Modal>
            </View>
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
                    fontFamily:'OpenSans-Bold'
                }}>{item.Name}</Text>
                <Image style={{
                    height: 300,
                    width: 300,
                    marginLeft: 10,
                    backgroundColor: "#D3D3D3"
                }}
                    source={{ uri: item.URL }} />
                <Text style={{ fontSize: 30 ,fontFamily:'OpenSans-SemiBold'}}>{item.Cost}$</Text>
                <Text style={{ fontSize: 15, marginBottom: 10 ,fontFamily:'OpenSans-SemiBold'}}>{item.Description}</Text>
                <View style={{marginBottom:10}}>
                <Button onPress={() => { addItem(item);setModal(true)  }}    title="Add To Cart" />
                </View>
                <View>
                <Button onPress={()=>{ navigation.navigate('Cart')}} title="Go to Cart" />
                </View>               
                
            </View>

        </View>

    )

}

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

export default connect(mapStateToProps, mapDispatchToProps)(Details);