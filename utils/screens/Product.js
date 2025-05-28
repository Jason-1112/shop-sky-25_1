import { View, Text } from "react-native";

export function Product(props) {
    return (
        <View>
            <Text>{props.name}</Text>
            <Text>{props.description}</Text>
            <Text>{props.price}</Text>
        </View>
    )
}