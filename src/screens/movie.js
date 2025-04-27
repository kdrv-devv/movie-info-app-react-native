import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet,Text,TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import {ChevronLeftIcon} from 'react-native-heroicons/outline'
import {HeartIcon} from 'react-native-heroicons/solid'
 
const Movie = () => {
  const navigation  = useNavigation()
  const [isFavorite , setIsFavorite] = useState(false)

  const {params:item} = useRoute()
  

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 20 }}
      style={style.container}
    >

      <View >
        <SafeAreaView style={style.header}>
        <TouchableOpacity  onPress={() => navigation.goBack()} >
          <ChevronLeftIcon size={32} strokeWidth={2.5} color={"white"}/>
        </TouchableOpacity>

        <TouchableOpacity  onPress={()=>setIsFavorite(prev => !prev)}  >
          <HeartIcon size={35} strokeWidth={2.5} color={isFavorite?"red":"white"}/>
        </TouchableOpacity>
        </SafeAreaView>
      </View>
 
    </ScrollView>
  );
};

export default Movie;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#242a32",
  },
  header:{
    width:"100%",
    display:"flex",
    flexDirection:"row",
    padding:12,
    justifyContent:"space-between"
  }
});
