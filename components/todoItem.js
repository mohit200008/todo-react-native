import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({ item, pressHandler }) {
    return (
        <TouchableOpacity>
          <View style={styles.item}>
            <MaterialIcons name='delete' size={20} color='#333' onPress={()=> pressHandler(item.key)} />
            <Text style={styles.itemText}>{item.text}</Text>
          </View> 
        </TouchableOpacity>
    )
}

const styles= StyleSheet.create({
    item: {
        padding: 16,
        marginTop:15,
        borderColor: '#bbb',
        borderWidth: 2,
        borderStyle: 'solid',
        borderRadius: 15,
        flexDirection: 'row',
    },
    itemText: {
        marginLeft:10,
    }
})

