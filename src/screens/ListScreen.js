import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const friends = [
    { name: 'Friend 1', age: 25 },
    { name: 'Friend 2', age: 25 },
    { name: 'Friend 3', age: 25 },
    { name: 'Friend 4', age: 25 },
    { name: 'Friend 5', age: 25 }
];

const ListScreen = () => {
    return <FlatList
        data={friends}
        keyExtractor={friend => friend.name }
        renderItem={renderItem} />
};

const renderItem = ({item}) => {
    return <Text>{item.name} - Age {item.age}</Text>;
}

const styles = StyleSheet.create({});

export default ListScreen;