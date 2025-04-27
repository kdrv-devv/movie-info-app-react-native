import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { image185 } from "../api";

const UpcomingMovie = ({ upcoming , title }) => {
  const { width, height } = Dimensions.get("window");

  return (
    <View style={style.upcoming_con}>
      <Text style={style.upcom_text}>{title}</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          display: "flex",
          alignItems: "center",
          gap: 17,
          paddingHorizontal: 10,
        }}
      >
        {upcoming.map((item) => (
          <View key={item.id} style={style.hor_con}>
            <Image
              style={{
                width: width * 0.3,
                height: height * 0.2,
                borderRadius: 20,
              }}
              source={{ uri: image185(item.poster_path) }}
            />
            <Text style={style.item_title}>
              {item.title.length > 12
                ? item.title.slice(0, 15) + "..."
                : item.title}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default UpcomingMovie;

const style = StyleSheet.create({
  upcoming_con: {
    marginTop:7
  },
  upcom_text: {
    fontSize: 22,
    fontWeight: 500,
    paddingLeft: 10,
    color: "white",
  },
  hor_con: {
    marginTop: 15,
  },
  item_title: {
    color: "white",
    fontSize: 12,
  },
});
