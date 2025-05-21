import React from "react";
import { Text } from "react-native";

export function Greeting(props) { //props data runs into 2 variables using {}, an object copying 2 elements 
    return (
        <React.Fragment>
            <Text> {props.name}</Text>
            <Text>Welcome to : {props.tafe}</Text>
        </React.Fragment>
    );
}

//react collects all attributes and group it into an object
//props = name, tafe (object  reated by react)

//component in react is a function, it return some code.
//react take JSX code and translate it into a command
//declarat