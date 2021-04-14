import React, { useEffect } from "react";
import { View, Text, StyleSheet, Button} from "react-native";
import Colors from "../styleConstant/Colors";
import Geolocation from "@react-native-community/geolocation";
import {connect} from 'react-redux';
import getData from '../store/actions/getData';

const Main = (props) => {
//console.log(props, 'props')
  const  getSunriseSunset = (latitude, longitude) => {
    const axios = require("axios");
    axios
      .get(
        `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&date=today
      `
      )
      .then(function (response) {
        props.getDataFn(response.data.results) //ACTION!    
      })
      .catch(function (error) {
        // handle error
      });
  }
  
  function geoFindMe() {
    function success(pos) {
      let crd = pos.coords;
      let latitude = crd.latitude;
      let longitude = crd.longitude;
      console.log(`latitude:${latitude}`);
      console.log(`longitude:${longitude}`);
      getSunriseSunset(latitude, longitude);
      }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    if (Geolocation) {
        Geolocation.getCurrentPosition(success, error);
    } else { 
        console.log("Geolocation is not supported by this browser.");
    }
  }

  useEffect(() => {
    geoFindMe()
  }, [])
  
  return (
    <View style={styles.container}>
      <Text> Sunset : {props.data.data.sunset}</Text>
      <Text> Sunrise : {props.data.data.sunrise}</Text>
    </View>
  );
};

const mapStateToProps = (state) => ({
  all:state,
  data: state.data,
  dataCity: state.dataCity
})

const mapDispatchToProps = (dispatch)=> {
    return {
      getDataFn: (data) => dispatch(getData(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primaryMainBackGround,
  },
});