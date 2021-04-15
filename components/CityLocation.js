import React, { useEffect } from "react";
import { View, Text, TextInput, StyleSheet, Button} from "react-native";
import Colors from "../styleConstant/Colors";
import { connect } from "react-redux";
import getCityNameData from "../store/actions/getCityNameData";
import getCityLocData from "../store/actions/getCityLocData";
import Geocoder from "react-native-geocoding";

Geocoder.init('AIzaSyCPvj8dihamNluV64OEiVNQlmmXrbDwvhA');

const CityLocation = (props) => {
    
    const Colosseum = () => {
      Geocoder.from(props.dataCitiesName.dataCitiesName.toString())
      .then(json => {
        var location = json.results[0].geometry.location;
        console.log(location);
        getCitySunriseSunset(location.lat, location.lng)
        console.log(props.all)
      })
      .catch(error => console.warn(error));
  }

  const getCitySunriseSunset = (cityLatitude, cityLongitude) => {
    let SunCalc = require('suncalc');  
    let times = SunCalc.getTimes(new Date(), cityLatitude, cityLongitude);
    props.getCityLocDataFn(times);
    return console.log(times)
  }

  useEffect(() => {
    Colosseum()
  }, [])

    return (
        <View style={styles.container}>
            <Text> CitySunset : {props.dataCity.dataCity.sunset.toString().slice(15,25)} </Text>
            <Text> CitySunrise : {props.dataCity.dataCity.sunrise.toString().slice(15,25)} </Text>

            <Text> City name: {props.dataCitiesName.dataCitiesName.toString()}</Text> 
            
            <Text style={styles.title}>Input the name of city</Text>
            <TextInput style={styles.inputCityName} defaultValue="" onChangeText={(cityName)=>props.getCityNameDataFn(cityName)}/> 
            <Button title="Get data city" onPress={Colosseum} />
        </View>
    )
}

const mapStateToProps = (state) => ({
    all:state,
    dataCitiesName:state.dataCitiesName,
    dataCity: state.dataCity
  })

const mapDispatchToProps = (dispatch)=> {
    return {
      getCityNameDataFn: (data) => dispatch(getCityNameData(data)),
      getCityLocDataFn: (data) => dispatch(getCityLocData(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CityLocation);

const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: Colors.primaryMainBackGround,
      width: "100%",
    },
    title: {
      fontSize: 12,
      fontWeight: "bold",
    },
    inputCityName :{
        width:70,
        margin:20,
        backgroundColor:"lightgrey",
        borderRadius:5
    }
  });
  