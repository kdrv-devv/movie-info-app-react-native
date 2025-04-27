import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import { image500 } from '../api'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const {width ,height } = Dimensions.get("window")

const MovieCard = ({item}) => {
  const navigate = useNavigation()

  return (
    <TouchableWithoutFeedback style={style.mov_card} onPress={()=> navigate.navigate("Movie", item)} >
        <Image style={{width:width, height:height * 0.6 , borderRadius:20 }} source={{uri:image500(item.poster_path)}} />
    </TouchableWithoutFeedback>
  )
}

export default MovieCard

const style = StyleSheet.create({
    mov_img:{
        borderRadius:20,
        width:width , 
        height:height
    }
})