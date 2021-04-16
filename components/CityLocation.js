import React, { useEffect } from "react";
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity} from "react-native";
import Colors from "../styleConstant/Colors";
import { connect } from "react-redux";
import getCityNameData from "../store/actions/getCityNameData";
import getCityLocData from "../store/actions/getCityLocData";
import Geocoder from "react-native-geocoding";
import InnerText from "../styleConstant/InnerTextStyle";
import TitleText from "../styleConstant/TitleTextStyle"

Geocoder.init('AIzaSyCPvj8dihamNluV64OEiVNQlmmXrbDwvhA');

const CityLocation = (props) => {
    const getLocation = () => {
      let cityName = props.dataCitiesName.dataCitiesName.toString()
      if (cityName == "[object Object]") {return} else {
      Geocoder.from(cityName)
      .then(json => {
        var location = json.results[0].geometry.location;
        console.log(location);
        getCitySunriseSunset(location.lat, location.lng)
      })
      .catch(error => console.warn(error,'ERRRRRROOORRR'));
  }
}

  const getCitySunriseSunset = (cityLatitude, cityLongitude) => {
    let SunCalc = require('suncalc');  
    let times = SunCalc.getTimes(new Date(), cityLatitude, cityLongitude);
    props.getCityLocDataFn(times);
    console.log(props.all)
  }

  useEffect(() => {
    getLocation()
  }, [])

    return (
        <View style={styles.container}>
          <View style={styles.content}>   
            
            <TitleText> Selected city location data:</TitleText>  
    
              <InnerText> 
                Sunset : {props.dataCity.dataCity.sunset.toString().slice(15,25)} 
              </InnerText>
              <InnerText> 
                Sunrise : {props.dataCity.dataCity.sunrise.toString().slice(15,25)} 
              </InnerText>
              <InnerText> 
                Selected city: {props.dataCitiesName.dataCitiesName}
              </InnerText> 

            <TextInput 
                style={styles.inputCityName} 
                defaultValue="New York" 
                onChangeText={(cityName)=>props.getCityNameDataFn(cityName)}/> 

            <Text style={styles.citytitle}>
                Input the name of city
            </Text>
            <TouchableOpacity style={styles.btn} onPress={getLocation}>
                <Text style={styles.textBtn}>Get data</Text>
            </TouchableOpacity>
          </View>
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
      flex:0.6
    },
    content: {
      justifyContent: 'center', 
      alignItems: 'center',  
    },
    citytitle: {
      fontSize: 12,
      fontWeight: "bold",
    },
    inputCityName :{
        width:240,
        height:30,
        margin:20,
        backgroundColor:Colors.primaryMainBackGround,
        borderRadius:5,
        textAlign:"center",
        borderBottomWidth:0.5,
        borderBottomColor:"grey",
        fontSize:20
    },
    btn: {
      width: 200,
      marginTop: 20,
      backgroundColor: Colors.primaryBtnBgColor,
      padding: 15,
      borderRadius: 10,
      alignItems:"center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    textBtn: {
      fontSize: 19
    }
  });
  