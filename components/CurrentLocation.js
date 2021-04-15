import React, { useEffect } from "react";
import { View, Text, StyleSheet} from "react-native";
import Colors from "../styleConstant/Colors";
import Geolocation from "@react-native-community/geolocation";
import { connect } from 'react-redux';
import getCurrentLocData from '../store/actions/getCurrentLocData';

const Main = (props) => {

  const getSunriseSunset = (latitude, longitude) => {
    let SunCalc = require('suncalc');  
    let times = SunCalc.getTimes(new Date(), latitude, longitude);
    props.getCurrentLocDataFn(times);
  }
  
  const geoFindMe = () => {
    function success(pos) {
      let crd = pos.coords;

      getSunriseSunset(crd.latitude, crd.longitude);
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
      <Text> Sunset : {props.data.data.sunset.toString().slice(15,25)}</Text>
      <Text> Sunrise : {props.data.data.sunrise.toString().slice(15,25)}</Text>
    </View>
  );
};

const mapStateToProps = (state) => ({
  data: state.data
})

const mapDispatchToProps = (dispatch)=> {
    return {
      getCurrentLocDataFn: (data) => dispatch(getCurrentLocData(data))
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


     // .get(
      //   `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&date=today
      // `
      // )