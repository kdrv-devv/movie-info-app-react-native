import React from "react";
import { StyleSheet,View } from "react-native";
import AnimatedLoader from "react-native-animated-loader";

const Loader = () => {
  return (
    <View style={styles.load_con}>
      <AnimatedLoader
        visible={true}
        overlayColor="#242a32"
        source={require("../../assets/movie-loader.json")}
        animationStyle={styles.lottie}
        speed={1}
      >
    
      </AnimatedLoader>
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
    load_con:{
        flex:1
    },
  lottie: {
    width: 200,
    height: 200,
  }
});