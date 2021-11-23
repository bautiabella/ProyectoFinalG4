import React, {Component} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Register from './Register';
import Login from './Login';
import Home from './home';

export default class Menu extends Component{
    constructor (props){
        super(props)
    }

    render(){
        const Drawer = createDrawerNavigator ();
        return(
            <NavigationContainer> 
      <Drawer.Navigator initialRouteName= "Login">
        <Drawer.Screen name= "Home" component={Home}></Drawer.Screen>
        <Drawer.Screen name= "Register" component={Register}></Drawer.Screen>
        <Drawer.Screen name= "Login" component={Login}></Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
        )
    }
}