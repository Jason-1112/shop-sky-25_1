import { Text } from "react-native";



export function Greeting({name, tafe}) { //props data runs into 2 variables using {}, an object copying 2 elements 
    return (//declarative
        <>
            <Text> {name}</Text>
            <Text>Welcome to : {tafe}</Text>
        </>//translates into imperative using Babel
    );
}

//react collects all attributes and group it into an object
//props = name, tafe (object  reated by react)

//component in react is a function, it return some code.
//react take JSX code and translate it into a command
//declarat