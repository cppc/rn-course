import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = (props) => {
    return (
        <View>
            <ImageDetail />
            <ImageDetail />
            <ImageDetail />
            <ImageDetail />
        </View>
    );
}

export default ImageScreen;