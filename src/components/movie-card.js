import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import { image500 } from '../api'

const {width ,height } = Dimensions.get("window")

const MovieCard = ({item}) => {
  return (
    <View style={style.mov_card}>
        <Image style={{width:width, height:height * 0.6 , borderRadius:20 }} source={{uri:image500(item.poster_path)}} />
    </View>
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