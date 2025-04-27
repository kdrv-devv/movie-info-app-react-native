import React from 'react'
import { Button, StatusBar, StyleSheet, Text, View } from 'react-native'

const Detailed = ({navigation}) => {
  
  return (
  <View  style={style.container}  >
      <Text>Detailed page</Text>
        <Button title=" go to  Home page"
              onPress={()=> navigation.navigate("Home") }
            ></Button>
    </View>
  )
}

export default Detailed


const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"green"
    }
})