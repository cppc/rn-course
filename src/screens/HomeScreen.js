import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import TouchableOpacity from "react-native-web/src/exports/TouchableOpacity";

const HomeScreen = ({navigation}) => {
  return (
      <View>
        <Button
            title="Go to Component Demo"
            onPress={() => navigation.navigate('Components')}
        />
        <Button
            title="Go to List Demo"
            onPress={() => navigation.navigate('List')} />
        <Button
            title="Go to Iamge Demo"
            onPress={() => navigation.navigate('Image')} />
      </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
