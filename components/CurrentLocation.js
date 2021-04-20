import React, { useEffect } from "react";
import { View, StyleSheet} from "react-native";
import Colors from "../styleConstant/Colors";
import Geolocation from "@react-native-community/geolocation";
import { connect } from 'react-redux';
import getCurrentLocData from '../store/actions/getCurrentLocData';
import InnerText from "../styleConstant/InnerTextStyle";
import TitleText from "../styleConstant/TitleTextStyle"

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

  Geolocation.getCurrentPosition(info => console.log(info));//Another mathod to get current location

useEffect(() => {
  geoFindMe()
}, [])
  
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TitleText> Current location data:</TitleText>
        <InnerText> 
          Sunset : {props.data.data.sunset.toString().slice(15,25)}
        </InnerText>
        <InnerText> 
          Sunrise : {props.data.data.sunrise.toString().slice(15,25)}
        </InnerText>
      </View>
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
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primaryMainBackGround, 
    borderBottomWidth:1,
    flex:0.4
  },
  content: {
    justifyContent: 'center', 
    alignItems: 'center',  
  },
});