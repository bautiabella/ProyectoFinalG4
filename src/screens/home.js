import React from 'react'
import { View, Text, TouchableOpacity } from "react-native"

export default function Home() {

    function HandlePress() { 
        console.log ('me clickearon')
    }
        return (
<View> 
<Text> 
Home
</Text>
  <TouchableOpacity style = {styles.button} onPress= {() => this.props.HandleLogout()}> 
    <Text> 
        Clickeame 
    </Text> 
  </TouchableOpacity>
</View>

) 
} 