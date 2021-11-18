import React, {Component} from 'react';
import {Text, TextInput, TouchableOpacity, View, StyleSheet} from "react-native";

export default class Login extends Component { 
    constructor(props) { 
        super(props); 
        this.state = {
            email: "",
            contraseña: ""
        }
    }
    render () { 
        return (
            <View>
                <Text> Pagina de Login </Text>
                <TextInput
                    style = {styles.emailentry}
                    keyboardType = "email-address"
                    placeholder = "escriba su email"
                    onChangeText = { texto => this.setState({email: texto})}
                    />
                   <TextInput
                    style = {styles.passentry}
                    keyboardType = 'default'
                    placeholder = "escriba su contraseña"
                    secureTextEntry = {true}
                    onChangeText = { texto => this.setState({contraseña: texto})}
                    />
                    <TouchableOpacity style = {styles.button} >
                        <Text> Login </Text>

                    </TouchableOpacity>
            </View> 
        )
    }
}

const styles = StyleSheet.create ({
    emailentry: { 
        fontSize: 20
    },
    passentry: { 
        backgroundColor: "red"

    }, 
    button: { 
        border: "radius"
    }
})