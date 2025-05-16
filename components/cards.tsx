import { StyleSheet, Text, Image, View } from 'react-native';

interface CardProps {
    name: string;
    image: string; 
  }

export const Card: React.FC<CardProps> = ({ name, image }) => {
    return (
        <View style={styles.container}>
            <Image 
                style={styles.imgstyle} 
                source={{ uri: image }} 
            />
            <Text style={styles.title}>{name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        margin: 10,
    },
    title: {
        fontSize: 16,
        marginTop: 8,
        textAlign: 'center',
    },
    imgstyle: {
        width: 60,
        height: 60, 
        borderRadius: 10, 
        resizeMode: 'cover', // Garante que a imagem cubra o espaço
    }
});