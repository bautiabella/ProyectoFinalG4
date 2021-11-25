import React, {Component} from 'react';
import {Text, TextInput, TouchableOpacity, View, StyleSheet, ScrollView} from "react-native";


export default class Register extends Component { 
    constructor(props) { 
        super(props); 
        this.state = {
            email: "",
            contraseña: "", 
            username: ""
        }
    }

    handleRegister(){ 
        if (this.state.email !== "" && this.state.contraseña !== "" && this.state.username !== ""){
            this.props.handleRegister(this.state.email, this.state.contraseña, this.state.username)
        }
     }
    render (){ 
        return (
            <ScrollView>
            <View style = {styles.container}>
                <Text style={styles.texto}> Página de Register </Text>
                <TextInput
                    style = {styles.emailentry}
                    keyboardType = "default"
                    placeholder = "username"
                    onChangeText = { texto => this.setState({username: texto})}
                    />
                    <TextInput
                    style = {styles.emailentry}
                    keyboardType = "email-adress"
                    placeholder = "email"
                    onChangeText = { texto => this.setState({email: texto})}
                    />
                   <TextInput
                    style = {styles.passentry}
                    keyboardType = 'default'
                    placeholder = "escriba su contraseña"
                    secureTextEntry = {true}
                    onChangeText = { texto => this.setState({contraseña: texto})}
                    />
                    <TouchableOpacity style = {styles.button} onPress={() => this.handleRegister()}>
                        <Text style = {styles.texto}> Registrarme </Text>
                    </TouchableOpacity>
            </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "lightblue",
        textAlign: 'center'
    }, 
    texto: { 
        textAlign: 'center'
    }, 
    emailentry: { 
        backgroundColor: "lightgrey",
        fontSize: 20,
        margin: 30,
        textAlign: 'center'
    },
    passentry: { 
        backgroundColor: "lightgrey",
        fontSize: 20,
        margin: 30,
        textAlign: 'center'
    }, 
    button: { 
        border: "radius",
        backgroundColor: "lightgrey",
        margin: 15,
        textAlign: 'center'
    },
    
})