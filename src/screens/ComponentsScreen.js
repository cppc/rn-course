import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const ComponentsScreen = () => {
    const name = 'cppc';
    const head = <Text style={styles.headStyle}>Getting Started With React Native!</Text>;

    return (
        <View>
            {head}
            <Text style={styles.textStyle}>My name is {name}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    headStyle: {
        fontSize: 45
    },
    textStyle: {
        fontSize: 24
    }
});

export default ComponentsScreen;