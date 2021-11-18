import React, {Component} from 'react';
import {Text, TextInput, TouchableOpacity, View, StyleSheet} from "react-native";

export default class Register extends Component { 
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
                <Text> Pagina de Register </Text>
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
                        <Text> Registrar </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.button} >
                         <Text> Ya estoy registrado</Text> 
                    </TouchableOpacity>
            </View> 
        )
    }
}

const styles = StyleSheet.create ({
    emailentry: { 
        backgroundColor: "lightblue",
        fontSize: 20,
        margin: 30,
    },
    passentry: { 
        backgroundColor: "lightblue",
        fontSize: 20,
        margin: 30,
    }, 
    button: { 
        border: "radius",
        backgroundColor: "grey",
        margin: 15,
    },
    
})