import React, { useEffect, useState } from "react";
import { Image, ScrollView } from "react-native";
import { StatusBar, StyleSheet,  View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  fetchPopularMovie,
  fetchTopRatedMovie,
  fetchTrendingMovie,
  fetchUpcomingMovie,
} from "../api";
import TrendingMovie from "../components/trending-movie";
import UpcomingMovie from "../components/upcoming-movie";
import Loader from "../components/loader";

const Home = ({ navigation }) => {
  const [trending, setTrending] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [toprated, setTopRated] = useState([]);
  const [popular ,setPopular] = useState([])
  const [loading , setLoading] = useState(true)

  useEffect(() => {
      getTrandingMovie();
      getUpcomingMovie();
      getTopRatedMovie();
      getPopular()
  }, []);

  const getTrandingMovie = async () => {
    const data = await fetchTrendingMovie();
    setTrending(data.results);
    setLoading(false)
  };

  const getPopular = async ()=>{
    const data =  await fetchPopularMovie()
    setPopular(data.results)
  }

  const getUpcomingMovie = async () => {
    const data = await fetchUpcomingMovie();
    setUpcoming(data.results);
  };
  const getTopRatedMovie = async () => {
    const data = await fetchTopRatedMovie();
    setTopRated(data.results);
  };

  return (
    <View style={style.container}>
      <SafeAreaView>
        <StatusBar barStyle={"light"} />
        <View style={style.navbar}>
          <Image
            style={style.navbar_logo}
            source={require("../../assets/movie-logo.png")}
          />
          <Icon name="search" size={35} color={"white"} />
        </View>
      </SafeAreaView>

    {
      loading ? <Loader/> : <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      {trending.length > 0 && <TrendingMovie trending={trending} />}
      {upcoming.length > 0 && <UpcomingMovie upcoming={upcoming} title={"Upcoming Movies"} />}
      {popular.length > 0 && <UpcomingMovie upcoming={popular} title={"Popular Movies"} />}
      {trending.length > 0 && <UpcomingMovie upcoming={trending.reverse()} title={"Trending Movies"} />}
      {toprated.length > 0 && <TrendingMovie trending={toprated} />}

    </ScrollView>
    }
    </View>
  );
};

export default Home;

const style = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    borderColor: "white",
    borderBottomWidth: 0.5,
  },
  navbar_logo: {},
  container: {
    flex: 1,
    backgroundColor: "#242a32",
  },
});
