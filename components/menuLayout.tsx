import { router } from "expo-router";
import { View, Text, Image, StyleSheet, ImageSourcePropType, TouchableOpacity } from "react-native";

export const MenuLayout = () => {
    const onPress = () => {
        router.push("/(tabs)/explore")
    }
    const styles = StyleSheet.create({
        textConteiner:{
            display: 'flex',
            alignItems: 'center',
            justifyContent:'center',
            width: 300,
            height: 'auto',
            borderTopWidth: 2,
            borderBottomWidth: 2
        },
        btnConteiner:{
            marginTop: 40
        },
        tt:{    
            marginTop: 20,
            fontFamily: 'Helvetica',
            fontWeight: 'bold',
            textAlign: 'center',
            letterSpacing: 5,
            lineHeight: 30,
            fontSize: 36,

        },
        descriptionConteiner:{
            display: 'flex',
            alignItems: 'center',
            justifyContent:'center',
            width: 300,
            height: 'auto',
            borderWidth: 1,
            marginTop: 25,
            marginBottom: 20
        },
        descText:{
            padding: 20,
            fontFamily: 'Helvetica',
            fontWeight: '500',
            textAlign: 'center',
            fontSize: 21,

        },
        btnText:{
            display:'flex',
            backgroundColor: '#6C699C',
            color: 'white',
            borderRadius: 25,
            width: 100,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'Helvetica',
            fontSize: 21
        }
    })
    return(
        <>
        <View style={styles.textConteiner}>
            <Text style={styles.tt}>Ricky{'\n'}
                &{'\n'}
                Morty{'\n'}
            </Text>
            <View style={styles.descriptionConteiner}>
                <Text style={styles.descText}>aplicativo simples e divertido desenvolvido para testar e explorar a API pública do Rick and Morty. 
                    Com ele, você pode visualizar personagens, episódios e localizações do universo da série animada de forma rápida e organizada.

</Text>
            </View>
            
        </View>
        <View style={styles.btnConteiner}>
        <TouchableOpacity onPress={onPress}>
                <Text style={styles.btnText}>Iniciar</Text>
            </TouchableOpacity>
        </View>
        </>
    )
}