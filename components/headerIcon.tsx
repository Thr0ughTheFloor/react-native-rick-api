import { View, Text, Image, StyleSheet, ImageSourcePropType } from "react-native";

export const Header = ({image} : {image: ImageSourcePropType}) => {
    const styles = StyleSheet.create({
        background: {
            marginTop: 40,
            backgroundColor: 'transparent',
            alignItems: 'center',
            justifyContent: 'center'
        },
        img: {
            width: 200,
            height: 200

        }
    })
    return(
        <>
        <View style={styles.background}>
            <Image style={styles.img} source={image}></Image> 
        </View>

        </>        
    )


}