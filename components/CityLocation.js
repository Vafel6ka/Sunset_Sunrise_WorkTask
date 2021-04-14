import React from "react";
import { View, Text, TextInput, StyleSheet, Button} from "react-native";
import Colors from "../styleConstant/Colors";
import { connect } from "react-redux";
import getDataCity from "../store/actions/getDataCity";
import Geocoder from "react-native-geocoding";

Geocoder.init("AIzaSyDlr7H32pHtHlaeC67yv6uvnyDqMnTCYUs");
//AIzaSyDlr7H32pHtHlaeC67yv6uvnyDqMnTCYUs


const CityLocation = (props) => {
    //console.log(props, 'props')
    
    Geocoder.from("Colosseum")
		.then(json => {
			var location = json.results[0].geometry.location;
			console.log(location);
		})
		.catch(error => console.warn(error));


    const cityLatitude = 37;
    const cityLongitude = 100;

    const  getCitySunriseSunset = () => {
        const axios = require("axios");
        axios
          .get(
            `https://api.sunrise-sunset.org/json?lat=${cityLatitude}&lng=${cityLongitude}&date=today
          `
          )
          .then(function (response) {
            props.getDataCityFn(response.data.results) //ACTION!    
          })
          .catch(function (error) {
            // handle error
          });
      }

    return (
        <View style={styles.container}>
            <Text> CitySunset : {props.dataCity.dataCity.sunset} </Text>
            <Text> CitySunrise : {props.dataCity.dataCity.sunrise} </Text>
            {/* <Text> City latitude : {}</Text>
            <Text> City longitude : {}</Text> */}
            <Text style={styles.title}>Input the name of city</Text>
            <TextInput style={styles.inputCityName} defaultValue="enter city name"/>
            <Button title="Get data city" onPress={getCitySunriseSunset} />
        </View>
    )
}

const mapStateToProps = (state) => ({
    all:state,
    dataCity: state.dataCity
  })

const mapDispatchToProps = (dispatch)=> {
    return {
        getDataCityFn: (data) => dispatch(getDataCity(data))
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
        width:70
    }
  });
  