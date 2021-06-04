import React, { useState } from 'react';
import { StyleSheet, Text, TextInput,Button, View} from 'react-native';

export default function AddTodo({ submitHandler }) {
    const [text,setText]= useState('');

    const changeHandler = (val) => {
        setText(val);

    }


    return (
        <View style={styles.input}>
          <TextInput style={styles.blank}
           placeholder="Enter your task..."
           onChangeText={changeHandler}
          />
          <Button onPress={() => submitHandler(text)} title="ADD TODO" color="crimson" />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 7,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth:2,
        borderBottomColor: '#ddd',

    },
    blank: {
        marginBottom:10,
    }

})
