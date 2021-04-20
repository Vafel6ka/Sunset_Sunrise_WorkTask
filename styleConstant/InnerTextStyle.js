import React from "react";
import { Text } from "react-native";
import { StyleSheet } from "react-native"

const InnerText = (props) => {
    return (
        <Text style={{ ...styled.textStyle, ...props.style }}>
            {props.children}
        </Text>
    )
}

export default InnerText;

const styled = StyleSheet.create({
    textStyle: {
        margin:5,
        fontSize:16,
      },
})