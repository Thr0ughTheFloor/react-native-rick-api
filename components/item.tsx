import { View, StyleSheet, Text } from "react-native";
import { Image } from "expo-image"

export const Item = ({name, age, date, image, status, gender} : {name: string, age: string, date: string, image: string, status: string, gender: string}) => {
    return(
        <View style={styles.itemList}>
            <Image style={styles.imageStyle} source={image}/>
            <Text>{name}</Text>
            <Text>{age}</Text> 
            <Text>{date}</Text>
            <Text>{status}</Text>
            <Text>{gender}</Text>             
        </View>
    )
}

const styles = StyleSheet.create({
    itemList: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'flex-end',
        backgroundColor: '#6C699C',
        margin: 2,
        height: 280,
        paddingHorizontal: 50
    },

    imageStyle: {
        width: 90,
        height: 90,
        zIndex: 999
    }
})