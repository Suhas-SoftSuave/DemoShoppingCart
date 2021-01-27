import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';


const Login = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [userValue, setUserValue] = useState('')
    const [userPass, setUserPass] = useState('')

    const navigation = useNavigation()
    const onChangeUserValue = (e) => {
        setUserValue(e.nativeEvent.text)
        setName(e.nativeEvent.text)

    }
    const onChangePassword = (e) => {
        setUserPass(e.nativeEvent.text)
        setPassword(e.nativeEvent.text)

    }
    const onLogin = () => {
        if (name && password) {
            if (name == "Suhas" && password == "Suhas") {
                navigation.navigate('Home')
            }
            else {
                alert('Invalid Credentials')
            }
        }

    }
    return (
        <View style={{
            flex: 1,
            alignContent: 'center',
            justifyContent: 'center',
        }}>
            <View style={{
                width: 300,
                height: 500,
                justifyContent: 'center',
                marginLeft: 60,
                paddingLeft: 30,
                paddingBottom: 100
            }}>
                <View style={{ marginBottom: 20 }} >
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        marginBottom: 10
                    }}>
                        UserName:</Text>
                    <TextInput
                        onChange={(e) => onChangeUserValue(e)}
                        value={userValue}
                        style={{
                            height: 40,
                            width: 250,
                            borderColor: 'black',
                            borderWidth: 1,
                            marginBottom: 5,
                            paddingLeft: 10
                        }} />
                </View>
                <View style={{ marginBottom: 20 }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        marginBottom: 10
                    }}>
                        Password:
            </Text>
                    <TextInput
                        textContentType='password'
                        secureTextEntry={true}
                        onChange={(e) => onChangePassword(e)}
                        value={userPass}
                        style={{
                            height: 40,
                            width: 250,
                            borderColor: 'black',
                            borderWidth: 1,
                            marginBottom: 5,
                            marginLeft: 3,
                            paddingLeft: 10
                        }}
                    />
                </View>
                <View style={{ width: 250, }}>
                    <Button title="Login" onPress={() => onLogin()}></Button>
                </View>


            </View>

        </View>
    )
}

export default Login