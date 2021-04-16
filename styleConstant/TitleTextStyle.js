import React from "react";
import { Text } from "react-native";
import { StyleSheet } from "react-native"

const TitleText = (props) => {
    return (
        <Text style={styled.title}>
            {props.children}
        </Text>
    )
}

export default TitleText;

const styled = StyleSheet.create({
    title:{
        margin:5,
        fontSize:18,
        fontWeight:"600"
      },
})