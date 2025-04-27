import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import MovieCard from "./movie-card";

const { width ,height } = Dimensions.get('window');



const TrendingMovie = ({ trending }) => {

  return (
    <View style={style.con}>
      <Carousel
        width={width}
        height={height * 0.6}
        data={trending}
        renderItem={({ item, index }) => <MovieCard key={item.id}  item={item} /> }
        mode="parallax" //  modelar: "parallax", "stack", "horizontal-stack"
        loop //  carousel infinite aylansin
        autoPlay // autoplay qilsin
        autoPlayInterval={6000} // autoplay har 2 sekundda
        containerStyle={{display:'flex' , alignItems:"center"}}
        modeConfig={{
            snapDirection: 'right', // asosiy rasm chapdan o'ngga harakat qiladi
            stackInterval: 30, // yonidagilar qancha chiqib turishini 
            scaleInterval: 0.8, // yon dagilarning kichikroq ko'rinishi
            opacityInterval: 0.1, // yonidagilarni shaffofroq qilish
          }}
      />
     
    </View>
  );
};

export default TrendingMovie;

const style = StyleSheet.create({
  con: {
    marginBottom: 5,
  },
  txt: {
    color: "white",
    fontSize: 20,
  },
});
