import React, { useEffect } from "react";
import { View, Text, TextInput, StyleSheet, Button} from "react-native";
import Colors from "../styleConstant/Colors";
import { connect } from "react-redux";
import getCityNameData from "../store/actions/getCityNameData";
import getCityLocData from "../store/actions/getCityLocData";
import Geocoder from "react-native-geocoding";

// Geocoder.init("AIzaSyDlr7H32pHtHlaeC67yv6uvnyDqMnTCYUs");
//AIzaSyDlr7H32pHtHlaeC67yv6uvnyDqMnTCYUs


const CityLocation = (props) => {
    //console.log(props, 'props')
    
    const Colosseum = () => {
    Geocoder.from("Colosseum")
		.then(json => {
			var location = json.results[0].geometry.location;
			console.log(location);
		})
		.catch(error => console.warn(error));
  }

    const findCity = () =>{
      const cityLatitude = 10;
      const cityLongitude = 100;
      getCitySunriseSunset(cityLatitude, cityLongitude)
      console.log(props.all)
  }

  const getCitySunriseSunset = (cityLatitude, cityLongitude) => {
    let SunCalc = require('suncalc');  
    let times = SunCalc.getTimes(new Date(), cityLatitude, cityLongitude);
    props.getCityLocDataFn(times);
    return console.log(times)
  }

  useEffect(() => {
    findCity()
  }, [])

    return (
        <View style={styles.container}>
            <Text> CitySunset : {props.dataCity.dataCity.sunset.toString().slice(15,25)} </Text>
            <Text> CitySunrise : {props.dataCity.dataCity.sunrise.toString().slice(15,25)} </Text>

            <Text> City name: {props.dataCitiesName.dataCitiesName.toString()}</Text> 
            
            <Text style={styles.title}>Input the name of city</Text>
            <TextInput style={styles.inputCityName} defaultValue="" onChangeText={(cityName)=>props.getCityNameDataFn(cityName)}/> 
            <Button title="Get data city" onPress={findCity} />
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
  