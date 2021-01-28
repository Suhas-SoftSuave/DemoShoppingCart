import {  Image,  Text, TouchableOpacity, View } from "react-native";
import React from 'react';
import {  useNavigation } from '@react-navigation/native';
import CartImage from '../assets/cart.png'
import Back from '../assets/back.png'
import { connect } from "react-redux";
import camera from "../assets/camera.png"

const mapStateToProps = (state) => {
  return {
    stateItems: state.items,
    qty: state.items[state?.items?.length - 1]?.qty
  }
}
const TitleBar = (props) => {
  const navigation = useNavigation();
  return (

    <View>
      {props.cart && !props.home && <View style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: "#a8dbee", }}>

        <TouchableOpacity style={{ maxHeight: 40, flexDirection: 'row' }}
          onPress={() => navigation.navigate('Camera')}>        
          <Image style={{
            maxHeight: 40,
            maxWidth: 40
          }}
            source={camera} />
        </TouchableOpacity>
        <TouchableOpacity style={{ maxHeight: 40 , flexDirection:'row-reverse'}} onPress={() => navigation.navigate('Cart')} >
        {props.stateItems.length > 0 &&
            <View style={{
              backgroundColor: 'red',
              height: 15,
              width: 15,
              borderRadius: 100,
              position: 'absolute',
              zIndex: 9
            }}>
              <Text style={{
                fontSize: 13,
                fontWeight: 'bold',
                marginLeft: 4
              }}>
                {props.stateItems.length}
              </Text>

            </View>}

          <Image style={{
            maxHeight: 40,
            maxWidth: 40
          }}
            source={CartImage} />
        </TouchableOpacity>
      </View>}

      {props.home && !props.cart &&
        <View style={{
          padding: 10,
          flexDirection: 'row',
          justifyContent: 'flex-start',
          backgroundColor: "#a8dbee",
        }}>
          <TouchableOpacity style={{ maxHeight: 40, }}
            onPress={() => navigation.goBack()}  >
            <Image style={{ maxHeight: 40, maxWidth: 40 }} source={Back} />
          </TouchableOpacity>
        </View>}

      {props.home && props.cart &&
        <View style={{
          padding: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: "#a8dbee",
        }}>
          <TouchableOpacity style={{ maxHeight: 40, }}
            onPress={() => navigation.goBack()}  >
            <Image style={{
              maxHeight: 40,
              maxWidth: 30
            }}
              source={Back} />
          </TouchableOpacity>
          <TouchableOpacity style={{
            maxHeight: 30,
            flexDirection: 'row-reverse'
          }}
            onPress={() => navigation.navigate('Cart')} >
            {props.stateItems.length > 0 &&
              <View style={{
                backgroundColor: 'red',
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
                height: 15,
                width: 15,
                borderRadius: 100,
                position: 'absolute',
                zIndex: 9
              }}>
                <Text style={{
                  fontSize: 13,
                  fontWeight: 'bold'
                }}>
                  {props.stateItems.length}
                </Text>
              </View>}
            <Image style={{
              maxHeight: 40,
              maxWidth: 40
            }}
              source={CartImage} />
          </TouchableOpacity>
        </View>}
    </View>
  )
}

export default connect(mapStateToProps, null)(TitleBar);

