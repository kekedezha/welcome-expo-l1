import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

import icedCoffeeImg from "@/assets/images/iced-coffee.png";

const Contact = () => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={icedCoffeeImg}
                resizeMode='cover'
                style={styles.image}
            >
                <Text style={styles.title}>Contact</Text>

            </ImageBackground>
        </View>
    )
}

export default Contact

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    title: {
        color: 'white',
        fontSize: 42,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        marginBottom: 120
    },
    image: {
        width: '100%',
        height: '100%',
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center'
    },
    link: {
        color: 'white',
        fontSize: 42,
        fontWeight: 'bold',
        textAlign: 'center',
        textDecorationLine: 'underline',
        padding: 4,
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    button: {
        height: 60,
        borderRadius: 20,
        backgroundColor: 'rgba(0,0,0,0.75)',
        padding: 6,
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 4,
    }
})