import React from 'react'
import { View, Text, TouchableOpacity } from "react-native"

export default function Home() {

    function HandlePress() { 
        console.log ('me clickearon')
    }
        return (
<View> 
<Text> 
    Nicolas Mizrahi, Alan Chami y Bautista Abella
</Text>
  <TouchableOpacity onPress= {() => HandlePress()}> 
    <Text> 
        Clickeame 
    </Text> 
  </TouchableOpacity>
</View>

) 
} 